import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const FadeDownOnScroll = ({ children, delay = 0 }) => {
    const controls = useAnimation();
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.15,
    });

    useEffect(() => {
        if (inView) {
            controls.start({
                opacity: 1,
                y: 0,
                transition: {
                    opacity: {
                        duration: 2,
                        ease: "easeOut",
                        delay: delay,
                    },
                    y: {
                        duration: 1.5,
                        ease: "easeOut",
                        delay: delay,
                    },
                },
            });
        }
    }, [inView, controls, delay]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: -90 }}   // <-- start from TOP
            animate={controls}
        >
            {children}
        </motion.div>
    );
};

export default FadeDownOnScroll;
