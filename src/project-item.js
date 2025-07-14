import { TodoItem } from "./todo-item";

class ProjectItem{
    
    constructor(_projectTitle){
        this.projectTitle=_projectTitle;
        this.todoList=[];
    }


    addTodo=(title, desc, dueDate, prio, complete) => {
        const item= new TodoItem(title, desc, dueDate, prio, complete);
        this.todoList.push(item);
        console.log(item.getDetails());
    }

    removeTodo(title){
        const position= this.todoList.findIndex((todo) => {
            return todo.title === title;
        })
        this.todoList.splice(position, 1);
    }

    getTodo = () => {
        console.log(this.todoList);
    }

}

export { ProjectItem };