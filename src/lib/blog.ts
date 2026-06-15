import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const postsDirectory = path.join(process.cwd(), "content/blog");
const BASE_URL = process.env.NEXT_PUBLIC_API_URL || process.env.API_URL || "https://flownextai.in/api";

export interface PostData {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  readingTime: string;
  content: string;
}

export function sanitizeBlogContent(content: string): string {
  if (!content) return "";
  
  let cleaned = content;

  // 1. Remove any `![caption]` tags that are not followed by a URL (orphan/caption wrappers)
  cleaned = cleaned.replace(/!\[caption\]\((?!(?:https?:\/\/|\/))/g, '');

  // 2. Fix empty link placeholders like `Visit[](url)[to learn more.`
  cleaned = cleaned.replace(/Visit\s*\[\]\((https?:\/\/[^\)]+)\)\[to learn more\.?/gi, 'Visit [Vaidya]($1) to learn more. ');
  cleaned = cleaned.replace(/\[\]\((https?:\/\/[^\)]+)\)/g, '[Link]($1)');
  cleaned = cleaned.replace(/\[to learn more\.?/gi, ' to learn more. ');

  // 3. Close malformed image tags like `![caption](url![caption](`
  cleaned = cleaned.replace(/!\[caption\]\((https?:\/\/[^\s\!]+?\.(?:png|jpg|jpeg|gif|webp|svg))(?![\)])/gi, '![caption]($1)');

  // 4. Parse custom `[cta:Label](url)` blocks and replace them with HTML styled as modern buttons
  cleaned = cleaned.replace(/\[cta:([^\]]+)\]\(([^)]+)\)/g, (match, label, url) => {
    return `<div class="not-prose my-8"><a href="${url}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center bg-accent-primary hover:bg-accent-hover text-text-primary px-6 py-3 rounded-md font-medium tracking-wide transition-all duration-300 no-underline uppercase text-xs border border-accent-primary/20 hover:shadow-[0_0_15px_rgba(200,67,10,0.4)] cursor-pointer">${label}</a></div>`;
  });

  return cleaned;
}

export function convertBlocksToMarkdown(blocksList: any[]): string {
  if (!Array.isArray(blocksList)) return "";

  return blocksList
    .map((block) => {
      const type = block.type;
      const data = block.data || {};
      
      switch (type) {
        case "paragraph": {
          return data.text || "";
        }
        case "header": {
          const level = data.level || 1;
          const hashes = "#".repeat(level);
          const text = (data.text || "").replace(/#+$/, "").trim();
          return `${hashes} ${text}`;
        }
        case "list": {
          const items = data.items || [];
          const style = data.style === "ordered" ? "1. " : "- ";
          
          return items
            .flatMap((item: string) => item.split("\n"))
            .map((item: string) => `${style}${item.trim()}`)
            .join("\n");
        }
        default:
          return data.text || "";
      }
    })
    .join("\n\n");
}

// Local filesystem fallback function for all posts
function getLocalAllPosts(): PostData[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".mdx") || fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "").replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      
      const { data, content } = matter(fileContents);
      const rt = readingTime(content);

      return {
        slug,
        title: data.title || "Untitled",
        date: data.date || "",
        description: data.description || "",
        tags: data.tags || [],
        readingTime: rt.text,
        content: sanitizeBlogContent(content),
      };
    });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

// Local filesystem fallback function for a single post by slug
function getLocalPostBySlug(slug: string): PostData | null {
  try {
    const fullPathMdx = path.join(postsDirectory, `${slug}.mdx`);
    const fullPathMd = path.join(postsDirectory, `${slug}.md`);
    let fullPath = "";
    
    if (fs.existsSync(fullPathMdx)) {
      fullPath = fullPathMdx;
    } else if (fs.existsSync(fullPathMd)) {
      fullPath = fullPathMd;
    } else {
      return null;
    }
    
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    const rt = readingTime(content);

    return {
      slug,
      title: data.title || "Untitled",
      date: data.date || "",
      description: data.description || "",
      tags: data.tags || [],
      readingTime: rt.text,
      content: sanitizeBlogContent(content),
    };
  } catch (error) {
    return null;
  }
}

export async function getAllPosts(): Promise<PostData[]> {
  try {
    // Attempt to fetch from external API
    const res = await fetch(`${BASE_URL}/portfolio/blogs`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`API returned status ${res.status}`);
    }

    const responseData = await res.json();
    
    // Support both direct array response and paginated { items: [...] } response format
    const blogs = Array.isArray(responseData) 
      ? responseData 
      : (responseData && Array.isArray(responseData.items) ? responseData.items : null);

    if (!blogs) {
      throw new Error("API did not return a valid list of blogs");
    }

    const mappedPosts: PostData[] = blogs.map((blog: any) => {
      const rawContent = blog.blocks && Array.isArray(blog.blocks) && blog.blocks.length > 0
        ? convertBlocksToMarkdown(blog.blocks)
        : (blog.content || "");
      const content = sanitizeBlogContent(rawContent);
      const rt = readingTime(content);
      const dateVal = blog.published_at || blog.created_at || blog.updated_at || new Date().toISOString();
      const dateString = dateVal.split("T")[0]; // Use YYYY-MM-DD portion

      return {
        slug: blog.slug,
        title: blog.title || "Untitled",
        date: dateString,
        description: blog.excerpt || (content.length > 150 ? content.substring(0, 150) + "..." : content),
        tags: blog.tags || [],
        readingTime: rt.text,
        content,
      };
    });

    // Sort by date descending
    return mappedPosts.sort((a, b) => (a.date < b.date ? 1 : -1));
  } catch (error) {
    console.warn(`Failed to fetch blogs from API (${error instanceof Error ? error.message : String(error)}). Falling back to local MDX files.`);
    return getLocalAllPosts();
  }
}

export async function getPostBySlug(slug: string): Promise<PostData | null> {
  try {
    // Attempt to fetch from external API
    const res = await fetch(`${BASE_URL}/portfolio/blogs/${slug}`, {
      cache: "no-store",
    });

    if (res.status === 404) {
      // If the API explicitly returns 404, we can check local filesystem fallback
      const localPost = getLocalPostBySlug(slug);
      if (localPost) return localPost;
      return null;
    }

    if (!res.ok) {
      throw new Error(`API returned status ${res.status}`);
    }

    const blog = await res.json();
    if (!blog || typeof blog !== "object") {
      throw new Error("API did not return a valid blog object");
    }

    const rawContent = blog.blocks && Array.isArray(blog.blocks) && blog.blocks.length > 0
      ? convertBlocksToMarkdown(blog.blocks)
      : (blog.content || "");
    const content = sanitizeBlogContent(rawContent);
    const rt = readingTime(content);
    const dateVal = blog.published_at || blog.created_at || blog.updated_at || new Date().toISOString();
    const dateString = dateVal.split("T")[0];

    return {
      slug: blog.slug || slug,
      title: blog.title || "Untitled",
      date: dateString,
      description: blog.excerpt || (content.length > 150 ? content.substring(0, 150) + "..." : content),
      tags: blog.tags || [],
      readingTime: rt.text,
      content,
    };
  } catch (error) {
    console.warn(`Failed to fetch blog slug "${slug}" from API (${error instanceof Error ? error.message : String(error)}). Falling back to local MDX file.`);
    return getLocalPostBySlug(slug);
  }
}
