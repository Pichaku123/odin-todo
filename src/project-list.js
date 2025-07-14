import { ProjectItem } from "./project-item";
//gonna show this on sidebar


// const tempTitle="temporary";

// class Projects{
//     constructor(){
//         this.projectList=[];
//     }

//     createProject = (title) => {
//         const project= new ProjectItem(title);
//         this.projectList.push(project);
//         this.getProjects();
//     }

//     getProjects = () => {
//         console.log(this.projectList);
//     }

// }

const projects= (() => {
    let projectList=[];
    
    const createProject = (title) => {
        const project= new ProjectItem(title);
        projectList.push(project);
        getProjects();
        return project;
    }

    const getProjects = () => {
        console.log(projectList);
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