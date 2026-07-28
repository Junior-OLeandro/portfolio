import type { ReactNode } from "react";

import { defaultTransition } from "../../animations/transition";
import { motion } from "framer-motion";
import { slideRight } from "../../animations/variants";


interface Props {
    children: ReactNode;
}

export function SlideRight({ children }: Props) {
    return (
        <motion.div
            variants={slideRight}
            initial="hidden"
            animate="visible"
            transition={defaultTransition}
        >
            {children}
        </motion.div>
    );
}