class TodoItem{

    constructor(_title, _desc, _dueDate, _prio, _complete){
        this.title=_title;
        this.desc=_desc;
        this.dueDate=_dueDate;
        this.prio=_prio;
        this.complete=_complete
    }

    getDetails = () => {
        return `${this.title}, ${this.desc}, ${this.dueDate}, ${this.prio}, ${this.complete}`;
    }

    toggleStatus = () => {
        this.complete=!this.complete;
    }

}

export { TodoItem };