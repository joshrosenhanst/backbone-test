import { Model } from 'backbone';

class Todo extends Model {
    defaults() {
        return {
            title: '',
            complete: false
        };
    }

    toggle() {
        this.save({
           completed: !this.get("completed")
        });
    }
}

export default Todo;