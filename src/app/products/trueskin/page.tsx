"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  Activity,
  Scan,
  UserCheck,
  Shield,
  FileSpreadsheet,
  ChevronDown,
  Sparkles,
  ArrowLeft,
  Video,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import Link from "next/link";
import NoiseBg from "@/components/shared/NoiseBg";
import CustomCursor from "@/components/shared/CustomCursor";
import SectionLabel from "@/components/shared/SectionLabel";
import { SparklesText } from "@/components/ui/sparkles-text";
import { Highlighter } from "@/components/ui/highlighter";

// FAQ Dataset
const FAQS = [
  {
    q: "How does it estimate vitals without a wearable device?",
    a: "TrueSkin uses remote Photoplethysmography (rPPG). By analyzing subtle, periodic micro-color changes in facial skin tissue associated with blood flow during the cardiac cycle, our algorithms extract heart rate, heart rate variability (HRV), and respiration rate from a standard webcam video feed."
  },
  {
    q: "Does the platform store or save patient video feeds?",
    a: "No. Patient privacy is a core architectural pillar. All video analysis occurs in real time, and the video frames are immediately discarded. Only the calculated numerical vitals and screening data points are retained and stored securely."
  },
  {
    q: "Can TrueSkin diagnose medical conditions directly?",
    a: "No. TrueSkin is designed as an AI-powered clinical decision-support and pre-screening tool. It helps identify potential physiological anomalies and risk markers (e.g., skin condition detection, sleep apnea risk), but is not a substitute for formal diagnosis by a licensed clinician."
  },
  {
    q: "What camera hardware or lighting quality is required?",
    a: "TrueSkin operates on standard 720p or 1080p webcams found on modern smartphones, laptops, and tablets. It requires normal indoor lighting. Our computer vision pipeline automatically compensates for minor movement and varying lighting conditions."
  },
  {
    q: "How long does a complete assessment take?",
    a: "The entire digital intake assessment—including contactless vitals estimation, facial skin capture, and the OSA risk questionnaire—takes less than five minutes."
  },
  {
    q: "Can it integrate with existing electronic health records (EHR)?",
    a: "Yes. TrueSkin generates structured JSON outputs and standardized clinical summary reports that can be integrated into modern EHR and hospital management systems through our REST API."
  }
];

// Features Dataset
const FEATURES = [
  {
    icon: Heart,
    title: "rPPG Vitals Estimation",
    desc: "Contactless estimation of heart rate, HRV, respiratory rate, and blood pressure from a 60-second face scan."
  },
  {
    icon: Scan,
    title: "Skin Condition Classifier",
    desc: "Computer vision classifiers screen for dermatological anomalies and document structural skin patterns over time."
  },
  {
    icon: Activity,
    title: "Sleep Apnea Risk Flagging",
    desc: "Combines facial landmark analysis via MediaPipe and a clinically validated questionnaire to assess obstructive sleep apnea (OSA) risk."
  },
  {
    icon: UserCheck,
    title: "Seamless Patient Intake",
    desc: "Enables patients to complete clinical pre-screening at home using their own device, accelerating waiting room queues."
  },
  {
    icon: Shield,
    title: "Strict Data Privacy",
    desc: "Designed with end-to-end encryption and ephemeral video processing. Secured with Supabase PostgreSQL row-level security."
  },
  {
    icon: FileSpreadsheet,
    title: "Clinical Reports",
    desc: "Generates formatted PDF summaries and structured JSON data for immediate physician review and EHR logging."
  }
];

// Use Cases Dataset
const USE_CASES = [
  { vertical: "Telemedicine Platforms", action: "Pre-screen patients prior to virtual consults to provide doctors with instant clinical context." },
  { vertical: "Primary Care Clinics", action: "Streamline patient reception by deploying tablet-based contactless screenings in waiting areas." },
  { vertical: "Sleep Diagnostic Labs", action: "First-line screening of patients for Obstructive Sleep Apnea risk factors before routing to polysomnography." },
  { vertical: "Clinical Trials", action: "Enable decentralised, remote trials to collect patient vitals and physiological markers securely." },
  { vertical: "Wellness & Longevity", action: "Equip health monitoring platforms with non-invasive daily health tracking widgets." },
  { vertical: "Rural Health Camps", action: "Provide basic healthcare screeners on cheap laptops to triage patients in underserved areas." }
];

export default function TrueSkinProduct() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

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
              <SparklesText
                className="font-heading font-black text-sm tracking-tight text-text-primary uppercase"
                sparklesCount={4}
                colors={{ first: "#C8430A", second: "#FFA07A" }}
              >
                TrueSkin
              </SparklesText>
              <span className="px-1.5 py-0.5 rounded text-[8px] font-mono bg-accent-primary/10 border border-accent-primary/30 text-accent-primary uppercase tracking-widest">
                Clinical AI
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
              href="https://trueskin.chaibytes.in/"
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
            <span>AI Clinical Pre-Screening Platform</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-bold font-heading tracking-tight uppercase leading-none text-text-primary"
          >
            Contactless Vitals & <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary via-accent-hover to-accent-primary">
              Pre-Screening
            </span> in 5 Mins.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-text-secondary leading-relaxed max-w-2xl font-body"
          >
            <Highlighter action="highlight" color="rgba(200, 67, 10, 0.25)" strokeWidth={1.5} animationDuration={800} isView={true}>
              Screening without wearables.
            </Highlighter>{" "}
            TrueSkin is a browser-based clinical pre-screening tool that combines computer vision, rPPG, and deep learning to estimate vitals, check for skin conditions, and flag sleep apnea risks using only a camera.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center mt-4"
          >
            <a
              href="mailto:abhyudaya.dubey@gmail.com?subject=TrueSkin%20Integration%20Inquiry"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-accent-primary text-text-primary hover:bg-accent-hover font-mono text-xs uppercase font-bold tracking-widest shadow-lg shadow-accent-primary/20 transition-all text-center"
            >
              Get API Access
            </a>
            <a
              href="https://trueskin.chaibytes.in/"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl border border-border-custom hover:border-accent-primary/30 font-mono text-xs uppercase font-bold tracking-widest text-text-primary transition-all text-center"
            >
              Try Web Screener
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center items-center gap-6 mt-8 text-[11px] font-mono text-text-secondary/50 uppercase tracking-widest"
          >
            <span className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-accent-primary" /> HIPAA Compliant Architecture</span>
            <span className="w-1.5 h-1.5 rounded-full bg-border-custom/40" />
            <span>Zero Wearables Needed</span>
            <span className="w-1.5 h-1.5 rounded-full bg-border-custom/40" />
            <span>Integrates with any EHR/EMR</span>
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
                  Intake Bottlenecks and Unreported Symptoms
                </h2>
                <p className="text-xs sm:text-sm text-text-secondary/80 leading-relaxed font-body">
                  Healthcare providers lose hours to manual baseline measurements, while patients fail to report critical symptoms (like sleep apnea anomalies or early dermatological warning signs) until conditions worsen.
                </p>
              </div>

              <div className="space-y-4 font-mono text-[11px] text-text-secondary/70 border-t border-border-custom/10 pt-6">
                <div className="flex items-start gap-3">
                  <span className="text-red-500">✕</span>
                  <span>Physical check-ins waste 15-20 minutes per patient</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-500">✕</span>
                  <span>Incomplete patient history delays clinical decisions</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-500">✕</span>
                  <span>Requires expensive hardware for basic home monitoring</span>
                </div>
              </div>
            </div>

            {/* The Solution Card */}
            <div className="p-8 sm:p-10 rounded-[32px] bg-bg-card/25 border border-border-custom/40 hover:border-accent-primary/20 transition-all flex flex-col justify-between space-y-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-[200px] h-[200px] rounded-full bg-accent-primary/5 blur-[80px]" />

              <div className="space-y-4">
                <span className="font-mono text-[10px] tracking-widest text-accent-primary uppercase font-semibold">The Resolution</span>
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-text-primary uppercase tracking-tight">
                  TrueSkin Automates Clinical Pre-Screening
                </h2>
                <p className="text-xs sm:text-sm text-text-secondary/80 leading-relaxed font-body">
                  TrueSkin allows patients to complete contactless screening from any browser before speaking to a doctor. It delivers verified vitals telemetry, skin assessments, and sleep risks directly to the provider.
                </p>
              </div>

              <div className="space-y-4 font-mono text-[11px] text-accent-hover border-t border-border-custom/10 pt-6">
                <div className="flex items-start gap-3">
                  <span className="text-accent-primary">✓</span>
                  <span>Contactless vitals captured via standard consumer webcams</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent-primary">✓</span>
                  <span>Clinical decision support flags potential health anomalies</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent-primary">✓</span>
                  <span>EHR-ready reporting streams baseline data dynamically</span>
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
              The Screening Workflow
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Step 1 */}
            <div className="p-6 rounded-[24px] bg-bg-card/20 border border-border-custom/20 flex flex-col space-y-4">
              <span className="font-mono text-2xl font-black text-accent-primary">01</span>
              <h3 className="text-lg font-heading font-bold uppercase text-text-primary">Camera Capture</h3>
              <p className="text-xs text-text-secondary/80 leading-relaxed font-body">
                The user opens TrueSkin on their smartphone or laptop. A 60-second face scan records micro-fluctuations in skin tone while MediaPipe tracks key facial coordinates.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-6 rounded-[24px] bg-bg-card/20 border border-border-custom/20 flex flex-col space-y-4">
              <span className="font-mono text-2xl font-black text-accent-primary">02</span>
              <h3 className="text-lg font-heading font-bold uppercase text-text-primary">Physiological AI Analysis</h3>
              <p className="text-xs text-text-secondary/80 leading-relaxed font-body">
                FastAPI and PyTorch neural nets parse the data. The rPPG pipeline estimates heart rate, HRV, and respiratory metrics, while CV models evaluate skin and structural sleep apnea risk markers.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-6 rounded-[24px] bg-bg-card/20 border border-border-custom/20 flex flex-col space-y-4">
              <span className="font-mono text-2xl font-black text-accent-primary">03</span>
              <h3 className="text-lg font-heading font-bold uppercase text-text-primary">Clinical Intake Ready</h3>
              <p className="text-xs text-text-secondary/80 leading-relaxed font-body">
                A clean pre-screening report is delivered straight to the hospital's patient dashboard or EMR via secure API webhooks, prioritizing patients based on risk levels.
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
              Clinical Grade Computer Vision
            </h2>
            <p className="text-sm text-text-secondary max-w-lg">
              Combining cutting-edge remote photoplethysmography and deep learning classifiers for robust contactless screening.
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

      {/* Physiological Telemetry Panel */}
      <section className="py-24 border-t border-border-custom/20 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-accent-primary/5 blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <SectionLabel label="Bio-Telemetry" />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading tracking-tight text-text-primary uppercase leading-tight">
                Remote Vitals Extraction (rPPG)
              </h2>
              <p className="text-sm text-text-secondary leading-relaxed font-body">
                TrueSkin measures blood volume changes under the facial skin layers. When the heart beats, blood volume increases, changing the absorption of light. A standard camera tracks these color micro-variations.
              </p>

              <div className="space-y-4 font-body text-xs text-text-secondary/90">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-accent-primary shrink-0 mt-0.5" />
                  <span><strong>rPPG Signal Processing:</strong> Bandpass filters isolate the cardiovascular pulse waves from ambient room illumination.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-accent-primary shrink-0 mt-0.5" />
                  <span><strong>MediaPipe Facial Tracking:</strong> Robust ROI (Region of Interest) tracking keeps the scanner focused on forehead and cheek areas despite minor movements.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-accent-primary shrink-0 mt-0.5" />
                  <span><strong>Clinical Validation:</strong> Tested against standard medical finger-pulse oximeters and blood pressure monitors for high correlation accuracy.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 p-6 sm:p-8 rounded-[32px] bg-bg-card/40 border border-border-custom/40 backdrop-blur-md">
              <div className="flex justify-between items-center text-[10px] font-mono text-text-secondary/40 border-b border-border-custom/20 pb-3 mb-6">
                <span>TRUESKIN REAL-TIME VITAL TELEMETRY</span>
                <span className="flex items-center gap-1.5 text-accent-primary font-bold">
                  <Video className="w-3 h-3 animate-pulse" /> LIVE STREAM ACTIVE
                </span>
              </div>

              {/* Conversational / Telemetry Mockup */}
              <div className="space-y-4 font-mono text-[11px] leading-relaxed">
                <div className="p-3.5 rounded-xl bg-bg-base/70 border border-border-custom/30 text-text-secondary">
                  <span className="text-accent-primary block uppercase tracking-wider text-[9px] mb-1 font-bold">Face Detection & Region of Interest:</span>
                  * Forehead ROI: [x: 142, y: 88, w: 45, h: 32]<br />
                  * Cheek ROI L/R: [x: 110, y: 145] | [x: 180, y: 145]<br />
                  * Landmark Status: 468 mesh points tracked successfully
                </div>

                <div className="p-3.5 rounded-xl bg-bg-base/70 border border-border-custom/30 text-accent-hover">
                  <span className="text-text-secondary/40 block uppercase tracking-wider text-[9px] mb-1 font-bold">Pulse Waveform Extraction (rPPG):</span>
                  * Signal Quality Index (SQI): 94.2%<br />
                  * Dominant Frequency: 1.15 Hz<br />
                  * Computed Heart Rate: 69 BPM<br />
                  * Respiratory Rate: 16 breaths/min
                </div>

                <div className="p-3.5 rounded-xl bg-accent-primary/10 border border-accent-primary/30 text-text-primary">
                  <span className="text-accent-primary block uppercase tracking-wider text-[9px] mb-1 font-bold">Pre-Screening Diagnosis Risk Summary:</span>
                  * Skin Anomaly Risk: Low (Normal pigmentation & texture)<br />
                  * Cardiovascular Vitals: Stable (HR 69, HRV 48ms)<br />
                  * OSA Risk (STOP-Bang Score Match): Mild risk flagged.
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
            <SectionLabel label="Deployment" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading tracking-tight text-text-primary uppercase">
              Clinical Integrations
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
            Deploy Contactless <br />Screening Today.
          </h2>
          <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-body max-w-md">
            Integrate TrueSkin into your hospital website, tablet check-ins, or patient intake application via our SDK.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center mt-2">
            <a
              href="mailto:abhyudaya.dubey@gmail.com?subject=TrueSkin%20Integration%20Request"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-accent-primary text-text-primary hover:bg-accent-hover font-mono text-xs uppercase font-bold tracking-widest transition-all text-center"
            >
              Request Developer Access
            </a>
            <a
              href="https://trueskin.chaibytes.in/"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl border border-border-custom hover:border-accent-primary/30 font-mono text-xs uppercase font-bold tracking-widest text-text-primary transition-all text-center"
            >
              Try Web Demo
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border-custom/20 bg-bg-base/90 text-center font-mono text-[10px] text-text-secondary/35 uppercase tracking-[0.2em] relative z-10 select-none">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span>© 2026 TRUESKIN BY CHAIBYTES</span>
          <div className="flex gap-4">
            <Link href="/" className="hover:text-accent-primary transition-colors">BACK TO PORTFOLIO</Link>
          </div>
        </div>
      </footer>

    </div>
  );
}
