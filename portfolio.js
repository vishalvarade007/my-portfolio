const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
        const mouseX = e.pageX - card.offsetLeft;
        const mouseY = e.pageY - card.offsetTop;

        const cardWidth = card.offsetWidth;
        const cardHeight = card.offsetHeight;

        const xAxis = (mouseX - (cardWidth / 2)) / cardWidth;
        const yAxis = (mouseY - (cardHeight / 2)) / cardHeight;

        const rotateX = yAxis * 60; // Adjust as needed
        const rotateY = -(xAxis * 60); // Adjust as needed

        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'none';
    });
});

const menu = document.getElementById("mydiv");
const ul = document.getElementById("myul");
menu.addEventListener('click',()=>{
    if(!ul.classList.contains("open")){
        ul.classList.toggle("open");
    }
    else{
        ul.classList.toggle("close");
    }
     
})


