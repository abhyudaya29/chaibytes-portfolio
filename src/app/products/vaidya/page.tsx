"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Calendar,
  DollarSign,
  MessageSquare,
  Globe,
  UploadCloud,
  TrendingUp,
  FileText,
  Clock,
  ArrowRight,
  ShieldCheck,
  ChevronDown,
  Sparkles,
  ArrowLeft,
  Volume2,
  CheckCircle2
} from "lucide-react";
import Link from "next/link";
import NoiseBg from "@/components/shared/NoiseBg";
import CustomCursor from "@/components/shared/CustomCursor";
import SectionLabel from "@/components/shared/SectionLabel";

// FAQ Dataset
const FAQS = [
  {
    q: "Do I need to change my phone number?",
    a: "No. You keep your existing business phone number. Vira integrates directly with it, routing calls seamlessly through our Exotel telephony pipeline without requiring any hardware modifications."
  },
  {
    q: "What if a caller speaks Hindi and I'm an English-only business?",
    a: "You configure Vira's language rules. Vira can be instructed to politely request English, or fully switch to Hindi or regional dialects dynamically. If your settings dictate a strict language, Vira handles it smoothly."
  },
  {
    q: "Does it work with Indian phone numbers?",
    a: "Yes. Vira is specifically built from the ground up to support Indian mobile and virtual numbers via direct telecom carrier integrations like Exotel."
  },
  {
    q: "Can I upload my own documents for Vira to learn from?",
    a: "Absolutely. You can upload PDFs, Word docs, CSVs, or enter your website URL in the dashboard. Vira searches this database in real time during a call to answer client queries accurately."
  },
  {
    q: "What if a caller has a complex question Vira can't answer?",
    a: "If a caller asks something outside Vira's knowledge base, she can intelligently transfer the call to your human team members or collect call-back details for follow-ups."
  },
  {
    q: "Is there a chat version for my website?",
    a: "Yes. A web chat widget is included with every subscription. It utilizes the exact same AI brain and document knowledge base, providing unified responses to website visitors."
  }
];

// Features Dataset
const FEATURES = [
  {
    icon: Phone,
    title: "Answers Every Call",
    desc: "Instantly greets callers, handles concurrent calls, and eliminates rings going to voicemail. Available 24/7."
  },
  {
    icon: Calendar,
    title: "Books Appointments",
    desc: "Seamlessly checks slots on your calendar (Google Calendar, Outlook, Cal.com), books, and confirms appointments live."
  },
  {
    icon: Globe,
    title: "10+ Indian Languages",
    desc: "Speaks Hindi, Telugu, Marathi, Tamil, Kannada, Hinglish, and more. Dynamically detects and follows code-switching."
  },
  {
    icon: DollarSign,
    title: "Collects Payments",
    desc: "Triggers secure payment links via SMS/WhatsApp during calls for deposits, consultation fees, or catalog purchases."
  },
  {
    icon: MessageSquare,
    title: "Intelligent Transfers",
    desc: "Evaluates intent and smoothly transfers callers to specific departments or human teammates without long holds."
  },
  {
    icon: FileText,
    title: "PDF Knowledge Search",
    desc: "Instantly queries uploaded price lists, FAQs, PDFs, and website documentation in real time to answer caller queries."
  },
  {
    icon: Volume2,
    title: "Makes Outbound Calls",
    desc: "Triggers automated, natural-sounding follow-ups, appointment reminders, and qualification questionnaires."
  },
  {
    icon: Clock,
    title: "Transcripts & Recording",
    desc: "Record, transcribe, and index every call. Search transcript logs directly to see exactly what customers wanted."
  },
  {
    icon: TrendingUp,
    title: "Sentiment Analysis",
    desc: "Automatically tracks customer frustration levels, detects common product requests, and flags escalations."
  }
];

// Use Cases Dataset
const USE_CASES = [
  { vertical: "Clinics & Hospitals", action: "Books patient appointments, answers queries about doctors & timings" },
  { vertical: "Restaurants & Dhabas", action: "Takes reservations, answers menu and timing questions" },
  { vertical: "Real Estate", action: "Qualifies leads, books site visits, answers property queries" },
  { vertical: "Salons & Spas", action: "Books appointments, handles rescheduling" },
  { vertical: "Coaching & Tuition", action: "Answers admission queries, books demo sessions" },
  { vertical: "Diagnostic Labs", action: "Books test appointments, answers test & report queries" }
];

export default function VaidyaProduct() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="relative min-h-screen bg-bg-base text-text-primary selection:bg-accent-primary selection:text-text-primary overflow-x-hidden font-body">
      
      {/* Background Noise and Cursor */}
      <NoiseBg />
      <CustomCursor />

      {/* Floating Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border-custom/20 bg-bg-base/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="flex items-center gap-1.5 text-xs font-mono tracking-widest text-text-secondary hover:text-accent-primary transition-colors group uppercase"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back</span>
            </Link>
            <span className="text-border-custom/50">|</span>
            <div className="flex items-center gap-2">
              <span className="font-heading font-black text-sm tracking-tight text-text-primary uppercase">
                Vaidya
              </span>
              <span className="px-1.5 py-0.5 rounded text-[8px] font-mono bg-accent-primary/10 border border-accent-primary/30 text-accent-primary uppercase tracking-widest">
                AI Voice OS
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-[11px] font-mono uppercase tracking-widest text-text-secondary/70">
            <a href="#problem" className="hover:text-accent-primary transition-colors">The Problem</a>
            <a href="#features" className="hover:text-accent-primary transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-accent-primary transition-colors">How It Works</a>
            <a href="#faq" className="hover:text-accent-primary transition-colors">FAQ</a>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://vaidya.chaibytes.in"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-xl text-xs font-mono tracking-wider font-semibold border border-border-custom text-text-primary hover:border-accent-primary/30 transition-all select-none"
            >
              LIVE DEMO
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 pb-24 md:pt-32 md:pb-36 overflow-hidden">
        {/* Glow Spheres */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-accent-primary/5 blur-[160px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center flex flex-col items-center gap-8">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 px-3 py-1 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-accent-primary font-mono text-[10px] tracking-widest uppercase"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>EXOTEL-POWERED Multilingual Voice Agent</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-bold font-heading tracking-tight uppercase leading-none text-text-primary"
          >
            Your Business Never <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary via-accent-hover to-accent-primary">
              Misses a Call
            </span> Again.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-text-secondary leading-relaxed max-w-2xl font-body"
          >
            Meet Vira — an AI receptionist that answers every call, books appointments, handles over-the-phone payments, and transfers queries. Speaks fluent Hindi, Telugu, Marathi, and all major Indian languages.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center mt-4"
          >
            <a
              href="mailto:abhyudaya.dubey@gmail.com?subject=Vaidya%20Free%20Trial"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-accent-primary text-text-primary hover:bg-accent-hover font-mono text-xs uppercase font-bold tracking-widest shadow-lg shadow-accent-primary/20 transition-all text-center"
            >
              Start Free Trial
            </a>
            <a
              href="https://vaidya.chaibytes.in"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl border border-border-custom hover:border-accent-primary/30 font-mono text-xs uppercase font-bold tracking-widest text-text-primary transition-all text-center"
            >
              See How It Works
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center items-center gap-6 mt-8 text-[11px] font-mono text-text-secondary/50 uppercase tracking-widest"
          >
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-accent-primary" /> Keep Existing Number</span>
            <span className="w-1.5 h-1.5 rounded-full bg-border-custom/40" />
            <span>No Hardware Required</span>
            <span className="w-1.5 h-1.5 rounded-full bg-border-custom/40" />
            <span>Setup in under 10 mins</span>
          </motion.div>

        </div>
      </section>

      {/* Problem & Solution Comparison Bento */}
      <section id="problem" className="py-24 border-t border-border-custom/20 bg-bg-elevated/20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            
            {/* The Problem Card */}
            <div className="p-8 sm:p-10 rounded-[32px] bg-bg-base/80 border border-border-custom/30 flex flex-col justify-between space-y-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-[200px] h-[200px] rounded-full bg-red-500/5 blur-[80px]" />
              
              <div className="space-y-4">
                <span className="font-mono text-[10px] tracking-widest text-red-500 uppercase font-semibold">The Friction</span>
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-text-primary uppercase tracking-tight">
                  Missed Calls are Costing You Real Revenue
                </h2>
                <p className="text-xs sm:text-sm text-text-secondary/80 leading-relaxed font-body">
                  Every ring that goes unanswered is a customer walking away. Teams are overwhelmed, lines are occupied, and enquiries after 6 PM go completely unaddressed.
                </p>
              </div>

              <div className="space-y-4 font-mono text-[11px] text-text-secondary/70 border-t border-border-custom/10 pt-6">
                <div className="flex items-start gap-3">
                  <span className="text-red-500">✕</span>
                  <span>Average receptionist misses 30% of incoming volume</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-500">✕</span>
                  <span>Long hold times lead to booking abandonments</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-500">✕</span>
                  <span>Support halts completely outside working hours</span>
                </div>
              </div>
            </div>

            {/* The Solution Card */}
            <div className="p-8 sm:p-10 rounded-[32px] bg-bg-card/25 border border-border-custom/40 hover:border-accent-primary/20 transition-all flex flex-col justify-between space-y-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-[200px] h-[200px] rounded-full bg-accent-primary/5 blur-[80px]" />

              <div className="space-y-4">
                <span className="font-mono text-[10px] tracking-widest text-accent-primary uppercase font-semibold">The Resolution</span>
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-text-primary uppercase tracking-tight">
                  Vira Answers, Books, and Resolves 24/7
                </h2>
                <p className="text-xs sm:text-sm text-text-secondary/80 leading-relaxed font-body">
                  Vira serves as your digital front desk agent. It handles calls instantly in the customer's native language, books calendar appointments, takes secure payments, and logs transcript insights.
                </p>
              </div>

              <div className="space-y-4 font-mono text-[11px] text-accent-hover border-t border-border-custom/10 pt-6">
                <div className="flex items-start gap-3">
                  <span className="text-accent-primary">✓</span>
                  <span>0 missed calls: handles concurrent calls simultaneously</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent-primary">✓</span>
                  <span>Auto-confirms bookings inside your active calendars</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent-primary">✓</span>
                  <span>Native multi-dialect speech support (Hinglish/regional)</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 border-t border-border-custom/20 relative">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="flex flex-col items-center text-center gap-4 mb-16 max-w-2xl mx-auto">
            <SectionLabel label="Operations" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading tracking-tight text-text-primary uppercase">
              Up and Running in 3 Steps
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Step 1 */}
            <div className="p-6 rounded-[24px] bg-bg-card/20 border border-border-custom/20 flex flex-col space-y-4">
              <span className="font-mono text-2xl font-black text-accent-primary">01</span>
              <h3 className="text-lg font-heading font-bold uppercase text-text-primary">Connect Your Number</h3>
              <p className="text-xs text-text-secondary/80 leading-relaxed font-body">
                Configure your existing landline, virtual, or mobile number in our system. Runs smoothly on Indian telephone channels via Exotel virtual connections. No extra hardware.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-6 rounded-[24px] bg-bg-card/20 border border-border-custom/20 flex flex-col space-y-4">
              <span className="font-mono text-2xl font-black text-accent-primary">02</span>
              <h3 className="text-lg font-heading font-bold uppercase text-text-primary">Train Vira</h3>
              <p className="text-xs text-text-secondary/80 leading-relaxed font-body">
                Upload your service brochure, schedule calendars, FAQs, or catalog pricing PDF document. Vira parses it dynamically to answer questions accurately like a well-trained agent.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-6 rounded-[24px] bg-bg-card/20 border border-border-custom/20 flex flex-col space-y-4">
              <span className="font-mono text-2xl font-black text-accent-primary">03</span>
              <h3 className="text-lg font-heading font-bold uppercase text-text-primary">Go Live</h3>
              <p className="text-xs text-text-secondary/80 leading-relaxed font-body">
                Vira handles incoming calls instantly. She replies to customer inquiries, registers calendar slots, collects deposits, and routes complex calls to your core team.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Features Bento Grid */}
      <section id="features" className="py-24 border-t border-border-custom/20 bg-bg-elevated/10">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="flex flex-col items-start gap-4 mb-16 max-w-2xl">
            <SectionLabel label="Capabilities" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading tracking-tight text-text-primary uppercase">
              Full Reception Automation
            </h2>
            <p className="text-sm text-text-secondary max-w-lg">
              Everything your human front desk team does — now fully automated, highly concurrent, and available 24/7.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-[24px] bg-bg-card/30 border border-border-custom/40 hover:border-accent-primary/20 transition-all flex flex-col justify-between min-h-[180px]"
                >
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center text-accent-primary">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-heading font-bold text-text-primary uppercase tracking-tight">
                      {feat.title}
                    </h3>
                  </div>
                  <p className="text-xs text-text-secondary/80 leading-relaxed font-body mt-4">
                    {feat.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Why India & Code Switching */}
      <section className="py-24 border-t border-border-custom/20 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-accent-primary/5 blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <SectionLabel label="Localization" />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading tracking-tight text-text-primary uppercase leading-tight">
                Built For How India Communicates
              </h2>
              <p className="text-sm text-text-secondary leading-relaxed font-body">
                Most global voice bots are designed for English-only systems and fail when callers jump between languages. Vira is built specifically for Indian bilingual workflows:
              </p>
              
              <div className="space-y-4 font-body text-xs text-text-secondary/90">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-accent-primary shrink-0 mt-0.5" />
                  <span><strong>Code-Switching Recognition:</strong> Understands callers jumping between English, Hindi, and regional dialects mid-sentence.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-accent-primary shrink-0 mt-0.5" />
                  <span><strong>Exotel Integration:</strong> Powered by direct connections with Indian carriers, assuring clear audio streams and low latencies.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-accent-primary shrink-0 mt-0.5" />
                  <span><strong>Bilingual intent workflows:</strong> Whether your customer says <i>\"appointment schedule karna tha\"</i> or <i>\"I need to book a slot\"</i>, Vira gets it.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 p-6 sm:p-8 rounded-[32px] bg-bg-card/40 border border-border-custom/40 backdrop-blur-md">
              <div className="flex justify-between items-center text-[10px] font-mono text-text-secondary/40 border-b border-border-custom/20 pb-3 mb-6">
                <span>VIRA LANGUAGE CONTEXT DETECTOR</span>
                <span className="w-2 h-2 rounded-full bg-accent-primary animate-pulse" />
              </div>

              {/* Conversational Mockup */}
              <div className="space-y-4 font-mono text-[11px] leading-relaxed">
                <div className="p-3.5 rounded-xl bg-bg-base/70 border border-border-custom/30 text-text-secondary">
                  <span className="text-accent-primary block uppercase tracking-wider text-[9px] mb-1 font-bold">Caller Input:</span>
                  \"Hi, main kal shaam ko doctor appointment book karna chahata hoon, round 5 PM?\"
                </div>

                <div className="p-3.5 rounded-xl bg-bg-base/70 border border-border-custom/30 text-accent-hover">
                  <span className="text-text-secondary/40 block uppercase tracking-wider text-[9px] mb-1 font-bold">Vira Speech Parser:</span>
                  * Intent: Book Appointment<br />
                  * Day: Tomorrow (June 14)<br />
                  * Time Target: 17:00 IST<br />
                  * Code-Switch: Hinglish (Hindi + English) detected.
                </div>

                <div className="p-3.5 rounded-xl bg-accent-primary/10 border border-accent-primary/30 text-text-primary">
                  <span className="text-accent-primary block uppercase tracking-wider text-[9px] mb-1 font-bold">Vira Live Response (Speech Output):</span>
                  \"Dr. Sharma kal shaam 5 baje available hain. Kya main aapka slot book kar doon?\"
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 border-t border-border-custom/20 bg-bg-elevated/20">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="flex flex-col items-center text-center gap-4 mb-16 max-w-2xl mx-auto">
            <SectionLabel label="Verticals" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading tracking-tight text-text-primary uppercase">
              Built For Every Indian Business
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {USE_CASES.map((uc, index) => (
              <div
                key={index}
                className="p-6 rounded-[24px] bg-bg-base/70 border border-border-custom/30 flex flex-col justify-between min-h-[150px]"
              >
                <h3 className="text-base font-heading font-bold uppercase text-text-primary">
                  {uc.vertical}
                </h3>
                <p className="text-xs text-text-secondary/80 leading-relaxed font-body mt-4">
                  {uc.action}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 border-t border-border-custom/20">
        <div className="max-w-4xl mx-auto px-6">
          
          <div className="flex flex-col items-center text-center gap-4 mb-16">
            <SectionLabel label="Support" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading tracking-tight text-text-primary uppercase">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-border-custom/40 bg-bg-card/20 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full py-5 px-6 flex items-center justify-between text-left font-heading font-bold text-sm sm:text-base uppercase tracking-tight text-text-primary hover:text-accent-primary transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-accent-primary shrink-0 transition-transform duration-300 ${
                      activeFaq === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {activeFaq === idx && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 px-6 text-xs sm:text-sm text-text-secondary/80 leading-relaxed font-body border-t border-border-custom/10 pt-4">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 border-t border-border-custom/20 bg-bg-elevated/35 relative overflow-hidden text-center">
        {/* Glow Spheres */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-accent-primary/5 blur-[120px] pointer-events-none" />

        <div className="max-w-3xl mx-auto px-6 relative z-10 flex flex-col items-center gap-8">
          <h2 className="text-3xl sm:text-5xl font-bold font-heading tracking-tight text-text-primary uppercase leading-tight">
            Your next customer is <br />calling right now.
          </h2>
          <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-body max-w-md">
            Give them an answer. Start your free trial today — setup takes less than 10 minutes and requires no credit card.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center mt-2">
            <a
              href="mailto:abhyudaya.dubey@gmail.com?subject=Vaidya%20Free%20Trial"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-accent-primary text-text-primary hover:bg-accent-hover font-mono text-xs uppercase font-bold tracking-widest transition-all text-center"
            >
              Get Started Free
            </a>
            <a
              href="mailto:abhyudaya.dubey@gmail.com?subject=Book%20Vaidya%20Demo"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl border border-border-custom hover:border-accent-primary/30 font-mono text-xs uppercase font-bold tracking-widest text-text-primary transition-all text-center"
            >
              Book a Demo
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border-custom/20 bg-bg-base/90 text-center font-mono text-[10px] text-text-secondary/35 uppercase tracking-[0.2em] relative z-10 select-none">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span>© 2026 VAIDYA BY CHAIBYTES</span>
          <div className="flex gap-4">
            <Link href="/" className="hover:text-accent-primary transition-colors">BACK TO PORTFOLIO</Link>
          </div>
        </div>
      </footer>

    </div>
  );
}
