let user: [name: string, age: number];
user = ["Erfan Yousefi", 25]
const position: [lat: number, long: number] = [61.254797878485, -31.5786544];
let [lat, long] = position;
console.log(lat, long);
console.log(position);

let book: [name: string, author: string, pages: number, publishCount?: number,]

book = ["nodejs", "erfan", 501];
let [bookName, bookAuthor, pagesCount] = book
let myScores: [name: string, ...nums: number[]]
let userScores: [username: string, ...scores: [first: number, second: number, third: number]];
userScores = ["ErfanYousefi", 10,5,6]
