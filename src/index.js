import './styles.css';
import { projects } from './project-list';
import { renderSidebar, renderContent } from './display';

const project1= projects.createProject("Project 1");


renderSidebar();
const allProjects= projects.getProjects();
if(allProjects.length>0){
    renderContent(allProjects[0]);
}

console.log("compiling finished");