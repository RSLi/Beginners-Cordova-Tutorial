#######################
Designing the Structure
#######################

Directory Structure
===================
Again, make sure you know how to create files and folders with you text editor/IDE, if not, see :ref:`IDE/Text Editors <label-ide>`.

Now we have the following directory structure ::

    www/
        node_modules/
            ...

Let's create some folders and blank files so that it becomes ::

    www/
        node_modules/
            ...
        html/
            main.html
            menu.html
            create.html
            history.html
        js/
            app.js
            controllers.js
            models.js
            views.js
        index.html

index.html
==========
index.html is the standard place where a web app starts. By default, one html file is a web page, but hybrid apps are mostly `Single-Page Applicaitons (SPA) <https://en.wikipedia.org/wiki/Single-page_application>`_, so what we will do is to link content of other html files into this index.html to be displayed when needed. Simply put, index.html is the hub of all other files in this web app.

Here's the code for index.html:

.. code-block:: html
    :linenos:

    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <title>My Todo List</title>
    <script src="node_modules/onsenui/js/onsenui.js"></script>
    <script src="node_modules/moment/moment.js"></script>
    <script src="js/app.js"></script>
    <script src="js/controllers.js"></script>
    <script src="js/models.js"></script>
    <script src="js/views.js"></script>
    <link rel="stylesheet" href="node_modules/onsenui/css/onsenui.css">
    <link rel="stylesheet" href="node_modules/onsenui/css/onsen-css-components.css">
    </head>

    <body>
    <ons-navigator id="app-navigator" page="body.html"></ons-navigator>
    <ons-template id="body.html">
        <ons-splitter id="app-splitter">
            <ons-splitter-side id="menu" page="html/menu.html" swipeable width="240px" collapse swipe-target-width="50px">
            </ons-splitter-side>
            <ons-splitter-content id="content" page="html/main.html">
            </ons-splitter-content>
        </ons-splitter>
    </ons-template>
    </body>
    </html>

The html file consists of **tags** enclosed in <></>, including <head></head> and <body></body> sections, where the <head> contains links to other files while the <body> contains the actual content of the page.

Each pair of tags represents a **DOM Object** (Document Object Model), and has **attributes** such as id, page, href etc.

In the <head></head> section we have used various tags to link all the files that we'll need for this app.

<ons-navigator> is a container for the screens of the app. Each screen is like a card and the <ons-navigator> is like a deck. See `ons-navigator <https://onsen.io/v2/docs/js/ons-navigator.html>`_ for the effect and detail

<ons-navigator> specifies the attribute page="body.html" so that the <ons-template> (by default hidden) with the id="body.html" will be the default screen. The content of this <ons-template> consists of a <ons-splitter> which has a splitter menu on the left that can switch pages within the content block. See `ons-splitter <https://onsen.io/v2/docs/js/ons-splitter.html>`_ for the effect and detail usage.

As the <ons-splitter-content> has specified, the default page within the splitter will be main.html, which we will use to display the to-do list itself.

app.js
======
.. code-block:: js
    :linenos:

    window.todoApp = {};

    ons.ready(function() {
        document.addEventListener('init', function(event) {
            var page = event.target; // target of the init event is a page
            todoApp.controllers[page.id](page); // name all controllers with their respective page id
        });
    });

This is the starting point of all our javascript. The window scope helps initialize a global variable that will be available for storing and retrieving all app data. window.todoApp = {} defines this empty object and everything else in our app should exist as member objects or functions of this todoApp object.

ons.ready() is the entrance of our entire app. It adds an listener to the 'init' event which will be triggered at the start of the app as well as every page change detected by ons-navigator and ons-splitter. It gets the name of the page that is being triggered and calls the page's respective controller, which we will write in the html/controllers.html file.

controllers.html
================

.. code-block:: js
    :linenos:

    todoApp.controllers = {
        "menuPage": function(page) {

        },

        "mainPage": function(page) {

        },

        "historyPage": function(page) {

        },

        "createPage": function(page) {

        }

    };
