const card = document.querySelector('.card');
const container = document.querySelector('.container');

//moving animation
container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) /25;
    let yAxis = (window.innerHeight / 2 - e.pageY) /25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//Animate In
container.addEventListener('mouseenter', (e) => {
    card.style.transition = "none";
    //pop-out
    title.style.transform = 'translateXZ(200px)';
    sneaker.style.transform = 'translateZ(150px)';
    purchase.style.transform = 'translateZ(150px)';
    sizes.style.transform = 'translateZ(150px)';
});

//Animate Out
container.addEventListener('mouseleave', (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //pop-back
    title.style.transform = 'translateZ(1500px)';
});

//Items
const title = document.querySelector(`.title`);
const sneaker = document.querySelector(`.sneaker img`);
const purchase = document.querySelector(`.purchase`);
const sizes = document.querySelector(`.sizes`);
const description = document.querySelector(`.info h3`);

