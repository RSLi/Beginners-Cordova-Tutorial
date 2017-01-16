#####
Views
#####

Show Todo List
==============
Everytime we call the controller, we should end with a call to the view function to complete rendering the view. For mainPage it means todoApp.views.mainPage(page);

Let's first create a container for the todo items: <ons-list>

main.html

.. code-block:: html
    :linenos:

    <ons-page id="mainPage">
        <ons-toolbar>
            <div class="left">
                <ons-toolbar-button id="btn-splitter-toggle">
                    <ons-icon icon="ion-navicon, material:md-menu" size="32px, material:24px"></ons-icon>
                </ons-toolbar-button>
            </div>
            <div class="center">TODO</div>
            <div class="right"></div>
        </ons-toolbar>

        <ons-list id="field-todo-list">

        </ons-list>

    </ons-page>

Since history.html should also display a list of todos (but completed ones), we can do the exactly same thing above.

views.js

.. code-block:: js
    :linenos:

    "mainPage": function(page) {
        var list = todoApp.models.data.todolist;// a list of todo objects
        var listview = document.querySelector('#field-todo-list');
        listview.innerHTML = ""; // clear all leftover html before appending rendered todos
        var num = 0;
        //loop: create html items for each todo object in the array
        for (i = 0; i < list.length; i++) {
            if (!list[i].done) {
                listview.innerHTML = listview.innerHTML + '<ons-list-item tappable id="todo-item-' + i + '">' +
                  '<div class="left endtask" id="'+ i +'">' +
                    '<ons-icon icon="md-check"></ons-icon>' +
                  '</div>' + '<div class="center">' + list[i].task + '</div>'
                '</ons-list-item>';
                num++;
            }
        }

        for (i = 0; i < num; i++) {
            page.querySelectorAll('.endtask')[i].addEventListener('click', function(event) {
                var id = event.currentTarget.id;
                todoApp.models.todo.end(id);
                todoApp.views.mainPage(page);
            });
        }

    },

Similarly, this also applies to the history page, but without the 'endtask' button. The complete controller is shown in the controllers section.

Floating Action Button
======================

Create a floating action button (fab) so that we can add new task items to the todolist. Add the following to main.html

.. code-block:: html
    :linenos:

    <ons-fab position="right bottom" id="btn-create-todo">
        <ons-icon icon="md-plus"></ons-icon>
    </ons-fab>

Again, we add the functionality of the button in the controller:

.. code-block:: js
    :linenos:

    page.querySelector('#btn-create-todo').onclick = function() {
            ons.notification.prompt({message: 'New Todo'})
                .then(function(value) {
                    todoApp.models.todo.add(value);
                    todoApp.views.mainPage(page);
                });
        };

This will prompt the user to enter a new task with a notification box.


Challenge 2: Seperate Page for Creating Task
============================================
You probably remember that we've created a create.html page. Try to implement this page to replace ons.notification.prompt that we've used in the above example. You will probably need to look up `ons-navigator <https://onsen.io/v2/docs/js/ons-navigator.html>`_.
