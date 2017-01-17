todoApp.controllers = {
    //bind button id to it's corresponding page
    "menuPage": function(page) {
        function bindPage(buttonId, target) {
            document.getElementById(buttonId).onclick = function() {
                var content = document.getElementById('content');
                var menu = document.getElementById('menu');
                content.load(target).then(menu.close.bind(menu));
            };
        }

        bindPage('menu-main', 'html/main.html');
        bindPage('menu-history', 'html/history.html');
    },

    "mainPage": function(page) {
        page.querySelector('#btn-splitter-toggle').onclick = function() {
            document.querySelector('#app-splitter').left.toggle();
        };

        page.querySelector('#btn-create-todo').onclick = function() {
            ons.notification.prompt({message: 'New Todo'})
                .then(function(value) {
                    todoApp.models.todo.add(value);
                    todoApp.views.mainPage(page);
                });
        };

        todoApp.views.mainPage(page);
    },

    "historyPage": function(page) {
        page.querySelector('#btn-splitter-toggle').onclick = function() {
            document.querySelector('#app-splitter').left.toggle();
        };
        todoApp.views.historyPage(page);

    },

    "createPage": function(page) {

    }

};
