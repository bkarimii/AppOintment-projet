export function generateTimeSlots(startTime, endTime, intervalMinutes) {
	const slots = [];
	const start = new Date(startTime);
	const end = new Date(endTime);

	intervalMinutes = Number(intervalMinutes);
	let current = new Date(start);

	while (current <= end) {
		slots.push(current.toISOString());

		current.setMinutes(current.getMinutes() + intervalMinutes);
	}

	return slots;
}
