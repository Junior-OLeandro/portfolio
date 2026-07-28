export const variants = {
    slideLeft: {
        hidden: { x: -120, opacity: 0 },
        visible: { x: 0, opacity: 1 },
    },

    slideRight: {
        hidden: { x: 120, opacity: 0 },
        visible: { x: 0, opacity: 1 },
    },

    fadeUp: {
        hidden: { y: 40, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    },
} as const;

export type AnimationVariant = keyof typeof variants;