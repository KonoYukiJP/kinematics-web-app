export const startAnimationLoop = (scene, camera, renderer, labelRenderer, controls) => {
    const animate = () => {
        controls.update();
        renderer.render(scene, camera);
        labelRenderer.render(scene, camera);
        requestAnimationFrame(animate);
    };
    animate();
};
