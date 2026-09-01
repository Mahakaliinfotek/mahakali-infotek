// components/animation/ScrollStackCards.jsx

import { useRef } from "react";
import Box from "@mui/material/Box";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
} from "framer-motion";

const MotionBox = motion.create(Box);

// For older Framer Motion versions:
// const MotionBox = motion(Box);

export default function ScrollStackCards({
    items = [],
    renderItem,
    stickyTop = { xs: 70, sm: 80 },
    cardTopOffset = { xs: 0, sm: 0 },
    scaleStep = 0.025,
    cardViewportHeight = { xs: "75vh", sm: "70vh" },
}) {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    if (!items.length || typeof renderItem !== "function") {
        return null;
    }

    return (
        <Box
            ref={containerRef}
            sx={{

                position: "relative",
                width: "100%",
            }}
        >
            {items.map((item, index) => {
                const targetScale = Math.max(
                    0.85,
                    1 - (items.length - index - 1) * scaleStep
                );

                return (
                    <StackCard

                        key={`${item.id || item.type || "card"}-${index}`}
                        index={index}
                        item={item}
                        progress={scrollYProgress}
                        range={[index / items.length, 1]}
                        targetScale={targetScale}
                        stickyTop={stickyTop}
                        cardTopOffset={cardTopOffset}
                        cardViewportHeight={cardViewportHeight}
                        renderItem={renderItem}
                    />
                );
            })}
        </Box>
    );
}

function StackCard({
    item,
    index,
    progress,
    range,
    targetScale,
    stickyTop,
    cardTopOffset,
    cardViewportHeight,
    renderItem,
}) {
    const scale = useTransform(progress, range, [1, targetScale]);

    const smoothScale = useSpring(scale, {
        stiffness: 120,
        damping: 30,
    });

    return (
        <Box
            sx={{
         
                height: cardViewportHeight,
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center",
                position: "sticky",
                top: stickyTop,

                // Remove paint containment because it clips the icon
                contain: "layout",

                overflow: "visible",
                mb: 0,
            }}
        >
            <MotionBox
                style={{
                    scale: smoothScale,
                    transformOrigin: "top center",
                    willChange: "transform",
                }}
                sx={{
                    position: "relative",
                    top: {
                        xs: `${index * (cardTopOffset.xs || 0)}px`,
                        sm: `${index * (cardTopOffset.sm || 0)}px`,
                    },
                    width: "100%",
                    zIndex: index + 1,
                }}
            >
                {renderItem(item, index)}
            </MotionBox>
        </Box>
    );
}