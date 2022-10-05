// abstract class
// overriding - override
enum State {
    START="start",
    DONE="done",
    CANCEL="cancel",
    TOP_LIST="topList"
}
type Todo = {
    id: number;
    title: string;
    state: State
    
}
type createTodoDTO = {
    title: string;
    state: State;
}
type ResponseMethod = {
    message: string;
}
interface ITodo {
    createTodo(todo: createTodoDTO): void;
    delete(id: number): void;
    getList(): void
    getByID(id: number) : void
}
abstract class TodoRepository implements ITodo{
    protected Todos: Todo[];
    constructor(){
        this.Todos = []
    }
    public createTodo(todo: createTodoDTO): void {}
    public delete(id: number): void {}
    public getByID(id: number): void {}
    public getList(): void {}
}
class TodoController extends TodoRepository {
    protected static self: TodoController;
    protected _latestID: number;
    public readonly myclassName: string
    constructor(){
       super();
       TodoController.self = this;
       this._latestID = this.Todos.length
       this.myclassName = "todo class"
    }
    public createTodo(todo: createTodoDTO): ResponseMethod {
        const id = this.Todos.length + 1
        const newTodo: Todo = {
            id,
            title: todo.title,
            state: todo.state
        }
        this.Todos.push(newTodo)
        this.latestID = id;
        return {message: "created"}
    }
    public getList(): Todo[] {
        return this.Todos
    }
    public getByID(id: number): Todo | ResponseMethod {
        const todo = this.Todos.find(todo => todo.id == id)
        if(todo) return todo
        return {message: "not found todo"}
    }
    public delete(id: number): ResponseMethod {
        const Todos = this.Todos.filter(todo => todo.id !== id);
        this.Todos = Todos;
        return {message: "removed the Todo"}
    }
    get latestID(): number{
        if(this._latestID) return this._latestID
        else return 0
    }
    set latestID(value: number) {
        if(typeof value === "number" && value >= this.Todos.length) {
            this._latestID = value
        } 
        else console.log("value of id is invalid");
        
    }
    public static countOfTodos(): number{
        return TodoController.self.Todos.length;
    }
}
const todo = new TodoController()
console.log(todo.createTodo({title: "my new todo", state: State.START}));
console.log(todo.createTodo({title: "record new course in Typerscript", state: State.START}));
console.log(todo.createTodo({title: "answer to my students questions", state: State.START}));
console.log(todo.createTodo({title: "answer to my students questions", state: State.DONE}));
// console.log(todo.getList());
// console.log(todo.getByID(2));
// console.log(todo.delete(2));
// console.log(todo.getByID(2));
console.log(todo.latestID = 5);
console.log(todo.latestID);
console.log(todo.myclassName);

console.log(TodoController.countOfTodos());
