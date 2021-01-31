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

console.log(matches);
