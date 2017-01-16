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

<ons-navigator> is a container for the pages of the app. Each page is like a card and the <ons-navigator> is like a deck. See `ons-navigator <https://onsen.io/v2/docs/js/ons-navigator.html>`_ for the effect and detail. Note that each page can contain other pages and containers of pages to create different screens.

<ons-navigator> specifies the attribute page="body.html" so that the <ons-template> (by default hidden) with the id="body.html" will be the default page (this is not an actual html file, but just an id specifying that it is html code inside. page="..." accepts either path to actual html files or ons-template's id). The content of this <ons-template> consists of a <ons-splitter> which has a splitter menu on the left that can switch pages within the content block. See `ons-splitter <https://onsen.io/v2/docs/js/ons-splitter.html>`_ for the effect and detail usage.

As the <ons-splitter-content> has specified, the default page within the splitter will be main.html, which we will use to display the to-do list itself.

To sum up, the conceptual hierarchy of the tags/views is as follows: ::

    Window (exist by default, corresponding to the browser window or App window)
        -> navigator (only one, everything we make is in it)
            -> page: body.html
                -> splitter
                    -> splitter-menu
                        -> page: menu.html
                    -> splitter-content
                        -> page: main.html
                        -> page: history.html
            -> page: create.html

Pages
=====
In the conceptual view hierarchy above, we notice that there are 5 "pages". Excluding body.html which is a "page" used to contain other "pages", we have 4 "pages" at the lowest level of the hierarchy. These 4 low-level pages need to be defined in <one-page></ons-page> tags, and we put them respectively in 4 different html files for the sake of readability (it's possible to put everything in one html file but it's hard to read and can cause tremendous confusion)

Each ons-page has an id attribute, these are important 'page.id' that will be used in our JavaScript code. Here, we name them with camelCase, as in the following code snippets:

main.html

.. code-block:: html
    :linenos:

    <ons-page id="mainPage">
    </ons-page>

menu.html

.. code-block:: html
    :linenos:

    <ons-page id="menuPage">
    </ons-page>

history.html

.. code-block:: html
    :linenos:

    <ons-page id="historyPage">
    </ons-page>

create.html

.. code-block:: html
    :linenos:

    <ons-page id="createPage">
    </ons-page>


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

ons.ready() is the entrance of our entire app. It adds an listener to the 'init' event which will be triggered at the start of the app as well as every page change detected by ons-navigator and ons-splitter. It gets the name of the page that is being triggered and calls the page's respective controller, which we will write in the html/controllers.js file.

controllers.js
==============

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

To understand this file, we need to introduce `JSON (Javascript Object Notation) <http://www.w3schools.com/js/js_json_intro.asp>`_ . Essentially, a JSON/JavaScript object consists of key-value pairs such as {"name":"John Doe", "age":"18"}. The key (as in "name", "age") must be a string. The value here can be any data type, including number, string, function or even another JSON/object.

This file contains only one statement in the global scope, which is declaring a "key" for the object todoApp called "controllers" (its value can be accessed as todoApp.controllers), and then assigning an object to the attribute. The object assigned to controllers consists of 4 keys corresponding to the respective page.id in our 4 <ons-page>. Those 4 keys are respectively paired with a function that we will define later.

And as mentioned in app.js, whenever there's a page change, the corresponding controller function of the new page being displayed will be triggered. We will use these functions to help us define the functionalities of our buttons.

view.js
=======

.. code-block:: js
    :linenos:

    todoApp.views = {
        "menuPage": function(page) {

        },

        "mainPage": function(page) {

        },

        "historyPage": function(page) {

        },

        "createPage": function(page) {

        }

    };

Similar to controllers, but renders or refreshes the view of the page everytime you call the corresponding view function.

model.js
========

.. code-block:: js
    :linenos:

    todoApp.models = {
        "data": {
            "todolist": [{"task": "Sample Task 1", "done": false}, {"task": "Sample Task 2", "done": false}];
        },

        "todo": {

            "get": function(id) {

            },

            "add": function(id) {

            },

            "end": function(id) {

            }
        }
    }

Models are all about data and storage. We will talk about this in detail later.
