import './styles.css';
import { projects } from './project-list';

const name="myproj";
const title="mytitle";
const desc="temp desc";
const dueDate="2";
const prio="low";
const complete=true;

const project1= projects.createProject("Project 1");
const project2= projects.createProject("Project 2");

project1.addTodo("todo1", "something", "temp", "1", false);
project1.addTodo("todo2", "something else", "temp", "2", true);

project2.addTodo("todo1", "something", "haha", "2034", true);

projects.getProjects();

// const project1=new ProjectItem("Project 1");
// project1.addTodo(title, desc, dueDate, prio, complete);
// project1.addTodo("1.1", "smth", "002", "mid", false);

// const project2= new ProjectItem("Project 2");
// project2.addTodo("title 2", "desc 2", "20", "high", false);

// const project3= new ProjectItem("Project 3");
// project3.addTodo("title3", "smth", "2222", "mid", false);

// project1.removeTodo("1.1");

// project1.getTodo();

console.log("compiling finished");