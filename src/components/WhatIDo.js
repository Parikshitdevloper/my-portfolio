import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const WhatIDo = () => {
    const containerRef = useRef([]);
    const setRef = (el, index) => {
        containerRef.current[index] = el;
    };
    useEffect(() => {
        if (ScrollTrigger.isTouch) {
            containerRef.current.forEach((container) => {
                if (container) {
                    container.classList.remove("what-noTouch");
                    container.addEventListener("click", () => handleClick(container));
                }
            });
        }
        return () => {
            containerRef.current.forEach((container) => {
                if (container) {
                    container.removeEventListener("click", () => handleClick(container));
                }
            });
        };
    }, []);
    return (_jsxs("div", { className: "whatIDO", children: [_jsx("div", { className: "what-box", children: _jsxs("h2", { className: "title", children: ["W", _jsx("span", { className: "hat-h2", children: "HAT" }), _jsxs("div", { children: ["I", _jsx("span", { className: "do-h2", children: " DO" })] })] }) }), _jsx("div", { className: "what-box", children: _jsxs("div", { className: "what-box-in", children: [_jsx("div", { className: "what-border2", children: _jsxs("svg", { width: "100%", children: [_jsx("line", { x1: "0", y1: "0", x2: "0", y2: "100%", stroke: "white", strokeWidth: "2", strokeDasharray: "7,7" }), _jsx("line", { x1: "100%", y1: "0", x2: "100%", y2: "100%", stroke: "white", strokeWidth: "2", strokeDasharray: "7,7" })] }) }), _jsxs("div", { className: "what-content what-noTouch", ref: (el) => setRef(el, 0), children: [_jsx("div", { className: "what-border1", children: _jsxs("svg", { height: "100%", children: [_jsx("line", { x1: "0", y1: "0", x2: "100%", y2: "0", stroke: "white", strokeWidth: "2", strokeDasharray: "6,6" }), _jsx("line", { x1: "0", y1: "100%", x2: "100%", y2: "100%", stroke: "white", strokeWidth: "2", strokeDasharray: "6,6" })] }) }), _jsx("div", { className: "what-corner" }), _jsxs("div", { className: "what-content-in", children: [_jsx("h3", { children: "DEVELOP" }), _jsx("h4", { children: "Description" }), _jsx("p", { children: "I can efficiently develop Android apps with debugging, API integration, database management, and performance optimization." }), _jsx("h5", { children: "Skillset & tools" }), _jsxs("div", { className: "what-content-flex", children: [_jsx("div", { className: "what-tags", children: "Java" }), _jsx("div", { className: "what-tags", children: "Kotlin" }), _jsx("div", { className: "what-tags", children: "Flutter" }), _jsx("div", { className: "what-tags", children: "KMP" }), _jsx("div", { className: "what-tags", children: "CI/CD" }), _jsx("div", { className: "what-tags", children: "REST API" }), _jsx("div", { className: "what-tags", children: "Firebase" }), _jsx("div", { className: "what-tags", children: "MMVM" }), _jsx("div", { className: "what-tags", children: "OOP" }), _jsx("div", { className: "what-tags", children: "Room Database" })] }), _jsx("div", { className: "what-arrow" })] })] }), _jsxs("div", { className: "what-content what-noTouch", ref: (el) => setRef(el, 1), children: [_jsx("div", { className: "what-border1", children: _jsx("svg", { height: "100%", children: _jsx("line", { x1: "0", y1: "100%", x2: "100%", y2: "100%", stroke: "white", strokeWidth: "2", strokeDasharray: "6,6" }) }) }), _jsx("div", { className: "what-corner" }), _jsxs("div", { className: "what-content-in", children: [_jsx("h3", { children: "DESIGN" }), _jsx("h4", { children: "Description" }), _jsx("p", { children: "I can also design intuitive UI/UX with wireframing, animations, and responsive layouts for a great user experience" }), _jsx("h5", { children: "Skillset & tools" }), _jsxs("div", { className: "what-content-flex", children: [_jsx("div", { className: "what-tags", children: "Figma" }), _jsx("div", { className: "what-tags", children: "LottieFiles" }), _jsx("div", { className: "what-tags", children: "UI Design" }), _jsx("div", { className: "what-tags", children: "Jetpack Compose" }), _jsx("div", { className: "what-tags", children: "XML" }), _jsx("div", { className: "what-tags", children: "3D Animation" }), _jsx("div", { className: "what-tags", children: "Custom Views" }), _jsx("div", { className: "what-tags", children: "MotionLayout & ConstraintLayout" })] }), _jsx("div", { className: "what-arrow" })] })] })] }) })] }));
};
export default WhatIDo;
function handleClick(container) {
    container.classList.toggle("what-content-active");
    container.classList.remove("what-sibling");
    if (container.parentElement) {
        const siblings = Array.from(container.parentElement.children);
        siblings.forEach((sibling) => {
            if (sibling !== container) {
                sibling.classList.remove("what-content-active");
                sibling.classList.toggle("what-sibling");
            }
        });
    }
}
