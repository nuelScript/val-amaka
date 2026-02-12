"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const journey = [
  {
    step: 1,
    heading: "Do you remember...",
    message: "The first time our eyes met? The wave? The conversation? ",
  },
  {
    step: 2,
    heading: "Every day since then...",
    message:
      "Has been a gift. Every laugh we've shared, every quiet moment, every conversation—they've all felt right! You have this incredible way of making me feel like I matter, like I'm enough, like I'm home.",
  },
  {
    step: 3,
    heading: "I've fallen for you because...",
    message:
      "Of the way you light up when you talk about things you love. The way you voice out your opinions so boldly. The strength in your character and the tenderness in your heart. You're not just beautiful—you're beautiful in every way that matters.",
  },
  {
    step: 4,
    heading: "When I think about tomorrow...",
    message:
      "I don't think about yesterday anymore. I think about forever with you. I think about building dreams together, facing storms together, celebrating victories together. You've become my reason to believe in the future.",
  },
  {
    step: 5,
    heading: "This is what I know for certain...",
    message:
      "Life is beautifully unpredictable, but my love for you is not. It's the most certain thing I've ever felt. ",
  },
  {
    step: 6,
    heading: "So I need to ask you something...",
    message:
      "Something that means everything. Something that will shape the story of our lives. Something I've been waiting for the right moment to ask. Are you ready?",
  },
];

const preloaderTexts = [
  "Hii Amaka...",
  "I've been thinking about this for a while...",
  "And before I ask you...",
  "I wanted to share a story...",
];

const celebrations = ["💕", "💗", "💖", "💝", "✨", "🌹", "💑", "🎉", "💫"];

export default function Promposal() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPreloading, setIsPreloading] = useState(true);
  const [preloaderStep, setPreloaderStep] = useState(0);

  useEffect(() => {
    if (!isPreloading) return;

    if (preloaderStep >= preloaderTexts.length) {
      const timer = setTimeout(() => setIsPreloading(false), 2000);
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setPreloaderStep((prev) => prev + 1);
    }, 3500);

    return () => clearTimeout(timer);
  }, [isPreloading, preloaderStep]);
  const [showFinalQuestion, setShowFinalQuestion] = useState(false);
  const [noClickCount, setNoClickCount] = useState(0);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [celebrationHearts, setCelebrationHearts] = useState<
    Array<{ id: number; left: number; delay: number }>
  >([]);

  const handleContinue = () => {
    if (currentStep < journey.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowFinalQuestion(true);
    }
  };

  const handleYes = () => {
    setHasAnswered(true);
    const hearts = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 0.6,
    }));
    setCelebrationHearts(hearts);
  };

  const handleNo = () => {
    setNoClickCount(noClickCount + 1);
  };

  const getNoButtonScale = () => {
    const scales = [100, 80, 60, 45, 30, 20, 10, 5];
    return Math.max(scales[noClickCount] || 5, 5);
  };

  const isNoButtonDisabled = getNoButtonScale() <= 10;

  if (isPreloading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-6">
        <div className="max-w-xl w-full text-center space-y-8">
          <AnimatePresence mode="wait">
            {preloaderStep < preloaderTexts.length && (
              <motion.p
                key={preloaderStep}
                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="text-2xl md:text-4xl font-syne font-medium text-primary"
              >
                {preloaderTexts[preloaderStep]}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    );
  }

  if (hasAnswered) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-6 relative overflow-hidden py-12">
        {/* Animated celebration hearts */}
        {celebrationHearts.map((heart) => (
          <div
            key={heart.id}
            className="absolute text-5xl md:text-6xl"
            style={{
              left: `${heart.left}%`,
              top: "50%",
              animation: `float 4s ease-out ${heart.delay}s forwards`,
              opacity: 0.8,
            }}
          >
            {celebrations[Math.floor(Math.random() * celebrations.length)]}
          </div>
        ))}

        <div className="text-center relative z-10 space-y-8">
          <div className="animate-bounce">
            <div className="text-8xl">💕</div>
          </div>
          <div>
            <h1 className="text-5xl md:text-7xl font-syne font-bold text-primary mb-6">
              You said yes
            </h1>
            <p className="text-xl md:text-2xl font-inter font-light text-foreground/80 mb-4">
              You've made me the happiest person alive
            </p>
            <p className="text-lg md:text-xl font-inter text-foreground/60">
              I can't wait to celebrate this moment with you, today and always
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (showFinalQuestion) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-6 py-12">
        <div className="max-w-2xl w-full text-center space-y-12">
          <div>
            <h1 className="text-5xl md:text-7xl font-syne font-bold text-primary mb-8">
              Will you be my val?
            </h1>
            <p className="text-lg md:text-xl font-inter font-light text-foreground/75 leading-relaxed">
              I want to spend every Valentine's Day with you. I want to wake up
              next to you and face life together. You are my greatest love, my
              deepest wish, my forever answer.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <button
              onClick={handleYes}
              className="px-12 py-5 bg-primary text-primary-foreground rounded-full font-syne font-bold text-xl md:text-2xl hover:shadow-xl hover:scale-110 transition-all duration-300"
            >
              Yes 💕
            </button>

            <button
              onClick={handleNo}
              disabled={isNoButtonDisabled}
              style={{
                transform: `scale(${getNoButtonScale() / 100})`,
                opacity: isNoButtonDisabled ? 0.2 : 0.8,
                pointerEvents: isNoButtonDisabled ? "none" : "auto",
              }}
              className="px-12 py-5 bg-foreground/10 text-foreground rounded-full font-syne font-bold text-lg transition-all duration-300"
            >
              No
            </button>
          </div>

          {noClickCount > 0 && noClickCount < 5 && (
            <p className="text-foreground/60 font-inter italic text-lg">
              I think your heart knows the answer... 💕
            </p>
          )}
        </div>
      </div>
    );
  }

  const currentContent = journey[currentStep];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-background flex items-center justify-center px-6 py-12"
    >
      <div className="max-w-3xl w-full">
        {/* Progress indicator */}
        <div className="mb-16">
          <div className="flex gap-2 justify-center">
            {journey.map((_, idx) => (
              <div
                key={idx}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  idx < currentStep
                    ? "bg-primary/60 w-6"
                    : idx === currentStep
                      ? "bg-primary w-10"
                      : "bg-border/40 w-2"
                }`}
              />
            ))}
          </div>
          <p className="text-center text-foreground/50 font-inter text-xs uppercase tracking-wider mt-6">
            Step {currentContent.step} of {journey.length}
          </p>
        </div>

        {/* Content */}
        <div className="space-y-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              className="text-center space-y-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-syne font-bold text-primary leading-tight">
                {currentContent.heading}
              </h2>

              <p className="text-lg md:text-xl font-inter font-light text-foreground/80 leading-relaxed max-w-2xl mx-auto">
                {currentContent.message}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Continue button */}
          <div className="flex justify-center pt-8">
            <button
              onClick={handleContinue}
              className="px-10 py-4 bg-primary text-primary-foreground rounded-full font-syne font-bold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              {currentStep === journey.length - 1
                ? "The Big Question"
                : "Continue"}
            </button>
          </div>

          {/* Decorative element */}
          <div className="flex justify-center gap-3 text-3xl opacity-40 pt-4">
            ✨ 💕 ✨
          </div>
        </div>
      </div>
    </motion.div>
  );
}
