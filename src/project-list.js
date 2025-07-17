import { ProjectItem } from "./project-item";
//gonna show this on sidebar

const projects= (() => {    //used factory function+IIFe cuz we only need 1 instance of projectlist.
    let projectList=[];
    
    const saveToLocal= () => {
        localStorage.setItem("todos", JSON.stringify(projectList));
    }

    const getFromLocal= () =>{
        const storedData=localStorage.getItem("todos");
        if(!storedData) return;     //in case no data is stored
        const data=JSON.parse(storedData);
        const newProjectList=[];    //store new data here, then replace old one with this one
        //data is basically the projectList here.
        //data has several projects which each have several todos.
        //basically add the stuff we have in localstorage into projectlist when we open site.
        //btw data will be a array of objects so yeah normal array methods work
        for(let project of data)    //again, for/of cuz array of objects
        {
            const newProject= new ProjectItem(project.projectTitle);    //each project is instance of ProjectItem.
            //oh also i gotta write code for the methods again cuz they're gone lol, JSON doesn't store methods soooo gg.
            //so we gotta set the properties by ourselves as well lmaooo
            for(let todos of project.todoList)
            {
                //for each "todo(not actual todo, but just the data)", we need to make an actual object in new array.
                //we just have the strings, but the actual newProject has no data on it, so we need to set it manually.
                newProject.addTodo(
                    todos.title,
                    todos.desc,
                    todos.dueDate,
                    todos.prio,
                    todos.complete,
                ) 
            }
            newProjectList.push(newProject);
            //keep pushing to this, and fill it with previous projects from storage.
        }
        //now that list is done, set project list to this one.
        projectList=newProjectList;
    }

    const createProject = (title) => {
        const project= new ProjectItem(title);
        projectList.push(project);
        saveToLocal();  //save after any changes are made to projectlist basically
        return project;
    }

    const getProjects = () => {
        console.log(projectList);
        return projectList;
    }

    const removeProject = (title) => {
        const position = projectList.findIndex((project) => {
            return project.projectTitle===title;
        })
        projectList.splice(position, 1);
        saveToLocal();      //same logic as in createproject.
    }

    return {getProjects, createProject, removeProject, saveToLocal, getFromLocal};
})();


export {projects};