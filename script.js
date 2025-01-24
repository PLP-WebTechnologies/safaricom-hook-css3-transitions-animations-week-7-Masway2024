// script.js

function calculateArea(length, width) {
    return length * width;
}

let area = calculateArea(5, 3);  // 15
document.getElementById("areaResult").textContent = area;

function testScope() {
    let localVariable = "I am local";
    console.log(localVariable);
    console.log(globalVariable);  // Accessible
}

let globalVariable = "I am global";

function toggleModal() {
    const modal = document.getElementById('myModal');
    modal.classList.toggle('hidden');
}

function triggerAnimation() {
    const banner = document.getElementById('animatedBanner');
    banner.classList.remove('hidden');
    banner.style.animation = 'none';
    banner.offsetHeight;  // Trigger reflow
    banner.style.animation = 'slide 1s ease-out';
}
