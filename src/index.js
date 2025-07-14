import './styles.css';
import { ProjectItem } from './project-item';

const name="myproj";
const title="mytitle";
const desc="temp desc";
const dueDate="2";
const prio="low";

const project1=new ProjectItem("Project 1");
project1.addTodo(title, desc, dueDate, prio);

new ProjectItem("Project 2").addTodo("title 2", "desc 2", "20", "high");


console.log("compiling finished");