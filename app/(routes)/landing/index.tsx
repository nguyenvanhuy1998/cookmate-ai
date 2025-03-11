import React from "react";
import { LandingContent } from "@/components/screens/landing";
import { MarqueeImages } from "@/components/screens/landing";

const Landing = () => {
    const imageList = [
        require("@/assets/images/1.jpg"),
        require("@/assets/images/c1.jpg"),
        require("@/assets/images/2.jpg"),
        require("@/assets/images/c2.jpg"),
        require("@/assets/images/3.jpg"),
        require("@/assets/images/c3.jpg"),
        require("@/assets/images/4.jpg"),
        require("@/assets/images/5.jpg"),
        require("@/assets/images/6.jpg"),
    ];

    const handleGetStarted = () => {
        console.log("Button Click");
    };

    return (
        <>
            <MarqueeImages speed={0.7} imageList={imageList} />
            <MarqueeImages speed={0.4} marginTop={10} imageList={imageList} />
            <MarqueeImages speed={0.5} marginTop={10} imageList={imageList} />
            <LandingContent onGetStarted={handleGetStarted} />
        </>
    );
};

export default Landing;
