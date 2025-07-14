import { ProjectItem } from "./project-item";
//gonna show this on sidebar

const projects= (() => {    //used factory function+IIFe cuz we only need 1 instance of projectlist.
    let projectList=[];
    
    const createProject = (title) => {
        const project= new ProjectItem(title);
        projectList.push(project);
        return project;
    }

    const getProjects = () => {
        console.log(projectList);
        return projectList;
    }

    const removeProject = (title) => {
        const position = projectList.findIndex((project) => {
            return project.title===title;
        })
        projectList.splice(position, 1);
    }

    return {getProjects, createProject, removeProject};
})();


export {projects};