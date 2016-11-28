module.exports = {
    entry: [
        './node_modules/jquery/dist/jquery.js',
        './node_modules/underscore/underscore.js',
        './node_modules/backbone/backbone.js',
        './node_modules/backbone.localstorage/backbone.localStorage.js',
        './webpack-js/todo.js',
        './webpack-js/todos.js',
        './webpack-js/todo-view.js',
        './webpack-js/app-view.js',
        './webpack-js/app.js'
    ],
    output: {
        filename: 'bundle.js',
        path: './webpack-js'
    }
};