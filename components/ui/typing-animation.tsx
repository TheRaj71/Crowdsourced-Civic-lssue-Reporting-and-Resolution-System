"use client";

import { cn } from "@/lib/utils";
import { motion, MotionProps, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

interface TypingAnimationProps extends MotionProps {
  children: string;
  className?: string;
  duration?: number;
  delay?: number;
  as?: React.ElementType;
  startOnView?: boolean;
  highlightFirstWordClass?: string;
}

export function TypingAnimation({
  children,
  className,
  duration = 40,
  delay = 0,
  as: Component = "div",
  startOnView = false,
  highlightFirstWordClass,
  ...props
}: TypingAnimationProps) {
  const MotionComponent = motion.create(Component, {
    forwardMotionProps: true,
  });

  const [displayedText, setDisplayedText] = useState<string>("");
  const [started, setStarted] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(elementRef as React.RefObject<Element>, {
    amount: 0.3,
    once: true,
  });

  useEffect(() => {
    if (!startOnView) {
      const startTimeout = setTimeout(() => {
        setStarted(true);
      }, delay);
      return () => clearTimeout(startTimeout);
    }

    if (!isInView) return;

    const startTimeout = setTimeout(() => {
      setStarted(true);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [delay, startOnView, isInView]);

  useEffect(() => {
    if (!started) return;

    const graphemes = Array.from(children);
    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < graphemes.length) {
        setDisplayedText(graphemes.slice(0, i + 1).join(""));
        i++;
      } else {
        clearInterval(typingEffect);
      }
    }, duration);

    return () => {
      clearInterval(typingEffect);
    };
  }, [children, duration, started]);

  return (
    <MotionComponent
      ref={elementRef}
      className={cn(
        "text-4xl font-bold leading-[5rem] tracking-[-0.02em]",
        className,
      )}
      {...props}
    >
      {highlightFirstWordClass ? (() => {
        const idx = displayedText.indexOf(" ");
        if (idx === -1) {
          return <span className={highlightFirstWordClass}>{displayedText}</span>;
        }
        const first = displayedText.slice(0, idx);
        const rest = displayedText.slice(idx);
        return (
          <>
            <span className={highlightFirstWordClass}>{first}</span>
            {rest}
          </>
        );
      })() : displayedText}
    </MotionComponent>
  );
}
