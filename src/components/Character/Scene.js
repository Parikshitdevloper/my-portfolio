import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import setCharacter from "./utils/character";
import setLighting from "./utils/lighting";
import { useLoading } from "../../context/LoadingProvider";
import handleResize from "./utils/resizeUtils";
import { handleMouseMove, handleTouchEnd, handleHeadRotation, handleTouchMove, } from "./utils/mouseUtils";
import setAnimations from "./utils/animationUtils";
import { setProgress } from "../Loading";
const Scene = () => {
    const canvasDiv = useRef(null);
    const hoverDivRef = useRef(null);
    const sceneRef = useRef(new THREE.Scene());
    const { setLoading } = useLoading();
    const [character, setChar] = useState(null);
    useEffect(() => {
        if (canvasDiv.current) {
            let rect = canvasDiv.current.getBoundingClientRect();
            let container = { width: rect.width, height: rect.height };
            const aspect = container.width / container.height;
            const scene = sceneRef.current;
            const renderer = new THREE.WebGLRenderer({
                alpha: true,
                antialias: true,
            });
            renderer.setSize(container.width, container.height);
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.toneMapping = THREE.ACESFilmicToneMapping;
            renderer.toneMappingExposure = 1;
            canvasDiv.current.appendChild(renderer.domElement);
            const camera = new THREE.PerspectiveCamera(14.5, aspect, 0.1, 1000);
            camera.position.z = 10;
            camera.position.set(0, 13.1, 24.7);
            camera.zoom = 1.1;
            camera.updateProjectionMatrix();
            let headBone = null;
            let screenLight = null;
            let mixer;
            const clock = new THREE.Clock();
            const light = setLighting(scene);
            let progress = setProgress((value) => setLoading(value));
            const { loadCharacter } = setCharacter(renderer, scene, camera);
            loadCharacter().then((gltf) => {
                if (gltf) {
                    const animations = setAnimations(gltf);
                    hoverDivRef.current && animations.hover(gltf, hoverDivRef.current);
                    mixer = animations.mixer;
                    let character = gltf.scene;
                    setChar(character);
                    scene.add(character);
                    headBone = character.getObjectByName("spine006") || null;
                    screenLight = character.getObjectByName("screenlight") || null;
                    progress.loaded().then(() => {
                        setTimeout(() => {
                            light.turnOnLights();
                            animations.startIntro();
                        }, 2500);
                    });
                    window.addEventListener("resize", () => handleResize(renderer, camera, canvasDiv, character));
                }
            });
            let mouse = { x: 0, y: 0 }, interpolation = { x: 0.1, y: 0.2 };
            const onMouseMove = (event) => {
                handleMouseMove(event, (x, y) => (mouse = { x, y }));
            };
            let debounce;
            const onTouchStart = (event) => {
                const element = event.target;
                debounce = setTimeout(() => {
                    element?.addEventListener("touchmove", (e) => handleTouchMove(e, (x, y) => (mouse = { x, y })));
                }, 200);
            };
            const onTouchEnd = () => {
                handleTouchEnd((x, y, interpolationX, interpolationY) => {
                    mouse = { x, y };
                    interpolation = { x: interpolationX, y: interpolationY };
                });
            };
            document.addEventListener("mousemove", (event) => {
                onMouseMove(event);
            });
            const landingDiv = document.getElementById("landingDiv");
            if (landingDiv) {
                landingDiv.addEventListener("touchstart", onTouchStart);
                landingDiv.addEventListener("touchend", onTouchEnd);
            }
            const animate = () => {
                requestAnimationFrame(animate);
                if (headBone) {
                    handleHeadRotation(headBone, mouse.x, mouse.y, interpolation.x, interpolation.y, THREE.MathUtils.lerp);
                    light.setPointLight(screenLight);
                }
                const delta = clock.getDelta();
                if (mixer) {
                    mixer.update(delta);
                }
                renderer.render(scene, camera);
            };
            animate();
            return () => {
                clearTimeout(debounce);
                scene.clear();
                renderer.dispose();
                window.removeEventListener("resize", () => handleResize(renderer, camera, canvasDiv, character));
                if (canvasDiv.current) {
                    canvasDiv.current.removeChild(renderer.domElement);
                }
                if (landingDiv) {
                    document.removeEventListener("mousemove", onMouseMove);
                    landingDiv.removeEventListener("touchstart", onTouchStart);
                    landingDiv.removeEventListener("touchend", onTouchEnd);
                }
            };
        }
    }, []);
    return (_jsx(_Fragment, { children: _jsx("div", { className: "character-container", children: _jsxs("div", { className: "character-model", ref: canvasDiv, children: [_jsx("div", { className: "character-rim" }), _jsx("div", { className: "character-hover", ref: hoverDivRef })] }) }) }));
};
export default Scene;
