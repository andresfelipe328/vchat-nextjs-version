"use client";

import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";

const RootAnimationLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="p-2 h-screen flex gap-1" id="main-conent-container">
      {children}
    </main>
  );
};

export default RootAnimationLayout;
