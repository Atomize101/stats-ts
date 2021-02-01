import fs from 'fs';

// Will need to split on \n. Then map + split on the , to make a two dimensional array.

const matches = fs
	.readFileSync('football.csv', {
		encoding: 'utf-8',
	})
	.split('\n')
	.map((row: string): string[] => {
		return row.split(',');
	});

// enum - enumeration
// enum definition
// Purpose of the enum is to signal to other developers that this is a collection of closely related values.
enum MatchResult {
	HomeWin = 'H',
	AwayWin = 'A',
	Draw = 'D',
}

let manUnitedWins = 0;

for (let match of matches) {
	if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
		manUnitedWins++;
	} else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
		manUnitedWins++;
	}
}

console.log(`Man United won ${manUnitedWins} games`);
