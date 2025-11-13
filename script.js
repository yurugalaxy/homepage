const glow = document.getElementById("glow");
const cursor = document.getElementById("cursor");
const spring = 0.4;

addEventListener('mousemove', (e) => {
	followMouse(e);
});

function followMouse(e) {
	var posX = e.clientX;
	var posY = e.clientY;

	glow.style.left = posX / 10 + "px";
	glow.style.top = posY / 10 + "px";
	cursor.style.left = posX + "px";
	cursor.style.top = posY + "px";
};
