interface InterfacePerson {
    firstName: string
    lastName: string
    age: number
    username: string
    email: string
}
function newUser(person: InterfacePerson): InterfacePerson{
    return person
}
let personData : InterfacePerson = {
    firstName: "Erfan",
    lastName: "Usefi",
    age: 26,
    username: "erfanyousefi.ir",
    email: "erfan@google.com"
}
let users: Array<InterfacePerson> = []
console.log(newUser(personData));

interface INewBlog {
    title: string
    text: string
    image: string
    likes: number
    createdAt?: Date 
}
let blog: INewBlog = {
    title: "",
    text: "",
    image: "",
    likes: 0,
    createdAt: new Date(1660000000000)
}
//nulish operator
console.log(0 ?? true);
console.log(false ?? true);
console.log("" ?? true);
console.log(null ?? true);
console.log(undefined ?? true);

function createNewBlog(blog: INewBlog): INewBlog{
    blog.createdAt = blog.createdAt ?? new Date()
    return blog
}
console.log(createNewBlog(blog));