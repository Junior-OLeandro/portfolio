import type { ReactNode } from "react";

import { defaultTransition } from "../../animations/transition";
import { motion } from "framer-motion";
import { fadeUp } from "../../animations/variants";



interface Props {
    children: ReactNode;
}

export function FadeUp({ children }: Props) {
    return (
        <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={defaultTransition}
        >
            {children}
        </motion.div>
    );
}