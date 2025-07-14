import './styles.css';
import { projects } from './project-list';
import { renderSidebar } from './display';

const project1= projects.createProject("Project 1");
const project2= projects.createProject("Project 2");
const project3= projects.createProject("Project 3");

project1.addTodo("todo1", "something", "temp", "1", false);
project1.addTodo("todo2", "something else", "temp", "2", true);
project2.addTodo("todo1", "something", "haha", "2034", true);

projects.getProjects();

renderSidebar();

console.log("compiling finished");