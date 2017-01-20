######
Models
######

What's Model
============

.. note::

    Model is a concept used widely in the renowned `Model-View-Controller (MVC) design pattern <https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller>`_ , you don't need to understand it fully in this tutorial, but knowing the concept can be helpful.

models.js is where we care about storing our to-do's in the memory and providing a method to read from the memory. In this example we'll store our data in a JSON object that can be accessed at todoApp.models.data. This data object should contain an array where we can store our todo information. We'll also provide methods to get/create/update each todo items (which is also denoted by JSON).

models.js implementation
========================

.. code-block:: js
    :linenos:

    todoApp.models = {
        "data": {
            "todolist": [{"task": "Sample Task 1", "done": false}, {"task": "Sample Task 2", "done": false}];
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

With the code above, we can store a new todo task by calling something like todoApp.models.todo.add("Do homework"); And "Do homework" will be stored at the end of the todolist. In the next section we'll talk about how to actually display the list.

Challenge 2: Enable Long-term Storage
=====================================
This is a hard challenge that you can come back to work on after you've finished the tutorial. Currently, when you add your todo tasks, they will only be available in the RAM. And when the app is closed, the data will be reset. If you want to store the data in the long term, you will need to learn about `Cordova Storage <https://cordova.apache.org/docs/en/latest/cordova/storage/storage.html>`_. 
