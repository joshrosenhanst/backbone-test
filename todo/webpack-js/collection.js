define([
    'jquery',
    'underscore',
    'backbone',
    'todo'
], function($,_,Backbone,Todo){
    var Todos = Backbone.Collection.extend({
        model: Todo,
        localStorage: new Backbone.LocalStorage('todos-backbone')
    });

    todos = new Todos();
    return todos;
});