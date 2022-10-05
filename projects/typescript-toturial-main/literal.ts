// Literal Types
type productType = "phisical" | "virtual"
enum State {
    pending,
    started,
    cancel,
    abort,
    delivery
}
const product : {type: productType, state: State} = {
    type: "phisical",
    state: State.pending
}