enum Steps {
    zero,
    one,
    two,
    three
}
console.log(Steps.zero);
console.log(Steps.one);
//pending, tryToCash, failed, success, warning, error, info
//state => 0, 1, 2, 3
enum USER_PAYMENT_STATUS {
    PENDING="pending",
    TRY_TO_CASH="tryToCash",
    FAILED="FAILED",
    SUCCESS="success",
    WARNING="warning",
    ERROR="error",
    INFO="info"
}
enum USER_ACTIVE_STATE {
    TRUE=1,
    FALSE=0
}
let user1: object = {
    name: "",
    age: 25,
    state: USER_PAYMENT_STATUS.SUCCESS,
    isActive: USER_ACTIVE_STATE.FALSE
}
enum ERROR_MESSAGES {
    VALIDATION = "error for validation",
    NOT_FOUND = "error for notfount",
    SERVER_ERROR = "error for internal server error",
    UNAUTHORIZATION = "error for unauthorization"
}
enum StatusCodes {
    OK=200,
    CREATED=201,
    ACCEPTED=202,
    NOTFOUND=404,
    BAD_REQUEST=400,
    UNAUTHORIZATION=401,
}
console.log(ERROR_MESSAGES.VALIDATION);
console.log(ERROR_MESSAGES.UNAUTHORIZATION);
