function sayHello(firstName?: string, lastName?: string): void{
    console.log(`Hi ${firstName || "New User"} ${lastName || ''} welcome to our website.`);
}
sayHello()
let blog: {
    title: string,
    text: string,
    likes: number,
    author: object,
    comments?: Array<object> | object[]
}
blog = {
    title:" new title",
    text: "new text",
    likes: 0,
    author: { name: "Erfan" },
}