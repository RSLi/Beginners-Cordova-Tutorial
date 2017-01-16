#################
Environment Setup
#################

Install node.js/npm
===================

In order to install Cordova Command Line Interface (CLI) we will need use the npm package manager, which comes with the node.js distribution. Follow this link to `Install Node <https://nodejs.org/en/download/>`_.

Install Cordova CLI
===================

.. warning::
    When using npm, there might be a lot of warning messages about deprecated packages. Those warnings are for the developer of Cordova and OnsenUI, so you don't need to worry about them.

After you have installed node:

MacOSX/Linux Users:
- Open up terminal (make sure you are on the admin's account)
- Enter the following command

.. code-block:: shell

    sudo npm install -g cordova

Windows Users:
- Open up Command Prompt (Go to Start -> Search -> Enter cmd)
- Enter the following command

.. code-block:: shell

    C:\>npm install -g cordova

.. seealso::

    `The Official tutorial of Cordova <https://cordova.apache.org/docs/en/latest/guide/overview/index.html>`_.

Useful Command line
===================
- On OSX/linux shell:
    - Change Working Directory: `cd <http://linuxcommand.org/lts0020.php#cd>`_
    - List files and folders in the working directory: `ls <http://linuxcommand.org/lts0030.php#ls>`_
    - Make Directory: `mkdir <http://linuxcommand.org/lts0050.php#mkdir>`_
- And their Windows equivalents:
    - Change Working Directory: `cd(windows) <https://technet.microsoft.com/en-us/library/cc731237(v=ws.11).aspx>`_
    - List files and folders in the working directory: `dir <https://technet.microsoft.com/en-us/library/cc755121(v=ws.11).aspx>`_
    - Make Directory: `md <https://technet.microsoft.com/en-us/library/cc754711(v=ws.11).aspx>`_

.. seealso::

    Tip: If you want to navigate to the parent folder of the current working directory, use 'cd ..'

Create Root Directory
=====================
MacOSX/Linux Users:

.. code-block:: shell

    cd ~ # change working directory to the user's home directory
    cordova create my-todo-app com.example.todo MyTodo # Create the cordova project folder my-todo-app
    cd my-todo-app # change working directory to my-todo-app

Windows Users (When you open command prompt/cmd you are by default in your user folder):

.. code-block:: shell

    cordova create my-todo-app com.example.todo MyTodo # Create the cordova project folder my-todo-app
    cd my-todo-app

The code above creates a folder named my-todo-app at the home directory of the user and then changes working directory to this folder. Now we have a root directory for our project!


(Optional) For Git Users
========================
If you are already using Git for version control, consider adding the following to your .gitignore file (which should be placed in the root directory of your repo) to better support Cordova. For more information about .gitignore, see `Here <https://help.github.com/articles/ignoring-files/#create-a-local-gitignore>`_.

.. code-block:: guess

    # Cordova
    platforms
    plugins


Install Onsen UI
================
After the steps above, now we should be in your working directory called 'my-todo-app'.

.. code-block:: shell

    cd www # go to the www folder which is the root for our web app
    npm install onsenui # download onsenui package

Use your file explore/finder, search my-todo-app and see what's inside!

.. seealso::

    `Official tutorial of Onsen UI <https://onsen.io/getting-started/#npm>`_

.. _label-ide:

IDE/Text Editor
===============
If you already have an IDE or text editor that you are familiar with, then stick with that. If not, I recommend the open-source and free `Atom Text Editor <https://atom.io/>`_.

Try to open the my-todo-app/www folder in your IDE/Text Editor. If your text editor doesn't have a tree view where you can create or delete files in the working directory, I highly recommend you switch to Atom to simplify this issue, as we will need to create and delete a lot of things.

.. seealso::

    `Customize your Atom <https://scotch.io/bar-talk/best-of-atom-features-plugins-acting-like-sublime-text>`_

(Recommended) Testing
=====================
At this time you might be excited enough to test whether your app works. If you don't want to wait till the end to test your project, or if you want to test your app step by step through your development, read :ref:`Testing in Browser <label-test>`.

Delete Sample Files
===================
As you probably have already noticed, there are a couple of sample files created by cordova in the www directory.

Delete everything other than the node_modules folder (which contains the onsenui library we just downloaded).
