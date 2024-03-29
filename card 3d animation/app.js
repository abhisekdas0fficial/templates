// Movement Animation to happen
const card = document.querySelector('.card');
const container = document.querySelector('.container');
// Items
const title = document.querySelector('.title');
const sneaker = document.querySelector('.sneaker img');
const circle = document.querySelector('.circle');
const purchase = document.querySelector('.purchase button');
const description = document.querySelector('.info h3');
const sizes = document.querySelector('.sizes');

// Moving Animation Event
container.addEventListener('mousemove', (e) => {
    let xAxis = -(window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = -(window.innerHeight / 2 - e.pageY) / 25;

    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
})
// Animate In
container.addEventListener('mouseenter', (e) => {
    card.style.transition = "none";
    // Popout
    title.style.transform = 'translateZ(150px)';
    sneaker.style.transform = 'translateZ(180px) rotate(45deg)';
    circle.style.transform = 'translateZ(50px)';
    description.style.transform = 'translateZ(125px)';
    sizes.style.transform = 'translateZ(100px)';
    purchase.style.transform = 'translateZ(125px)';
})

// Animate Out
container.addEventListener('mouseleave', (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = 'rotateY(0deg) rotateX(0deg)';
    // Popback
    title.style.transform = 'translateZ(0)';
    sneaker.style.transform = 'translateZ(0) rotate(0deg)';
    circle.style.transform = 'translateZ(0)';
    description.style.transform = 'translateZ(0)';
    sizes.style.transform = 'translateZ(0)';
    purchase.style.transform = 'translateZ(0)';
})