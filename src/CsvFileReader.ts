import fs from 'fs';

export class CsvFileReader {
	data: string[][] = [];

	constructor(public filename: string) {}

	// Will need to split on \n. Then map + split on the , to make a two dimensional array.
	read(): void {
		this.data = fs
			.readFileSync(this.filename, {
				encoding: 'utf-8',
			})
			.split('\n')
			.map((row: string): string[] => {
				return row.split(',');
			});
	}
}
