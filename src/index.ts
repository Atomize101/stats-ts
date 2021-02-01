import { CsvFileReader } from './CsvFileReader';

// Will need to split on \n. Then map + split on the , to make a two dimensional array.

const reader = new CsvFileReader('football.csv');
reader.read();

// enum - enumeration
// enum definition
// Purpose of the enum is to signal to other developers that this is a collection of closely related values.
enum MatchResult {
	HomeWin = 'H',
	AwayWin = 'A',
	Draw = 'D',
}

let manUnitedWins = 0;

for (let match of reader.data) {
	if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
		manUnitedWins++;
	} else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
		manUnitedWins++;
	}
}

console.log(`Man United won ${manUnitedWins} games`);
