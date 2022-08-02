type Race = "HUMAN" | "GIANT" | "ROBOT" | "FAIRY" | "HERO";

interface Stat {
	life: number;
	power: number;
	resist: number;
}

export interface Monster {
	number: number;
	name: string;
	race: Race;
	desc: string;
	stat: Stat
};