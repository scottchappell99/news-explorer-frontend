export const newsAPIKey = "3ea7283467ed4e6e93326f5c3dc8aa38";

const currentDate = new Date();
const currentDay = currentDate.getDate();
const currentMonth = currentDate.getMonth() + 1;
const currentYear = currentDate.getFullYear();

export const fromDate = `${currentYear}-${currentMonth}-${currentDay - 7}`;
export const toDate = `${currentYear}-${currentMonth}-${currentDay}`;
