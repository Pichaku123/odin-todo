class TodoItem{

    constructor(_title, _desc, _dueDate, _prio){
        this.title=_title;
        this.desc=_desc;
        this.dueDate=_dueDate;
        this.prio=_prio;
    }

    getDetails = () => {
        return `${this.title}, ${this.desc}, ${this.dueDate}, ${this.prio}`;
    }

}

export { TodoItem };