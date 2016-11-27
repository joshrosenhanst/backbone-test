var app = app || {};

(function ($) {
    //Application

    app.AppView = Backbone.View.extend({
        el:'#todoMain',
        events: {
            'keypress #new-todo': 'createItem'
        },
        initialize: function(){
            this.$new_todo =    this.$("#new-todo");
            this.$main =        this.$("#todoMain");
            this.$section =     this.$("#todoSection");
            this.$list_todo =   this.$("#todo-list");
            this.$list_complete =   this.$("#complete-list");

            this.listenTo(app.todos, 'add', this.addItem);
            this.listenTo(app.todos, 'reset', this.addAllItems);

            app.todos.fetch({reset: true});
        },
        render: function(){
            if (this.model.changed.id !== undefined) {
                return;
            }

            if(app.todos.length){
                this.$section.show();
            }else{
                this.$section.hide();
            }
        },
        addItem: function(todo){
            var view = new app.TodoView({ model: todo });
            if(todo.get("completed")){
                this.$list_complete.append(view.render().el);
            }else{
                this.$list_todo.append(view.render().el);
            }
        },
        addAllItems: function(){
            this.$list_todo.html("");
            this.$list_complete.html("");
            app.todos.each(this.addItem,this);
        },
        newAttributes: function(){
            return {
                title: this.$new_todo.val().trim(),
                completed: false
            }
        },
        createItem: function(e){
            if (e.which === ENTER_KEY && this.$new_todo.val().trim()) {
                app.todos.create(this.newAttributes());
                this.$new_todo.val("");
            }
        }
    });
})(jQuery);