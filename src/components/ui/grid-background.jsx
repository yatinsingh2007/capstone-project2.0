import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const GridBackground = ({ children, className }) => {
    return (
        <div className={cn("relative w-full h-full overflow-hidden", className)}>
            {/* Grid pattern */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-grid-white/[0.02] dark:bg-grid-white/[0.02]"
                    style={{
                        backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                                 linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
                        backgroundSize: '50px 50px'
                    }}
                />
                {/* Radial gradient for the fade effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900/80 dark:to-gray-900/80" />
            </div>

            {/* Content */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};

export const AnimatedGridPattern = ({ className }) => {
    const squares = [];
    const cols = 40;
    const rows = 20;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (Math.random() > 0.95) {
                squares.push({
                    id: `${i}-${j}`,
                    x: j,
                    y: i,
                });
            }
        }
    }

    return (
        <div className={cn("absolute inset-0 overflow-hidden", className)}>
            <svg className="absolute inset-0 h-full w-full">
                <defs>
                    <pattern
                        id="grid-pattern"
                        width="50"
                        height="50"
                        patternUnits="userSpaceOnUse"
                    >
                        <path
                            d="M 50 0 L 0 0 0 50"
                            fill="none"
                            stroke="rgba(255, 255, 255, 0.05)"
                            strokeWidth="1"
                        />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid-pattern)" />
            </svg>

            {squares.map((square) => (
                <motion.div
                    key={square.id}
                    className="absolute w-[50px] h-[50px] bg-gradient-to-br from-emerald-500/20 to-sky-500/20 dark:from-emerald-500/10 dark:to-sky-500/10"
                    style={{
                        left: `${square.x * 50}px`,
                        top: `${square.y * 50}px`,
                    }}
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: [0, 1, 0],
                    }}
                    transition={{
                        duration: Math.random() * 3 + 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                    }}
                />
            ))}
        </div>
    );
};
