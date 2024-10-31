export function generateTimeSlots(
	meetingDate,
	startTime,
	endTime,
	intervalMinutes,
) {
	const slots = [];

	const isBST = (date) => {
		const marchDate = new Date(date.getFullYear(), 2, 31);
		const marchLastSunday = new Date(
			marchDate.setDate(marchDate.getDate() - marchDate.getDay()),
		);
		marchLastSunday.setHours(1, 0, 0, 0);

		const octoberDate = new Date(date.getFullYear(), 9, 31);
		const octoberLastSunday = new Date(
			octoberDate.setDate(octoberDate.getDate() - octoberDate.getDay()),
		);
		octoberLastSunday.setHours(1, 0, 0, 0);

		return date >= marchLastSunday && date < octoberLastSunday;
	};

	const start = new Date(`${meetingDate}T${startTime}`);
	const end = new Date(`${meetingDate}T${endTime}`);

	intervalMinutes = Number(intervalMinutes);
	let current = new Date(start);

	const formatToRFC3339 = (date) => {
		const bstOffset = isBST(date) ? -60 : 0;
		const utcDate = new Date(date.getTime() + bstOffset * 60 * 1000);
		return utcDate.toISOString();
	};

	while (current <= end) {
		slots.push(formatToRFC3339(current));
		current.setMinutes(current.getMinutes() + intervalMinutes);
	}

	return slots;
}
