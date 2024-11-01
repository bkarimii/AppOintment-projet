import { format, addMinutes } from "date-fns";
import { fromZonedTime, toZonedTime } from "date-fns-tz";

export function generateTimeSlots(
	meetingDate,
	startTime,
	endTime,
	intervalMinutes,
) {
	const timeZone = "Europe/London";
	const slots = [];

	const start = fromZonedTime(`${meetingDate}T${startTime}:00`, timeZone);
	const end = fromZonedTime(`${meetingDate}T${endTime}:00`, timeZone);

	intervalMinutes = Number(intervalMinutes);
	let current = start;

	while (current <= end) {
		slots.push(
			format(toZonedTime(current, "UTC"), "yyyy-MM-dd'T'HH:mm:ss") + ".000Z",
		);
		current = addMinutes(current, intervalMinutes);
	}

	return slots;
}
