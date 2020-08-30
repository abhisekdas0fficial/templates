const canvas = document.querySelector("#demo");
const context = canvas.getContext("2d");
gsap.registerPlugin(ScrollTrigger);

const currentFrame = index => (
    `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${index.toString().padStart(4, '0')}.jpg`
)

canvas.width = 1158;
canvas.height = 770;
const frameCount = 147;
const images = [];
const progress = {
    frameIndex: 1
};

function preloadImages() {
    for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i + 1);
        images.push(img);
    }
}

preloadImages();
images[0].onload = render();

function render() {
    context.drawImage(images[progress.frameIndex - 1], 0, 0);
}

gsap.to(progress, {
    scrollTrigger: {
        trigger: "section",
        start: "bottom bottom",
        end: "+=1200 top",
        scrub: 0.5,
        pin: true
    },
    frameIndex: frameCount,
    snap: "frameIndex",
    onUpdate: function() {
        requestAnimationFrame(() => render());
    }
});