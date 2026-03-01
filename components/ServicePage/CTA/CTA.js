"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowRight, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const CTA = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Animation variants for reveal effect
    const revealVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (delay) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                delay: delay || 0,
                ease: [0.21, 0.47, 0.32, 0.98]
            }
        })
    };

    if (!mounted) return null;

    return (
        <section className="py-16 md:py-32 bg-[#975554] relative overflow-hidden">
            {/* Background Decoration - Logo Watermark */}
            <div className="hidden md:block absolute top-1/2 left-0 md:left-10 -translate-y-1/2 w-[60vw] h-[60vw] md:w-[30vw] md:h-[30vw] opacity-10 pointer-events-none select-none">
                <div className="relative w-full h-full">
                    <Image
                        src="/assets/images/site-logo/logo.svg"
                        alt="Background Logo"
                        fill
                        className="object-contain brightness-0"
                    />
                </div>
            </div>

            {/* Background Decoration - "GROW" Watermark */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none select-none">
                <span className="absolute -bottom-4 -right-8 md:-bottom-8 md:-right-20 text-[25vw] md:text-[15vw] font-serif font-bold text-black leading-none">
                    GROW
                </span>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center text-white">
                    <motion.span
                        custom={0}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={revealVariants}
                        className="text-white/60 font-bold tracking-widest uppercase text-xs mb-6 block"
                    >
                        Ready to Get Started?
                    </motion.span>

                    <motion.h4
                        custom={0.1}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={revealVariants}
                        className="font-serif mb-8 leading-tight tracking-tight"
                    >
                        Let&apos;s Build a System <br />
                        You Can <span className="italic">Rely On</span>
                    </motion.h4>

                    <motion.p
                        custom={0.2}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={revealVariants}
                        className="text-xl text-white/80 leading-relaxed mb-12 max-w-2xl mx-auto"
                    >
                        Digital marketing systems built for consistent growth and scale.
                    </motion.p>

                    <motion.div
                        custom={0.3}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={revealVariants}
                        className="flex justify-center"
                    >
                        <a
                            href="https://calendly.com/itseg/segmeet"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-white text-black hover:bg-black hover:text-white px-10 py-5 rounded-full text-sm font-bold uppercase transition-all duration-300 shadow-2xl border border-transparent"
                        >
                            <Calendar className="w-5 h-5 hidden sm:block" />
                            Schedule a Strategy Call
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
