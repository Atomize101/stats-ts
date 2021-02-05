import { MatchData } from './MatchData';

export interface Analyzer {
	run(matches: MatchData[]): string;
}

export interface OutPutTarget {
	print(report: string): void;
}

export class Summary {
	constructor(public analyzer: Analyzer, public outPutTarget: OutPutTarget) {}
}
