export const  dateStringToDate = (dateString: string): Date {
    // 28/10/2018
    const dateParts = dateString.split('/') // ['28', '10', '2018'] then after parseInt, dateParts are numbers
    .map((value: string): number => {
        return parseInt(value)
    }) 

    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0])
}