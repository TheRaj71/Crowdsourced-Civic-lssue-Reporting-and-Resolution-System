import React from "react";
import { TypingAnimation } from "@/components/ui/typing-animation";

export function TypingAnimationDemo() {
  return (
    <div className="p-8">
      <TypingAnimation as="h1" startOnView={true} className="text-4xl font-bold leading-tight">
        Empowering Citizens Through Technology
      </TypingAnimation>
    </div>
  );
}

export default TypingAnimationDemo;
