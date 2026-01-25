'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

// REEL CONFIGURATION
const SCENES = [
    {
        id: 1,
        duration: 4000,
        image: '/ad_couple_rooftop.png', // Placeholder (Chaos/Crowd would be better)
        text1: "Tired of the",
        text2: "endless scroll?",
        highlight: "scroll"
    },
    {
        id: 2,
        duration: 4000,
        image: '/ad_abstract_clock.png', // Placeholder (Calm/Classy would be better)
        text1: "Date with intention.",
        text2: "Not algorithms.",
        highlight: "intention"
    },
    {
        id: 3,
        duration: 5000,
        image: '/ad_freezme_app.png',
        text1: "Freezme.",
        text2: "Human Curated.",
        highlight: "Human",
        isEnd: true
    }
];

export default function AdReelPage() {
    const [currentSceneIdx, setCurrentSceneIdx] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [showReplay, setShowReplay] = useState(false);

    useEffect(() => {
        let timer: NodeJS.Timeout;

        if (isPlaying && currentSceneIdx < SCENES.length) {
            if (currentSceneIdx === SCENES.length - 1) {
                // Last scene needs to stay longer or end
                timer = setTimeout(() => {
                    setIsPlaying(false);
                    setShowReplay(true);
                }, SCENES[currentSceneIdx].duration);
            } else {
                timer = setTimeout(() => {
                    setCurrentSceneIdx(prev => prev + 1);
                }, SCENES[currentSceneIdx].duration);
            }
        }

        return () => clearTimeout(timer);
    }, [currentSceneIdx, isPlaying]);

    const handlePlay = () => {
        setCurrentSceneIdx(0);
        setIsPlaying(true);
        setShowReplay(false);
    };

    const scene = SCENES[currentSceneIdx];

    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-4">
            {/* Phone Frame Container */}
            <div className="relative w-[350px] h-[700px] bg-black rounded-[40px] border-[8px] border-gray-800 overflow-hidden shadow-2xl ring-4 ring-gray-900/50">

                {/* Dynamic Content */}
                <div className="relative w-full h-full">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={scene.id}
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8 }}
                            className="absolute inset-0 w-full h-full"
                        >
                            {/* Background Image */}
                            {/* Note: In a real app, we'd use the actual generated paths. 
                   For this demo, we assume the files exist in public/ or artifacts. 
                   I will use the names I generated. */}
                            <img
                                src={scene.image}
                                alt="scene"
                                className="w-full h-full object-cover opacity-60"
                            />

                            {/* Dark Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                        </motion.div>
                    </AnimatePresence>

                    {/* Text Overlay */}
                    <div className="absolute inset-x-0 bottom-32 px-6 space-y-4">
                        <AnimatePresence mode="wait">
                            <motion.div key={`text-${scene.id}`} className="flex flex-col gap-2">
                                <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ delay: 0.3, duration: 0.5 }}
                                    className="text-white text-3xl font-bold font-headline leading-tight tracking-wide"
                                >
                                    {scene.text1}
                                </motion.h2>

                                <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ delay: 0.8, duration: 0.5 }}
                                    className="text-white text-4xl font-bold font-headline leading-tight tracking-wide"
                                >
                                    <span className={scene.text2.includes(scene.highlight) ? "" : "text-white"}>
                                        {scene.text2.split(' ').map((word, i) => (
                                            <span key={i} className={word.includes(scene.highlight) || scene.highlight.includes(word) ? "text-primary italic" : ""}>
                                                {word}
                                            </span>
                                        ))}
                                    </span>
                                </motion.h2>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Brand Logo Watermark Top Center */}
                    <div className="absolute top-12 w-full flex justify-center">
                        <h3 className="text-white/80 font-headline font-bold text-sm tracking-[0.3em] uppercase">Freezme</h3>
                    </div>

                    {/* CTA Button (Only on Last Scene) */}
                    {scene.isEnd && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.5, type: "spring" }}
                            className="absolute bottom-12 w-full px-6"
                        >
                            <div className="w-full py-4 bg-primary text-white font-bold text-center rounded-xl uppercase tracking-widest shadow-lg shadow-primary/20">
                                Book Consultation
                            </div>
                        </motion.div>
                    )}
                </div>

                {/* Play/Replay Interface */}
                {!isPlaying && (
                    <div className="absolute inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center">
                        <button
                            onClick={handlePlay}
                            className="group flex flex-col items-center gap-4"
                        >
                            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                                <svg className="w-8 h-8 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
                            <span className="text-white font-bold tracking-widest uppercase text-sm">
                                {showReplay ? "Replay Reel" : "Preview Ad Reel"}
                            </span>
                        </button>
                    </div>
                )}

            </div>

            <div className="fixed bottom-8 text-white/30 text-xs font-mono">
                Screen record this to create your ad video.
            </div>
        </div>
    );
}
