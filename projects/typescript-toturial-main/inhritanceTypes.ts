enum EventType {
    SPORT="sport",
    friendly="friendly"
}
type ID = string | number
type Events = {
    name: string;
    dateCreated: Date;
    type: EventType
}
interface Events2 {
    name: string;
    dateCreated: Date;
    type: EventType
}
type UserEvent = Events & {
    UserID: ID
}
interface UserEvent2 extends Events {
    UserID: ID
}
type UserEvent_0 = Events2 & {
    UserID: ID
}
interface UserEvent2_0 extends Events2 {
    UserID: ID
}
let userEvent: UserEvent2 = {
    name: "Erfan",
    dateCreated: new Date(),
    type: EventType.SPORT,
    UserID: 1
}