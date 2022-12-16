// Generic Types
const mirror1 = <T>(foo: T): T => {
    return foo
}
function addintion<T1, T2>(value1: T1, value2: T2): any{
    if(typeof value1 == "number" && typeof value2 == "number"){
        return value1 + value2
    }if(typeof value1 == "string" && typeof value2 == "string"){
        return value1.concat(value2)
    }else{
        return {value1, value2}
    }
}

type User = {}
type Blog = {}
type Comment_ = {}

interface Obj {
    name: string
}

function test<T extends Obj>(obj: T) {
  return obj.name;
}

async function fetchApi<ResultType>(path: string): Promise<ResultType>{
    const response = await fetch(`https://freerealapi.com${path}`);
    return response.json();
}
const blogs: Promise<Blog[]> = fetchApi<Blog[]>("/blogs")
const users: Promise<User[]> = fetchApi<User[]>("/users")

