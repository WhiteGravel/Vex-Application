var Angle = 0;
var Rotation = 0;


async function startProgram() {
	await drawShapeRegular(5);
}

async function drawShapeRegular(num0) {
	Rotation = ((num0 - 2) * 180) / num0;
	Angle = 0;
	if (num0 >= 3) {
		for (var _i0 = 0; _i0 < num0; ++_i0) {
			await roll(Angle, 42, 1);
			await delay(0.5);
			Angle = Angle + Rotation;
			await delay(0.025);
		}
	}
	exitProgram();
}
