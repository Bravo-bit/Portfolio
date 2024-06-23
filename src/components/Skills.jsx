import React from 'react';
import { SKILLS } from '../assets/content';
import { FaReact, FaJava, FaPython } from 'react-icons/fa';
import { SiSpring, SiAmazonaws, SiMysql } from 'react-icons/si';
import { motion } from 'framer-motion';

const variants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: 10,
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
});

function Main() {
    const iconMapping = {
        react: <FaReact className="rounded-2xl text-7xl text-blue-500" />,
        java: <FaJava className="rounded-2xl text-7xl text-orange-500" />,
        springboot: <SiSpring className="rounded-2xl text-7xl text-green-500" />,
        python: <FaPython className="rounded-2xl text-7xl text-yellow-500" />,
        aws: <SiAmazonaws className="rounded-2xl text-7xl text-yellow-600" />,
        database: <SiMysql className="rounded-2xl text-7xl text-blue-500" />,
    };

    const durationMapping = {
        react: 2.5,
        java: 5,
        springboot: 2,
        python: 6,
        aws: 4,
        database: 2.5,
    };

    return (
        <>
            <div className="border-b border-neutral-800 pb-4">
                <motion.h1 className='my-20 text-center text-4xl' whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 1.5 }}>Skills</motion.h1>
            </div>
            <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1.5 }} className="flex flex-wrap items-center justify-center gap-4 mt-8">
                {Object.keys(SKILLS).map((key) => (
                    <motion.div
                        key={key}
                        className="rounded-lg border-4 border-neutral-800 p-2 md:p-4"
                        initial="initial"
                        animate="animate"
                        variants={variants(durationMapping[key])}
                    >
                        {iconMapping[key]}
                    </motion.div>
                ))}
            </motion.div>
        </>
    );
}

export default Main;
