// null, undefined, void
// any, unknown, never

let value1: undefined = undefined;
let value2: null = null;
console.log(typeof value1, value1, typeof value2, value2);
console.log(!value1, !value2);

function checkType(): void{
    // console.log();
    // while(true){}
}

//******************* any - unknown - never ************** */
let value: any;
value = "streing"
value = true
value = false
value = 2454
value = 1.05
value = () => {}
value = null
value = undefined
value = ["", 45, {}]
value = {}
//---------------------------
let value10: unknown;
value10 = "streing"
value10 = true
value10 = false
value10 = 2454
value10 = 1.05
value10 = () => {}
value10 = null
value10 = undefined
value10 = ["", 45, {}]


function sendError(): never{
    throw {error: "message", code: 401, status: false}
}