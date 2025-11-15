import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const FadeOnScroll = ({ children, delay = 0 }) => {
    const controls = useAnimation();
    const { ref, inView } = useInView({
        triggerOnce: true,          // Animate only first time
        threshold: 0.15             // 15% of element visible triggers animation
    });

    useEffect(() => {
        if (inView) {
            controls.start({
                opacity: 1,
                y: 0,
                transition: {
                    opacity: {
                        duration: 2,    // slower fade
                        ease: "easeOut",
                        delay: delay,
                    },
                    y: {
                        duration: 1.5,    // same as before
                        ease: "easeOut",
                        delay: delay,
                    }
                }
            });
        }
    }, [inView, controls, delay]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 90 }}
            animate={controls}
        >
            {children}
        </motion.div>
    );
};

export default FadeOnScroll;
