import { TodoItem } from "./todo-item";

class ProjectItem{  
    
    constructor(_projectTitle, _saveToLocal){
        this.projectTitle=_projectTitle;
        this.todoList=[];
        this.saveToLocal= _saveToLocal;     //just so that the todos are saved as well, varna only proj were being saved :/
    }


    addTodo=(title, desc, dueDate, prio, complete) => {
        const item= new TodoItem(title, desc, dueDate, prio, complete);
        this.todoList.push(item);
        this.saveToLocal();     //projectlist in scope cuz 
    }

    removeTodo(title){
        const position= this.todoList.findIndex((todo) => {
            return todo.title === title;
        })
        this.todoList.splice(position, 1);
        this.saveToLocal();
    }

    getTodo = () => {
        console.log(this.todoList);
    }

}

export { ProjectItem };