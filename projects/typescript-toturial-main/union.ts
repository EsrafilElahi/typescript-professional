//Union Types
function getRegistedUsers(date: Date | undefined): (object[] | undefined | null){
    if(date) {
        //search by date and get result and return that
        //if cannot find any user in that date return null
        return [
            {}
        ]
    }
    else{
        // get all users for today and return those
        //if cannot find any user return undefined
        return [
             {}, {}
        ]
    }
}
