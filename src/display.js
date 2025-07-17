import { projects } from "./project-list";
import { format, parseISO } from 'date-fns';

//put in correct spots later
const sidebar=document.querySelector("#sidebar");
const projectMenu=document.querySelector("#project-menu");
const content=document.querySelector("#content");
const projectModal=document.querySelector("#project-modal");
const projectForm=document.querySelector("#project-form");
const projectAdd=document.querySelector("#project-add");
const projectSubmit=document.querySelector("#project-submit");
const projectCancel=document.querySelector("#project-cancel");
const todoModal=document.querySelector("#todo-modal");  //moved to top cuz scope
const currentProjTitle="";

let currentProject=null;

const makeProjectModal= (() => {
    //only add to the sidebar itself, not each project
    projectAdd.addEventListener("click", () => {
        projectModal.showModal();
    });

    projectForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const title=document.querySelector("#project-title").value;
        if(title){      //if the form is empty, ignore.
            const newProject= projects.createProject(title);
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

const makeTodoModal= (() => {
    
    const todoForm=document.querySelector("#todo-form");
    const todoCancel=document.querySelector("#todo-cancel");

    todoForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const title=document.querySelector("#todo-title").value;
        const dueDate=document.querySelector("#todo-duedate").value;
        const prio=document.querySelector("#prio-select").value;
        const desc=document.querySelector("#todo-desc").value;
        if(title && dueDate && prio){   //desc not required
            currentProject.addTodo(title, desc, dueDate, prio, false);
            renderContent(currentProject);
            todoForm.reset();
        }
        todoModal.close();
    });

    todoCancel.addEventListener("click", (e) => {
        e.preventDefault();
        todoForm.reset();
        todoModal.close();
    })

})();

const renderSidebar= () => {
    projectMenu.textContent="";
    projects.getProjects().forEach(project => {
        const title=project.projectTitle;
        const item=document.createElement("li");
        const name=document.createElement("p");
        name.textContent=title;

        const remove=document.createElement("div");
        remove.setAttribute("id", "project-remove");
        remove.textContent="X";

        item.appendChild(name);
        item.appendChild(remove);
        item.classList.add("project-row");

        name.addEventListener("click", () => {
            renderContent(project);
        });

        remove.addEventListener("click", () => {
            projects.removeProject(title);
            renderSidebar(projects);
        });

        projectMenu.appendChild(item);
    });

}

const renderContent= (project) => {
    currentProject=project;
    console.log(project.todoList);

    renderTodos(project);

    const add=document.createElement("div");
    add.textContent="+ Add todo";
    add.setAttribute("id", "todo-add");
    content.appendChild(add);

    //had to shift this eventlistener here instead of maketodomodal
    //cuz we haven't made the modal yet, so todo-add doesnt exist.
    add.addEventListener("click", () => {
        todoModal.showModal();
    });
}

const renderTodos= (project) => {
    content.innerHTML=`<div id="current-project">${project.projectTitle}</div>`;

    project.todoList.forEach((todo) => {
        const todoCard=document.createElement("div");
        todoCard.classList.add("todo-card");
        const card=document.createElement("div");
        card.classList.add("card");

        const flag=document.createElement("div");
        flag.classList.add("flag");
        if(todo.complete){
            flag.style.backgroundColor="#10b981";
        }
        else{
            flag.style.backgroundColor="#ef4444";
        }

        const title=document.createElement("h1");
        title.textContent= todo.title;
        title.classList.add("title");

        const dueDate=document.createElement("h3");
        dueDate.textContent=format(parseISO(todo.dueDate), "do MMM yyyy");
        dueDate.classList.add("dueDate");

        const details=document.createElement("button");
        details.setAttribute("id", "details");
        details.textContent="Details...";
        let detailsShown=false;

        const desc=document.createElement("p");   //moved it outside cuz we only wanna edit contents of this

        details.addEventListener("click", () => {
            desc.innerHTML=`<p>Due- ${dueDate.textContent}</p>
            <p>Priority- ${todo.prio}</p>
            <p>Description- ${todo.desc}</p>
            `;
            desc.style.display="none";
            desc.classList.add("todo-desc");

            detailsShown=!detailsShown;
            desc.style.display=(detailsShown) ? "block" : "none";

            todoCard.appendChild(desc);
        });

        const remove=document.createElement("button");
        remove.setAttribute("id", "remove");
        remove.textContent="X";
        remove.addEventListener("click", () => {
            console.log(`Removing ${title.textContent}`);
            project.removeTodo(title.textContent);
            renderContent(project);
        });

        const cardLeft=document.createElement("div");
        const cardRight=document.createElement("div");
        cardLeft.classList.add("card-left");
        cardRight.classList.add("card-right");

        cardLeft.appendChild(flag);
        cardLeft.appendChild(title);
        cardLeft.appendChild(dueDate);

        cardRight.appendChild(details);
        cardRight.appendChild(remove);

        card.appendChild(cardLeft);
        card.appendChild(cardRight);

        todoCard.appendChild(card);

        content.appendChild(todoCard);
    });
};



export{renderSidebar, renderContent};