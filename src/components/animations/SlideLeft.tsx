import type { ReactNode } from "react";

import { slideLeft } from "../../animations/variants";
import { defaultTransition } from "../../animations/transition";
import { motion } from "framer-motion";


interface Props {
    children: ReactNode;
}

export function SlideLeft({ children }: Props) {
    return (
        <motion.div
            variants={slideLeft}
            initial="hidden"
            animate="visible"
            transition={defaultTransition}
        >
            {children}
        </motion.div>
    );
}