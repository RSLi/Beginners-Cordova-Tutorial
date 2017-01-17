todoApp.models = {
    "data": {
        "todolist": [{"task": "Sample Task 1", "done": false}, {"task": "Sample Task 2", "done": false}]
    },

    "todo": {

        "get": function(id) {
            return todoApp.models.data.todolist[id];
        },

        "add": function(task) {
            todoApp.models.data.todolist.push({"task": task, "done": false});
        },

        "end": function(id) {
            todoApp.models.data.todolist[id].done = true;
        }
    }
}
