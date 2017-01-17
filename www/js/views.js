todoApp.views = {
    "menuPage": function(page) {

    },

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

    "historyPage": function(page) {
        var list = todoApp.models.data.todolist;// a list of todo objects
        var listview = document.querySelector('#field-todo-list');
        listview.innerHTML = ""; // clear all leftover html before appending rendered todos
        //loop: create html items for each todo object in the array
        for (i = 0; i < list.length; i++) {
            if (list[i].done) {
                listview.innerHTML = listview.innerHTML + '<ons-list-item tappable id="todo-item-' + i + '">' +
                  '<div class="left" id="'+ i +'">' +
                  '</div>' + '<div class="center">' + list[i].task + '</div>'
                '</ons-list-item>';
            }
        }
    },

    "createPage": function(page) {

    }

};
