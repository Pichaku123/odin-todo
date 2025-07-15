import { projects } from "./project-list";

//put in correct spots later
const sidebar=document.querySelector("#sidebar");
const projectMenu=document.querySelector("#project-menu");
const content=document.querySelector("#content");
const projectModal=document.querySelector("#project-modal");
const projectForm=document.querySelector("#project-form");
const projectAdd=document.querySelector("#project-add");
const projectSubmit=document.querySelector("#project-submit");
const projectCancel=document.querySelector("#project-cancel");

// const addProject= (projectList, project) => {
//     projects.createProject();
// }

const makeProjectModal= (() => {
    //only add to the sidebar itself, not each project
    projectAdd.addEventListener("click", () => {
        projectModal.showModal();
    });

    projectForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const title=document.querySelector("#project-title").value;
        if(title){      //if the form is empty, ignore.
            projects.createProject(title);
            projectMenu.textContent="";     //just resetting before loading again
            renderSidebar();
            projectForm.reset();
        }
        projectModal.close();
    })

    projectCancel.addEventListener("click", (e) => {
        e.preventDefault();
        projectForm.reset();
        projectModal.close();
    })
        
})();

const makeTodoModal= () => {
    
}

const renderSidebar= () => {
    projects.getProjects().forEach(project => {
        const title=project.projectTitle;
        const item=document.createElement("li");
        item.textContent=title;

        item.addEventListener("click", () => {
            renderContent(project);
        });
        projectMenu.appendChild(item);
    });

}

const renderContent= (project) => {
    content.innerHTML=`${project.projectTitle}`;
    console.log(project.todoList);

    renderTodos(project);

    const add=document.createElement("div");
    add.textContent="+";
    const text=document.createElement("p");
    text.textContent="Add todo- ";
    add.appendChild(text);
    content.appendChild(add);
}

const renderTodos= (project) => {

    project.todoList.forEach((todo) => {
        const card=document.createElement("div");
        card.classList.add("card");

        const flag=document.createElement("div");
        flag.classList.add("flag");
        if(todo.complete){
            flag.style.backgroundColor="green";
        }
        else{
            flag.style.backgroundColor="red";
        }

        const title=document.createElement("p");
        title.textContent= todo.title;
        title.classList.add("title");

        const dueDate=document.createElement("p");
        dueDate.textContent=todo.dueDate;
        const remove=document.createElement("button");
        dueDate.classList.add("dueDate");
        remove.classList.add("remove");

        remove.textContent="remove";
        remove.addEventListener("click", () => {
            console.log(`Removing ${title.textContent}`);
            project.removeTodo(title.textContent);
            renderContent(project);
        });

        card.appendChild(flag);
        card.appendChild(title);
        card.appendChild(dueDate);
        card.appendChild(remove);

        content.appendChild(card);
    });
};



export{renderSidebar};