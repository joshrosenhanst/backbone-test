var app = app || {};

(function () {
    var Todos = Backbone.Collection.extend({
        model: app.Todo,
        localStorage: new Backbone.LocalStorage('todos-backbone')
    });

    app.todos = new Todos();
})();