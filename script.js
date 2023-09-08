const colorBox = document.getElementById('colorBox');
const colors = ['red', 'blue', 'green', 'yellow', 'purple'];
let currentIndex = 0;

function changeColor() {
    colorBox.style.backgroundColor = colors[currentIndex];
    currentIndex = (currentIndex + 1) % colors.length;
}

// Change the color every 2 seconds (2000 milliseconds)
setInterval(changeColor, 800);
