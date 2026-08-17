const timeToMinutes = (time) => {
	const [hours, minutes] = time.split(":").map(Number);

	return hours * 60 + minutes;
};

const minutesToTime = (minutes) => {
	const hours = Math.floor(minutes / 60);
	const mins = minutes % 60;

	return `${String(hours).padStart(2, "0")}:${String(mins).padStart(2, "0")}`;
};

export const generateTimeSlots = (openingTime, closingTime, slotDuration) => {
	const slots = [];

	let currentTime = timeToMinutes(openingTime);
	const closing = timeToMinutes(closingTime);

	while (currentTime < closing) {
		slots.push(minutesToTime(currentTime));

		currentTime += slotDuration;
	}

	return slots;
};

export const isValidTimeSlot = (
	time,
	openingTime,
	closingTime,
	slotDuration,
) => {
	const slots = generateTimeSlots(openingTime, closingTime, slotDuration);

	return slots.includes(time);
};
