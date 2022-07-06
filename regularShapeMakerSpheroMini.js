var Angle = 0;


async function startProgram() {
	await drawShapeRegular(5);
}

async function drawShapeRegular(num0) {
	if (num0 >= 3) {
		Angle = 0;
		for (var _i0 = 0; _i0 < num0; ++_i0) {
			await roll(Angle, 60, 2);
			await delay(1);
			Angle = Angle + ((num0 - 2) * 180) / num0;
			await delay(0.025);
		}
		await roll(0, 0, 0);
	} else {
		await Sound.RobotTalk.CannotCompute.play(true);
	}
}
