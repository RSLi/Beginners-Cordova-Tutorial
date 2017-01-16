##################
Testing in Browser
##################

.. _label-test:

Why Test in Browser?
====================
You can definitely test by entering 'cordova run', but testing the app on real device or Android emmulator might be too slow or inefficient in many occasions. And if you want to test the UI on iOS while you don't have an iOS device or environment, testing in the browser is a great alternative.

Python HTTP Server
==================
The essence of Cordova is serving the web app locally on a mobile device. In other words, Cordova acts like a server. In order to test your app in browser without being compiled by Cordova, you need to serve it with a server. If you don't have a server environment on your device already, using a temporary lightweight python HTTP server is a good choice.

If you don't have python, `download python 3 here <https://www.python.org/downloads/>`_

Now cd to the www directory

If you are using Python 2 (which by default comes with Mac OSX):

.. code-block:: shell

    python -m SimpleHTTPServer 8000

If you are using Python 3:

.. code-block:: shell

    python -m http.server

When you want to quit the server, type ctrl+c together in your command line window. Now please keep the server running.

Open your browser (for the following tools to work, please use Chrome), go to page 'http://127.0.0.1:8000/'

Ripple Emulator
===============
There's a Google Chrome extension for testing Cordova apps called `Ripple Emulator <https://chrome.google.com/webstore/detail/ripple-emulator-beta/geelfhphabnejjhdalkjhgipohgpdnoc?utm_source=chrome-ntp-icon>`_

Click the link in Chrome to install it, then go to http://127.0.0.1:8000/ when your server is running. Find the Icon for Ripple Emulator in the tool bar, click it and enable it. Now you should see your app running in the emulator window.

Right click the browser screen area and choose 'inspect', you can see a console with error messages (Note there are some errors with the emulator itself. As long as the error is not pointing to your own file then don't worry). When you encounter errors, the console might help you identify the file and line number that contains the error.
