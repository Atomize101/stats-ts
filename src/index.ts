import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './MatchResult';

// Will need to split on \n. Then map + split on the , to make a two dimensional array.

const reader = new CsvFileReader('football.csv');
reader.read();

console.log(reader.data);

let manUnitedWins = 0;

for (let match of reader.data) {
	if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
		manUnitedWins++;
	} else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
		manUnitedWins++;
	}
}

console.log(`Man United won ${manUnitedWins} games`);
