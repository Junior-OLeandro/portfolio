import { motion, type Transition } from "framer-motion";
import type { ReactNode } from "react";



import { defaultTransition } from "../../animations/transition";
import { variants, type AnimationVariant } from "../../animations/variants";

interface Props {
    children: ReactNode;
    animation: AnimationVariant;
    delay?: number;
    transition?: Transition;
    className?: string;
}

export function Animated({
    children,
    animation,
    delay = 0,
    transition,
    className,
}: Props) {
    return (
        <motion.div
            className={className}
            variants={variants[animation]}
            initial="hidden"
            whileInView="visible"
            viewport={{
                once: true,
                amount: 0.2,
            }}
            transition={{
                ...defaultTransition,
                ...transition,
                delay,
            }}
        >
            {children}
        </motion.div>
    );
}