import _ from 'underscore';
import { Collection } from 'backbone';
import Store from 'backbone.localstorage';
import Todo from 'todo';

class TodosCollection extends Collection{
    constructor(models, options) {
        this.model = Todo;
        this.localStorage = new Store('todos-backbone');

        super(models,options);
    }
}

export default new TodosCollection();