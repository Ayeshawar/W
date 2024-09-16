// List of 50 colors
const colors = [
    "#FF5733", "#FFBD33", "#DBFF33", "#75FF33", "#33FF57",
    "#33FFBD", "#33DBFF", "#3375FF", "#5733FF", "#BD33FF",
    "#FF33DB", "#FF3366", "#FF6633", "#FF9933", "#FFCC33",
    "#CCFF33", "#99FF33", "#66FF33", "#33FF66", "#33FF99",
    "#33FFCC", "#33CCFF", "#3366FF", "#3399FF", "#33CC99",
    "#CC99FF", "#FF99CC", "#FF6699", "#FF3366", "#FF6600",
    "#FF0000", "#FF3300", "#FF6600", "#FF3300", "#FF4500",
    "#FF6347", "#FF7F50", "#FF8C00", "#FFA500", "#FFB6C1",
    "#FFC0CB", "#FFD700", "#F0E68C", "#F0F8FF", "#F5F5DC",
    "#F5F5F5", "#F5F5F5", "#F5F5F5", "#F5F5F5", "#F5F5F5"
];

// Function to change background color
function changeColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomIndex];
}

// Event listeners for space key and touch events
document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        changeColor();
    }
});

document.addEventListener('touchstart', changeColor);
