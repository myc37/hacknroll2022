const useDate = () => {
	const today = new Date();
	today.setHours(23, 59, 59, 999);
	const oneWeekAgo = new Date(today.getDate() - 7);
	oneWeekAgo.setHours(0, 0, 0, 0);
	const oneYearAgo = new Date(today.getDate() - 365);
	oneYearAgo.setHours(0, 0, 0, 0);
	return { today, oneWeekAgo, oneYearAgo };
};

export default useDate;
