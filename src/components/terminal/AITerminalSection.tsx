"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal as TerminalIcon, Play, RefreshCw, ZoomIn, ZoomOut, Maximize2, Quote, CheckCircle2 } from "lucide-react";
import { TERMINAL_SEQUENCES } from "@/lib/constants";
import SectionLabel from "../shared/SectionLabel";
import AmbientOrb from "../shared/AmbientOrb";

// Node database definitions for each tab
const INITIAL_NODES = [
  // Tab 0: Deploy Pipeline
  {
    push: { x: 30, y: 80, label: "Git Push", type: "trigger", icon: "💬", desc: "Commit main" },
    build: { x: 210, y: 80, label: "Vercel Build", type: "agent", icon: "🤖", desc: "Compile app" },
    propagate: { x: 390, y: 80, label: "Propagate", type: "agent", icon: "📡", desc: "22 regions" },
    live: { x: 570, y: 80, label: "Live Deploy", type: "action", icon: "✅", desc: "raytalk.production" },
  },
  // Tab 1: AI Workflow (Matches Dribbble / User Template)
  {
    trigger: { x: 25, y: 80, label: "WhatsApp Message", type: "trigger", icon: "💬", desc: "trigger · on DM" },
    agent: { x: 215, y: 70, label: "Support Agent", type: "agent", icon: "🤖", desc: "reasons + decides" },
    model: { x: 130, y: 175, label: "GPT-4o", type: "sub", icon: "🧠", isSmall: true },
    memory: { x: 225, y: 175, label: "Chat Memory", type: "sub", icon: "🗂", isSmall: true },
    tool: { x: 320, y: 175, label: "RAG Search", type: "sub", icon: "🔍", isSmall: true },
    condition: { x: 410, y: 80, label: "Needs human?", type: "cond", icon: "⑂", desc: "confidence < 0.7" },
    reply: { x: 600, y: 20, label: "Send Reply", type: "action", icon: "✅", desc: "WhatsApp API" },
    escalate: { x: 600, y: 140, label: "Escalate to Human", type: "action", icon: "🧑", desc: "notify agent" },
  },
  // Tab 2: Real-time Events
  {
    gateway: { x: 30, y: 80, label: "WS Gateway", type: "trigger", icon: "📡", desc: "gateway node" },
    router: { x: 210, y: 80, label: "Event Router", type: "agent", icon: "⑂", desc: "message routing" },
    reply: { x: 400, y: 25, label: "Reply Desk", type: "action", icon: "💬", desc: "auto messaging" },
    notify: { x: 400, y: 135, label: "Notify Desk", type: "action", icon: "🧑", desc: "agent console" },
    analytics: { x: 590, y: 80, label: "Analytics Logger", type: "sub", icon: "📈", desc: "stats processing" },
  },
  // Tab 3: System Check
  {
    api: { x: 30, y: 90, label: "API Server", type: "trigger", icon: "⚙️", desc: "health router" },
    db: { x: 210, y: 30, label: "PG Database", type: "sub", icon: "🗄", desc: "data checks" },
    redis: { x: 210, y: 150, label: "Redis Cache", type: "sub", icon: "⚡", desc: "sessions check" },
    gateway: { x: 390, y: 90, label: "WS Gateway", type: "agent", icon: "📡", desc: "sockets SLA" },
    status: { x: 570, y: 90, label: "Healthy Status", type: "action", icon: "✅", desc: "status ok" },
  },
];

// Edges connections list for each tab
const EDGES = [
  // Tab 0
  [
    { from: "push", to: "build" },
    { from: "build", to: "propagate" },
    { from: "propagate", to: "live" },
  ],
  // Tab 1
  [
    { from: "trigger", to: "agent" },
    { from: "agent", to: "condition" },
    { from: "condition", to: "reply", label: "No" },
    { from: "condition", to: "escalate", label: "Yes" },
    { from: "model", to: "agent", isSub: true },
    { from: "memory", to: "agent", isSub: true },
    { from: "tool", to: "agent", isSub: true },
  ],
  // Tab 2
  [
    { from: "gateway", to: "router" },
    { from: "router", to: "reply" },
    { from: "router", to: "notify" },
    { from: "reply", to: "analytics" },
    { from: "notify", to: "analytics" },
  ],
  // Tab 3
  [
    { from: "api", to: "db" },
    { from: "api", to: "redis" },
    { from: "api", to: "gateway" },
    { from: "db", to: "status" },
    { from: "redis", to: "status" },
    { from: "gateway", to: "status" },
  ],
];

// Execution sequence simulation stages for each tab
const EXECUTION_PATHS = [
  ["push", "build", "propagate", "live"],
  ["trigger", "agent", "condition", "reply"],
  ["gateway", "router", "reply", "analytics"],
  ["api", "db", "redis", "gateway", "status"],
];

export default function AITerminalSection() {
  const [activeTabIdx, setActiveTabIdx] = useState(0);
  const activeSequence = TERMINAL_SEQUENCES[activeTabIdx];
  const [nodes, setNodes] = useState<any>(INITIAL_NODES[0]);
  const [zoom, setZoom] = useState(1.0);
  const [execState, setExecState] = useState<{ executing: string | null; done: string[] }>({
    executing: null,
    done: [],
  });

  const canvasRef = useRef<HTMLDivElement>(null);
  const dragInfo = useRef<{ id: string | null; offX: number; offY: number }>({ id: null, offX: 0, offY: 0 });
  const simulationTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Trigger step-by-step visual workflow execution
  const startWorkflowSimulation = () => {
    if (simulationTimeoutRef.current) {
      clearTimeout(simulationTimeoutRef.current);
    }

    const path = EXECUTION_PATHS[activeTabIdx];
    setExecState({ executing: null, done: [] });
    
    let i = 0;
    const executeStep = () => {
      if (i > 0) {
        const prevId = path[i - 1];
        setExecState((prev) => ({
          executing: null,
          done: [...prev.done, prevId],
        }));
      }

      if (i >= path.length) {
        setExecState((prev) => ({
          executing: null,
          done: [...prev.done],
        }));
        return;
      }

      const currentId = path[i];
      setExecState((prev) => ({
        ...prev,
        executing: currentId,
      }));

      i++;
      simulationTimeoutRef.current = setTimeout(executeStep, 800);
    };

    executeStep();
  };

  // Sync nodes list and autoplay simulation when active tab changes
  useEffect(() => {
    setNodes(INITIAL_NODES[activeTabIdx]);
    startWorkflowSimulation();

    return () => {
      if (simulationTimeoutRef.current) {
        clearTimeout(simulationTimeoutRef.current);
      }
    };
  }, [activeTabIdx]);

  // Handle zooming parameters
  const adjustZoom = (val: number) => {
    setZoom((prev) => Math.min(1.4, Math.max(0.6, prev + val)));
  };

  const resetZoom = () => setZoom(1.0);

  // Node Drag listeners
  const onNodeMouseDown = (id: string, e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (!canvasRef.current) return;
    const nodeEl = e.currentTarget;
    const rect = nodeEl.getBoundingClientRect();
    dragInfo.current = {
      id,
      offX: e.clientX - rect.left,
      offY: e.clientY - rect.top,
    };
  };

  const onNodeTouchStart = (id: string, e: React.TouchEvent<HTMLDivElement>) => {
    if (!canvasRef.current || e.touches.length === 0) return;
    const nodeEl = e.currentTarget;
    const rect = nodeEl.getBoundingClientRect();
    const touch = e.touches[0];
    dragInfo.current = {
      id,
      offX: touch.clientX - rect.left,
      offY: touch.clientY - rect.top,
    };
  };

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      const { id, offX, offY } = dragInfo.current;
      if (!id || !canvasRef.current) return;

      const canvasRect = canvasRef.current.getBoundingClientRect();
      const rawX = (e.clientX - canvasRect.left - offX) / zoom;
      const rawY = (e.clientY - canvasRect.top - offY) / zoom;

      // Restrict node coordinates to reasonable canvas bounds
      const x = Math.max(0, Math.min(740, rawX));
      const y = Math.max(0, Math.min(220, rawY));

      setNodes((prev: any) => ({
        ...prev,
        [id]: { ...prev[id], x, y },
      }));
    };

    const handleGlobalTouchMove = (e: TouchEvent) => {
      const { id, offX, offY } = dragInfo.current;
      if (!id || !canvasRef.current || e.touches.length === 0) return;

      const canvasRect = canvasRef.current.getBoundingClientRect();
      const touch = e.touches[0];
      const rawX = (touch.clientX - canvasRect.left - offX) / zoom;
      const rawY = (touch.clientY - canvasRect.top - offY) / zoom;

      const x = Math.max(0, Math.min(740, rawX));
      const y = Math.max(0, Math.min(220, rawY));

      setNodes((prev: any) => ({
        ...prev,
        [id]: { ...prev[id], x, y },
      }));
    };

    const handleGlobalMouseUp = () => {
      dragInfo.current = { id: null, offX: 0, offY: 0 };
    };

    window.addEventListener("mousemove", handleGlobalMouseMove);
    window.addEventListener("mouseup", handleGlobalMouseUp);
    window.addEventListener("touchmove", handleGlobalTouchMove);
    window.addEventListener("touchend", handleGlobalMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleGlobalMouseMove);
      window.removeEventListener("mouseup", handleGlobalMouseUp);
      window.removeEventListener("touchmove", handleGlobalTouchMove);
      window.removeEventListener("touchend", handleGlobalMouseUp);
    };
  }, [zoom]);

  // Port anchors mapping logic
  const portRight = (node: any) => ({ x: node.x + (node.isSmall ? 110 : 160), y: node.y + (node.isSmall ? 20 : 28) });
  const portLeft = (node: any) => ({ x: node.x, y: node.y + (node.isSmall ? 20 : 28) });
  const portBottom = (node: any) => ({ x: node.x + (node.isSmall ? 55 : 80), y: node.y + (node.isSmall ? 40 : 56) });
  const portTop = (node: any) => ({ x: node.x + (node.isSmall ? 55 : 80), y: node.y });
  const resetWorkflow = () => {
    setExecState({ executing: null, done: [] });
  };

  return (
    <section id="skills" className="relative min-h-screen py-24 px-6 sm:px-12 md:px-24 bg-bg-base overflow-hidden">
      <AmbientOrb className="top-1/4 left-1/4 bg-accent-primary/5" duration={18} />

      <div className="relative max-w-4xl mx-auto z-10 flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-4 max-w-xl mx-auto">
          <SectionLabel label="07 / Systems Console" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading tracking-tight text-text-primary uppercase">
            Systems Console
          </h2>
          <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-body">
            Interact with simulated workflows mapping live client deploys, agentic RAG querying pipelines, real-time WebSockets connections, and production api health checks.
          </p>
        </div>

        {/* Tab switchers */}
        <div className="flex flex-wrap gap-2 justify-center select-none">
          {TERMINAL_SEQUENCES.map((seq, idx) => {
            const isActive = idx === activeTabIdx;
            return (
              <button
                key={seq.tab}
                onClick={() => setActiveTabIdx(idx)}
                className={`px-4 py-2 rounded-lg font-mono text-[11px] tracking-wider uppercase border transition-all duration-300 ${
                  isActive
                    ? "bg-accent-primary/10 border-accent-primary text-text-primary shadow-[0_0_15px_var(--color-glow-custom)]"
                    : "bg-bg-card/45 border-border-custom/40 text-text-secondary/60 hover:text-text-primary hover:border-border-custom"
                }`}
              >
                {seq.tab}
              </button>
            );
          })}
        </div>

        {/* Dynamic Canvas Container Card */}
        <div className="w-full rounded-2xl bg-bg-card border border-border-custom/45 shadow-lg flex flex-col p-6 sm:p-7 relative max-w-3xl mx-auto transition-all duration-300">
          
          {/* Header toolbar */}
          <div className="flex items-center justify-between pb-4 border-b border-border-custom/20 select-none mb-6">
            <div className="text-[10px] sm:text-[11px] text-accent-primary font-mono tracking-wider uppercase font-semibold">
              Workflow Canvas // {activeSequence.tab}
            </div>
            
            <div className="flex items-center gap-3">
              <button
                onClick={resetWorkflow}
                className="flex items-center gap-1.5 px-2.5 py-1.2 rounded bg-bg-elevated border border-border-custom/30 text-[10px] font-mono font-bold text-text-secondary hover:text-accent-primary hover:border-accent-primary/30 transition-colors"
                title="Rerun sequence"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>RESET</span>
              </button>

              <button
                onClick={startWorkflowSimulation}
                className="flex items-center gap-1.5 px-3.5 py-1.2 rounded bg-accent-primary border border-accent-hover/30 text-[10px] font-mono font-bold text-white hover:bg-accent-hover transition-colors"
                title="Run step simulation"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>RUN</span>
              </button>
            </div>
          </div>

          {/* Interactive Workspace Canvas Wrap */}
          <div className="relative w-full h-[280px] bg-bg-elevated/20 rounded-2xl border border-border-custom/15 overflow-hidden">
            {/* Grid dot patterns */}
            <div 
              className="absolute inset-0 select-none transition-all duration-300"
              style={{
                backgroundColor: "transparent",
                backgroundImage: "radial-gradient(var(--border-custom) 1.2px, transparent 1.2px)",
                backgroundSize: "20px 20px"
              }}
            />

            {/* Scaled/Zoomable Canvas Element */}
            <div
              ref={canvasRef}
              className="absolute inset-0 transform-origin-top-left transition-transform duration-150"
              style={{ transform: `scale(${zoom})` }}
            >
              {/* Dynamic SVG wires path connectors layer */}
              <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none z-0">
                {EDGES[activeTabIdx].map((edge: any, edgeIdx) => {
                  const nodeA = nodes[edge.from];
                  const nodeB = nodes[edge.to];
                  if (!nodeA || !nodeB) return null;

                  // Compute endpoints dynamically
                  const ptA = edge.isSub ? portTop(nodeA) : portRight(nodeA);
                  const ptB = edge.isSub ? portBottom(nodeB) : portLeft(nodeB);

                  const mx = (ptA.x + ptB.x) / 2;
                  const my = (ptA.y + ptB.y) / 2;

                  // Draw clean cubic Bezier wires
                  const pathString = edge.isSub
                    ? `M ${ptA.x} ${ptA.y} C ${ptA.x} ${my}, ${ptB.x} ${my}, ${ptB.x} ${ptB.y}`
                    : `M ${ptA.x} ${ptA.y} C ${mx} ${ptA.y}, ${mx} ${ptB.y}, ${ptB.x} ${ptB.y}`;

                  const isExecuted = execState.done.includes(edge.from) && (execState.done.includes(edge.to) || execState.executing === edge.to);
                  const isPending = execState.executing === edge.from;

                  return (
                    <g key={edgeIdx}>
                      <path
                        d={pathString}
                        className="fill-none transition-all duration-500"
                        stroke={isExecuted ? "var(--color-accent-primary)" : isPending ? "var(--color-accent-hover)" : "var(--color-border-custom)"}
                        strokeWidth={isExecuted || isPending ? 2.5 : 1.5}
                        strokeDasharray={edge.isSub ? "4 4" : undefined}
                      />
                      {edge.label && (
                        <text
                          x={mx}
                          y={(ptA.y + ptB.y) / 2 - 6}
                          textAnchor="middle"
                          className="font-mono text-[9px] font-bold fill-text-secondary/50"
                        >
                          {edge.label}
                        </text>
                      )}
                    </g>
                  );
                })}
              </svg>

              {/* Draggable Node Cards */}
              {Object.entries(nodes).map(([id, node]: [string, any]) => {
                const isExecuted = execState.done.includes(id);
                const isCurrent = execState.executing === id;

                return (
                  <div
                    key={id}
                    onMouseDown={(e) => onNodeMouseDown(id, e)}
                    onTouchStart={(e) => onNodeTouchStart(id, e)}
                    className={`absolute flex flex-col justify-between border cursor-grab select-none z-10 transition-shadow duration-300 shadow-sm ${
                      node.isSmall
                        ? "w-[110px] h-[40px] px-3 py-1.5 rounded-xl"
                        : "w-[160px] h-[56px] px-4 py-2 rounded-2xl"
                    } ${
                      isExecuted
                        ? "bg-bg-card border-accent-primary shadow-[0_0_15px_var(--color-glow-custom)]"
                        : isCurrent
                        ? "bg-bg-elevated border-accent-hover animate-pulse"
                        : "bg-bg-card border-border-custom/40 hover:border-border-custom"
                    }`}
                    style={{ left: `${node.x}px`, top: `${node.y}px` }}
                  >
                    {/* Tick Checkbox Overlay */}
                    {isExecuted && !node.isSmall && (
                      <div className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-accent-primary text-white flex items-center justify-center text-[9px] font-bold shadow select-none animate-bounce">
                        ✓
                      </div>
                    )}

                    <div className="flex items-center gap-2.5 h-full w-full">
                      {/* Icon container */}
                      <div
                        className={`rounded-lg flex items-center justify-center shrink-0 ${
                          node.isSmall ? "w-6 h-6 text-xs" : "w-8 h-8 text-base"
                        } ${
                          node.type === "trigger"
                            ? "bg-amber-500/10 text-amber-500"
                            : node.type === "agent"
                            ? "bg-accent-primary/10 text-accent-primary"
                            : node.type === "cond"
                            ? "bg-indigo-500/10 text-indigo-400"
                            : node.type === "action"
                            ? "bg-emerald-500/10 text-emerald-500"
                            : "bg-neutral-500/15 text-text-secondary"
                        }`}
                      >
                        {node.icon}
                      </div>

                      {/* Labels and subtext */}
                      <div className="min-w-0 flex-1 leading-tight select-none">
                        <p className={`font-heading font-extrabold truncate text-text-primary ${node.isSmall ? "text-[10px]" : "text-[11.5px]"}`}>
                          {node.label}
                        </p>
                        {!node.isSmall && (
                          <p className="font-mono text-[8px] text-text-secondary/50 truncate mt-0.5">
                            {node.desc}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom floating zoom actions */}
            <div className="absolute bottom-4 right-4 flex items-center gap-1.5 select-none z-20">
              <button
                onClick={() => adjustZoom(0.1)}
                className="w-8 h-8 rounded-lg bg-bg-card hover:bg-bg-elevated border border-border-custom/35 text-text-secondary hover:text-accent-primary transition-colors flex items-center justify-center cursor-pointer shadow"
                title="Zoom In"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <button
                onClick={() => adjustZoom(-0.1)}
                className="w-8 h-8 rounded-lg bg-bg-card hover:bg-bg-elevated border border-border-custom/35 text-text-secondary hover:text-accent-primary transition-colors flex items-center justify-center cursor-pointer shadow"
                title="Zoom Out"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <button
                onClick={resetZoom}
                className="w-8 h-8 rounded-lg bg-bg-card hover:bg-bg-elevated border border-border-custom/35 text-text-secondary hover:text-accent-primary transition-colors flex items-center justify-center cursor-pointer shadow"
                title="Reset Zoom"
              >
                <Maximize2 className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Left hint details */}
            <div className="absolute bottom-4 left-4 font-mono text-[9px] text-text-secondary/40 select-none z-20">
              [ Drag nodes or click RUN to execute ]
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
