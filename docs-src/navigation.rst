##########
Navigation
##########

toolbar
=======
Each page of the app has a toolbar showing a title and a menu button where you can open the splitter menu on the left.

Here's the sample of toolbar in **main.html**.

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
    </ons-page>

<ons-toolbar> should be an immediate child of <ons-page> and is placed before everything else.

Within the toolbar, three <div> elements with class attribute specifies their position in the toolbar. In the "left" section there's <ons-toolbar-button> that shows an icon for the menu. In the center section there's the title for the page.

.. note::

    If you want to change the icon ion-navicon(on iOS) or md-menu(on Android) to something else, you can search on `ionicons (iOS) <http://ionicons.com/>`_ or `Material Design Iconic Font (Android) <https://zavoloklom.github.io/material-design-iconic-font/cheatsheet.html>`_ , both icon sets are included within onsenui by default.


**history.html** is another page that can be accessed from the splitter menu, thus it is quite similar.

.. code-block:: html
    :linenos:

    <ons-page id="historyPage">
        <ons-toolbar>
            <div class="left">
                <ons-toolbar-button id="btn-splitter-toggle">
                    <ons-icon icon="ion-navicon, material:md-menu" size="32px, material:24px"></ons-icon>
                </ons-toolbar-button>
            </div>
            <div class="center">History</div>
            <div class="right"></div>
        </ons-toolbar>
    </ons-page>


**menu.html**

.. code-block:: html
    :linenos:

    <ons-page id="menuPage">
        <ons-list id="menu-option-list">
        <ons-list-header>Menu</ons-list-header>
        <ons-list-item id="menu-main" tappable>
            <div class="left">
                <ons-icon icon="md-home"></ons-icon>
            </div>
            <div class="center">Home</div>
        </ons-list-item>
        <ons-list-item id="menu-history" tappable>
            <div class="left">
                <ons-icon icon="md-timer"></ons-icon>
            </div>
            <div class="center">History</div>
        </ons-list-item>
      </ons-list>
    </ons-page>


Within the menu we also place two buttons, targeting to the main page and the history page.


Menu Button
===========
Right now, you can swipe right to open the menu, but the menu button on the tool bar doesn't work, because nothing has specified its functionality. Let's try adding something to the controller to make it work.

controllers.js

.. code-block:: js
    :linenos:

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
        },

        "historyPage": function(page) {
            page.querySelector('#btn-splitter-toggle').onclick = function() {
                document.querySelector('#app-splitter').left.toggle();
            };
        },

        "createPage": function(page) {

        }

    };

Button functionalities are specified in the controllers. In this step we select #btn-splitter-toggle (# means id) and add an onclick listener function to it in both mainPage and createPage (the button is defined in html above). Now, whenever the button is pressed, the code within the function will be processed and toggle the splitter menu.

We also add code in menuPage's controller function which binds onclick listeners to its respective buttons within the menu. They will change the page shown in the splitter accordingly.

Now pressing the menu button will open the menu, and pressing buttons within the menu we can switch pages!

Challenge 1: Creating About Page
================================
Try to use the method you have learned so far to make an about.html page on your own.
