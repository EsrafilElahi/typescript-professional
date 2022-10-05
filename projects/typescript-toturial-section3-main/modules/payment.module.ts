const createOptionPayment: Function = (amount: number, url: string) => {
    return {
        amount,
        paymentURL : url,
        callbackUrl: "....",
        description: "....",

    }
}
export default createOptionPayment