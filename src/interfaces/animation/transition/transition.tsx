"use client"
import { motion } from "framer-motion";

export const Transition = () => {
    const transitionVariant = {
        initial : {
            x:"100%",
            width:"100%"
        },
        animate:{
            x: "0%",
            width: "0%",
        },
        exit: {
            x: ["0%", "100%"],
            width: ["0%", "100%"],
        }
    }
    const transitionProps = (delay: number) => ({
        role: "status" as "status",
        className: "fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#2e2257]",
        variants: transitionVariant,
        initial: "initial",
        animate: "animate",
        exit: "exit",
        transition: { delay, duration: 0.6, ease: "easeInOut" },
        "aria-hidden": true as true,
    });

    return (
        <>
            <motion.div
            {...transitionProps(0.1)}
            className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-gradient-to-r from-[#00ff00] via-[#00e676] to-[#00c853] opacity-40"
            />
            <motion.div
            {...transitionProps(0.4)}
            className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-gradient-to-b from-[#00ff0000] to-[#00ff0052] bg-[#00c8533d] shadow-[inset_0_0_12px_#00ff003d]"
            />
            <motion.div
            {...transitionProps(0.6)}
            className="fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-gradient-to-b from-[#00ff0000] to-[#00ff006b] bg-[#00c8533d] shadow-[inset_0_0_12px_#00ff0070]"
            />
        </>

    );
}