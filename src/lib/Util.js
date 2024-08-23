function maxEntry(dictionary, a, b) {
	if (dictionary[a] == dictionary[b])
		return null;
	return dictionary[a] > dictionary[b] ? a : b;
}

function resultsToPersonality(results) {
	let personality = "";
	personality += maxEntry(results, "E", "I") || "_";
	personality += maxEntry(results, "N", "S") || "_";
	personality += maxEntry(results, "T", "F") || "_";
	personality += maxEntry(results, "J", "P") || "_";
	return personality;
}

export { resultsToPersonality }