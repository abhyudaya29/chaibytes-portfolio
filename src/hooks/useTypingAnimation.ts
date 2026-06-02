"use client";
import { useState, useEffect } from "react";

export interface CommandStep {
  text: string;
  isLog?: boolean;
  isSuccess?: boolean;
  delay: number;
}

export function useTypingAnimation(sequence: CommandStep[], isPlaying: boolean = true) {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentTyped, setCurrentTyped] = useState("");
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    if (!isPlaying) return;

    let timeoutId: NodeJS.Timeout;

    if (activeStep >= sequence.length) {
      // Loop sequence
      timeoutId = setTimeout(() => {
        setDisplayedLines([]);
        setCurrentTyped("");
        setActiveStep(0);
      }, 5000); // 5-second hold before starting again
      return () => clearTimeout(timeoutId);
    }

    const currentItem = sequence[activeStep];

    if (currentItem.isLog) {
      // Print log lines instantly
      timeoutId = setTimeout(() => {
        setDisplayedLines((prev) => [...prev, currentItem.text]);
        setActiveStep((prev) => prev + 1);
      }, currentItem.delay);
    } else {
      // Type inputs step by step
      let charIndex = 0;
      setCurrentTyped("");

      const typeChar = () => {
        if (charIndex < currentItem.text.length) {
          setCurrentTyped((prev) => prev + currentItem.text[charIndex]);
          charIndex++;
          // Randomized human typing speed
          const randomDelay = Math.random() * 60 + 35; // 35ms - 95ms
          timeoutId = setTimeout(typeChar, randomDelay);
        } else {
          // Finish writing command, push to output lines, and clear active string
          timeoutId = setTimeout(() => {
            setDisplayedLines((prev) => [...prev, `$ ${currentItem.text}`]);
            setCurrentTyped("");
            setActiveStep((prev) => prev + 1);
          }, currentItem.delay);
        }
      };

      // Typist pause before entering next command
      timeoutId = setTimeout(typeChar, 300);
    }

    return () => clearTimeout(timeoutId);
  }, [activeStep, sequence, isPlaying]);

  return {
    displayedLines,
    currentTyped,
    resetAnimation: () => {
      setDisplayedLines([]);
      setCurrentTyped("");
      setActiveStep(0);
    },
  };
}
