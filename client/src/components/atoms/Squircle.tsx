import styled from "@emotion/styled";
import React from "react";

interface SquircleProps {
  width?: string;
  height?: string;
  color?: string;
}

export default function Squircle({ width, height, color }: SquircleProps) {
  return (
    <svg
      width={width || "50"}
      height={height || "50"}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M50 25C50 43.4095 43.4095 50 25 50C6.59051 50 0 43.4095 0 25C0 6.59051 6.59051 0 25 0C43.4095 0 50 6.59051 50 25Z"
        fill={color || "#C4C4C4"}
      />
    </svg>
  );
}
