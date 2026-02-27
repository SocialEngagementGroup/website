"use client";

import React from "react";

export default function VdoMobile() {
    return (
        <section className="w-full px-[20px] py-[40px] bg-white flex justify-center items-center">
            <div className="w-[95vw] h-[53.4375vw] max-h-[70vh] rounded-[12px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
                <iframe
                    className="w-full h-full object-contain block"
                    src="https://www.youtube-nocookie.com/embed/MoGoOZzYXSc?si=6_22nGb-opjl1z4W&autoplay=1&mute=1&loop=1&playlist=MoGoOZzYXSc&controls=0&modestbranding=1&rel=0"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    style={{
                        width: "100%",
                        height: "100%",
                        border: "none",
                    }}
                />
            </div>
        </section>
    );
}