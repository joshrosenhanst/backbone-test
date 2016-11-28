define([
    'jquery',
    'underscore',
    'backbone'
], function($,_,Backbone){
    var TodoView = Backbone.View.extend({
        tagName:'li',
        template: _.template($("#item-template").html()),
        events: {
            'click .destroy': 'clear',
            'click .toggle': 'toggleCompleted'
        },
        initialize: function(){
            this.$list_todo =   $("#todo-list");
            this.$list_complete =   $("#complete-list");

            this.listenTo(this.model, 'destroy', this.remove);
            this.listenTo(this.model, 'change', this.updateTodo);
        },
        render: function(){
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },
        updateTodo: function(){
            if(this.model.get("completed")){
                this.$list_complete.append(this.$el);
            }else{
                this.$list_todo.append(this.$el);
            }
        },
        toggleCompleted: function(){
            this.model.toggle();
        },
        clear: function(){
            this.model.destroy();
        }
    });

    return TodoView;
});