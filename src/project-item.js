import { TodoItem } from "./todo-item";

class ProjectItem{
    
    constructor(_projectTitle){
        this.projectTitle=_projectTitle;
        this.list=[];
    }


    addTodo=(title, desc, dueDate, prio) => {
        const item= new TodoItem(title, desc, dueDate, prio);
        this.list.push(item);
        console.log(item.getDetails());
    }
}

export { ProjectItem };