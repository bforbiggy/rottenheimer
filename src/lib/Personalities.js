import Jonkler from "$lib/assets/jonkler.png";
import Mighty from "$lib/assets/mighty.png";
import Himdoriya from "$lib/assets/himdoriya.png";
import Mewer from "$lib/assets/mewer.png";
import Oppenheimer from "$lib/assets/oppenheimer.png";

const STRENGTHS = {
	bold: {
		short: "Alpha",
		long: "Ain't no playing no games straight up +1 million aura"
	},
	charismatic: {
		short: "Rizzy",
		long: "You are rizzy wit it so all the gyatts fawn all over you!"
	},
	altruistic: {
		short: "Nakama",
		long: "YOU ARE MY FRIEND ^-^"
	},
	honest: {
		short: "REAL",
		long: "\"A real ass mf who don't spit no cap\""
	},
	analytical: {
		short: "Third Eye",
		long: "THE VOICES TELL ME EVERYTHING"
	}
};

const WEAKNESSES = {
	impulsive: {
		short: "Gooner",
		long: "You lack the discipline to edge"
	},
	intolerant: {
		short: "Copium",
		long: "Can't handle going sisyphus mode so you need to huff copium sometimes"
	},
	unrealistic: {
		short: "Delulu",
		long: "Can't get a grip on reality, delusion is required"
	},
	skeptical: {
		short: "Sussy",
		long: "\"Can't trust nobody, not even yourself.\"",
	},
	overthinker: {
		short: "Mind's eye",
		long: "THE VOICES TELL ME TOO MUCH"
	}
};

export default {
	ESTJ: undefined,
	ESTP: {
		image: Mewer,
		name: "Giga Mewer",
		blurb: "\"I do mew, how could you tell?\"",
		pros: [STRENGTHS.bold],
		cons: [WEAKNESSES.impulsive]
	},
	ESFJ: undefined,
	ESFP: undefined,
	ENTJ: undefined,
	ENTP: {
		image: Jonkler,
		name: "The Jonkler",
		blurb: "\"The jonkes on YOU!!!!\"",
		pros: [STRENGTHS.charismatic],
		cons: [WEAKNESSES.intolerant]
	},
	ENFJ: {
		image: Mighty,
		name: "Mr. Might",
		blurb: "\"This country is saved. Why? Because I am here.\"",
		pros: [STRENGTHS.charismatic, STRENGTHS.altruistic],
		cons: [WEAKNESSES.unrealistic]
	},
	ENFP: undefined,
	ISTJ: undefined,
	ISTP: {
		image: Himdoriya,
		name: "Himdoriya",
		blurb: "\"I'm not him...\"",
		pros: [STRENGTHS.honest],
		cons: [WEAKNESSES.skeptical]
	},
	ISFJ: undefined,
	ISFP: undefined,
	INTJ: undefined,
	INTP: {
		image: Oppenheimer,
		name: "Oppenheimer",
		blurb: "\"My le bomb.... le killed people?\"",
		pros: [STRENGTHS.analytical],
		cons: [WEAKNESSES.overthinker]
	},
	INFJ: undefined,
	INFP: undefined
}