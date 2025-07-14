import { projects } from "./project-list";

const sidebar=document.querySelector("#sidebar");
const projectMenu=document.querySelector("#project-menu");

const renderSidebar= () => {
    projects.getProjects().forEach(project => {
        const title=project.projectTitle;
        const item=document.createElement("li");
        item.textContent=title;
        projectMenu.appendChild(item);
    });
};


export{renderSidebar};