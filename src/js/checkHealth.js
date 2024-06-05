export function checkHealth(player) {
	if (player.health > 50) {
		return "Healthy";
	} else if (player.health < 50 && player.health > 15) {
		return "Wounded";
	} else {
		return "Critical"
	}
}