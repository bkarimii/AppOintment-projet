export function generateTimeSlots(startTime, endTime, intervalMinutes = 15) {
	const slots = [];
	const start = new Date(startTime);
	const end = new Date(endTime);

	while (start <= end) {
		// Format the current start time to ISO string with "Z" timezone
		slots.push(start.toISOString());

		// Add the interval (15 minutes) to the start time
		start.setMinutes(start.getMinutes() + intervalMinutes);
	}

	return slots;
}
