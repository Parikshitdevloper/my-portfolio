import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);
const Work = () => {
    useGSAP(() => {
        let translateX = 0;
        function setTranslateX() {
            const box = document.getElementsByClassName("work-box");
            const rectLeft = document
                .querySelector(".work-container")
                .getBoundingClientRect().left;
            const rect = box[0].getBoundingClientRect();
            const parentWidth = box[0].parentElement.getBoundingClientRect().width;
            let padding = parseInt(window.getComputedStyle(box[0]).padding) / 2;
            translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
        }
        setTranslateX();
        let timeline = gsap.timeline({
            scrollTrigger: {
                trigger: ".work-section",
                start: "top top",
                end: "bottom top",
                scrub: true,
                pin: true,
                pinType: !ScrollTrigger.isTouch ? "transform" : "fixed",
                id: "work",
            },
        });
        timeline.to(".work-flex", {
            x: -translateX,
            duration: 40,
            delay: 0.2,
        });
    }, []);
    return (_jsx("div", { className: "work-section", id: "work", children: _jsxs("div", { className: "work-container section-container", children: [_jsxs("h2", { children: ["My ", _jsx("span", { children: "Work" })] }), _jsx("div", { className: "work-flex", children: [...Array(6)].map((_value, index) => (_jsxs("div", { className: "work-box", children: [_jsxs("div", { className: "work-info", children: [_jsxs("div", { className: "work-title", children: [_jsxs("h3", { children: ["0", index + 1] }), _jsxs("div", { children: [_jsx("h4", { children: "Nagrik ESuvidha" }), _jsx("p", { children: "Utilities" })] })] }), _jsx("h4", { children: "Tools and features" }), _jsx("p", { children: "Kotlin, XML, JavaScript, Android Studio" })] }), _jsx(WorkImage, { image: "/images/nagrik_logo.png", alt: "" })] }, index))) })] }) }));
};
export default Work;
