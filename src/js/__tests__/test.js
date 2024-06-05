import { checkHealth } from "../checkHealth.js";

test("Check Health Test1", () => {
	let player = {
		name: "Маг",
		health: 90
	}
	const result = checkHealth(player);
	expect(result).toBe("Healthy")
})


test("Check Health Test2", () => {
	let player = {
		name: "Маг",
		health: 45
	}
	const result = checkHealth(player);
	expect(result).toBe("Wounded")
})


test("Check Health Test3", () => {
	let player = {
		name: "Маг",
		health: 7
	}
	const result = checkHealth(player);
	expect(result).toBe("Critical")
})