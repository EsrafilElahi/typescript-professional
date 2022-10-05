//intersection Types
enum PROVINCE {
    Tehran = "Tehran",
    Kordestan = "Kurdestan",
    Azerbayjab = "Azerbayjan"
}

let cond = true
type Tehran = "Tehran" | "Varamin" |"Rey";
type Kurdestan = "Sanandaj" | "Kamyaran" |"Saqez";
type Detail = {
    name?: string;
    aboutMe?: string
}
type Security = {
    username: string;
    password: string;
    token?: string;
    refreshToken?: string
}
type Contact = {
    phone: string;
    email: string;
}
type Address = {
    province: PROVINCE;
    city: Tehran | Kurdestan;
    street: string;
    alley: string;
    postalCode?: string;
    zipCode?: string;
}
type User1 = Detail & Address & Security & Contact ;
interface IUser {
    id: number;
    detail: Detail;
    address: Address;
    security: Security;
    contact: Contact
}
const user : IUser = {
    id: 1,
    detail: {

    },
    address: {
        province: PROVINCE.Kordestan,
        city: "Kamyaran",
        street: "foo",
        alley: "bahman",
    },
    security: {
        username: "erfan",
        password: "123456",

    },
    contact: {
        phone: "",
        email: ""
    }
}