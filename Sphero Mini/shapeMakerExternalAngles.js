var AngleRotate = 0;
var AngleAdd = 0;


async function startProgram() {
	await drawPolygpn(3);
	exitProgram();
}

async function drawPolygpn(num0) {
	AngleAdd = 0;
	AngleRotate = 360 / num0;
	for (var _i0 = 0; _i0 < num0; ++_i0) {
		await roll(AngleAdd, 12, 1);
		await delay(0.5);
		AngleAdd = AngleAdd + AngleRotate;
		await delay(0.025);
	}
}
