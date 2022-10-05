export function codeGenerator(){
    return Math.floor(Math.random() * 90000) + 10000
}
export function sendSMS(mobile: string, code: string){
    //sending...
    return {
        status: 100,
        message: "sent code for user: " + code
    }
}
