import { NextResponse } from "next/server";
import { getAllPosts } from "@/lib/blog";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const posts = await getAllPosts();
    const formattedPosts = posts.map((post) => ({
      title: post.title,
      link: `/blog/${post.slug}`,
      pubDate: post.date,
      description: post.description,
      content: post.content,
      thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
      categories: post.tags,
    }));
    return NextResponse.json({ success: true, posts: formattedPosts });
  } catch (error: any) {
    console.error("Local blog API route error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to fetch articles" },
      { status: 500 }
    );
  }
}
