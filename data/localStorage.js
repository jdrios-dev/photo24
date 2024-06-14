import { challenges } from "./challenges";

export const saveAllChallenges = async () => {
	localStorage.setItem("challenges", JSON.stringify(challenges));
};

export const updateChallengeById = async (id) => {
	const allItems = await readAllChallenges();
	const item = allItems.find((item) => item.id === id);
	const itemIndex = allItems.findIndex((item) => item.id === id);
	allItems[itemIndex] = { ...item, isCompleted: !item.isCompleted };

	return localStorage.setItem("challenges", JSON.stringify(allItems));
};

export const readAllChallenges = async () => {
	const challenges = await localStorage.getItem("challenges");
	const parsed = JSON.parse(challenges);
	if (parsed === null) {
		await saveAllChallenges();
		readAllChallenges();
		return challenges;
	}

	return parsed;
};
