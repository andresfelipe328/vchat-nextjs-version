"use client";

import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";

type Props = {
  Tag: any;
  style: string;
  id: string;
  children: React.ReactNode;
};

const BasicAnimationLayout = ({ Tag, style, id, children }: Props) => {
  // Animation =======================================================================================================
  const rootRef = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        rootRef.current!.childNodes,
        { x: -10, opacity: 0 },
        {
          duration: 1,
          x: 0,
          opacity: 1,
          stagger: 0.2,
          delay: 0.4,
          ease: "elastic.out(1, 0.75)",
        }
      );

      return () => ctx.revert();
    }, rootRef);
  }, []);
  // =================================================================================================================

  return (
    <Tag className={style} ref={rootRef} id={id}>
      {children}
    </Tag>
  );
};

export default BasicAnimationLayout;
