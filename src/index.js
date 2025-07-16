import './styles.css';
import { projects } from './project-list';
import { renderSidebar } from './display';

const project1= projects.createProject("Project 1");
const project2= projects.createProject("Project 2");
const project3= projects.createProject("Project 3");

project1.addTodo("todo1", "something", "2025-07-20", "Low", false);
project1.addTodo("todo2", "something else", "2025-11-22", "Mid", true);
project2.addTodo("todo1", "something", "2034-01-11", "High", true);

projects.getProjects();

renderSidebar();

console.log("compiling finished");