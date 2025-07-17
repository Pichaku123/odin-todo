import './styles.css';
import { projects } from './project-list';
import { renderSidebar, renderContent } from './display';

projects.getFromLocal();    //load from localstorage before rendering sidebar so that projectlist is updated with whatever we had.

let allProjects= projects.getProjects();
if(allProjects.length === 0){   //had to change cuz we're already getting some stuff from localstorage
    projects.createProject("Project 1", projects.saveToLocal);    //basically project 1 is only made if there's nothing in localstorage.
    allProjects=projects.getProjects();
}

renderSidebar();        //duh
renderContent(allProjects[0]);

console.log("compiling finished tehehe");