const useDate = () => {
	const today = new Date();
	const oneWeekAgo = new Date();
	const oneMonthAgo = new Date();
	const oneYearAgo = new Date();
	oneWeekAgo.setDate(today.getDate() - 7);
	oneMonthAgo.setDate(today.getDate() - 28);
	oneYearAgo.setMonth(today.getMonth() - 12);
	today.setHours(23, 59, 59);
	oneWeekAgo.setHours(0, 0, 0, 0);
	oneMonthAgo.setHours(0, 0, 0, 0);
	oneYearAgo.setHours(0, 0, 0, 0);
	return { today, oneWeekAgo, oneMonthAgo, oneYearAgo };
};

export default useDate;
