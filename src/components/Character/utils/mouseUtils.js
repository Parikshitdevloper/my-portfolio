export const handleMouseMove = (event, setMousePosition) => {
    const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    setMousePosition(mouseX, mouseY);
};
export const handleTouchMove = (event, setMousePosition) => {
    const mouseX = (event.touches[0].clientX / window.innerWidth) * 2 - 1;
    const mouseY = -(event.touches[0].clientY / window.innerHeight) * 2 + 1;
    setMousePosition(mouseX, mouseY);
};
export const handleTouchEnd = (setMousePosition) => {
    setTimeout(() => {
        setMousePosition(0, 0, 0.03, 0.03);
        setTimeout(() => {
            setMousePosition(0, 0, 0.1, 0.2);
        }, 1000);
    }, 2000);
};
export const handleHeadRotation = (headBone, mouseX, mouseY, interpolationX, interpolationY, lerp) => {
    if (!headBone)
        return;
    if (window.scrollY < 200) {
        const maxRotation = Math.PI / 6;
        headBone.rotation.y = lerp(headBone.rotation.y, mouseX * maxRotation, interpolationY);
        let minRotationX = -0.3;
        let maxRotationX = 0.4;
        if (mouseY > minRotationX) {
            if (mouseY < maxRotationX) {
                headBone.rotation.x = lerp(headBone.rotation.x, -mouseY - 0.5 * maxRotation, interpolationX);
            }
            else {
                headBone.rotation.x = lerp(headBone.rotation.x, -maxRotation - 0.5 * maxRotation, interpolationX);
            }
        }
        else {
            headBone.rotation.x = lerp(headBone.rotation.x, -minRotationX - 0.5 * maxRotation, interpolationX);
        }
    }
    else {
        if (window.innerWidth > 1024) {
            headBone.rotation.x = lerp(headBone.rotation.x, -0.4, 0.03);
            headBone.rotation.y = lerp(headBone.rotation.y, -0.3, 0.03);
        }
    }
};
