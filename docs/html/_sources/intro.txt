####################
Project Introduction
####################

Welcome
=======

Welcome to the Beginners' Mobile Web App Development Tutorial. In this tutorial we will introduce basic front-end technology, the Apache Cordova Mobile development framework, the Onsen-UI framework and how to build our first TODO LIST app from scratch! No experience needed!

Since this tutorial is designed for beginners who have none or limited knowledge about web development, some explanations are simplified to minimize frustration but might not be best practice for experienced developers. We will also provide resources at the end of the tutorial for further exploration.

Knowing HTML, CSS or Javascript will help you better understand the tutorial, but is not required.

Before we start, let's answer some questions and introduce some concepts.

What is Web Development?
========================

I assume you are currently reading this document in a **web browser**, and have definitely visited many **websites** and **web pages** throughout your life. Sometimes you don't even realize that you are using web technology. For example, facebook uses **Webview** (An embedded browser) to display contents within their mobile apps. Developing websites and web applicaitons involving these technologies is web development.

What is Web App?
================

A **Web App** is an application (not necessarily mobile) that is based on web technology, usually accessible in a **web browser** or **Webview** (on your smartphone). Different from native apps targeting a specific Operating System (OSX, iOS, Android, Windows etc.), web apps can be accessed from nearly every platform, without rewriting any code.

What is Mobile Web App/Hybrid App?
==================================

**Mobile Web App** or **Hybrid Apps** are mobile apps developed as a web app but wrapped by a special container to be distributed on a mobile device. Note that a Mobile Web App can run just as native apps for iOS or Android and does not necessarily require access to internet (as the container serves the web app on the device itself). With the help of the container, the web app can also gain native permissions on the device such as GPS, openning the camera and reading from the contact.

Developers of hybrid apps don't need to worry about different operating systems or platforms. They only need to write code once, and the app can be distributed over all major platforms. That is why Hybrid Apps are becomming an increasingly popular option for mobile app development.

What is Cordova?
================
`Apache Cordova <https://cordova.apache.org/>`_ is a Mobile Development Framework that serves as the container mentioned above. It is a free and open source project and is the most widely used framework for making hybrid apps. We will use Cordova in the rest of the tutorial to compile our app (that can eventually be distributed via AppStore and Google Play)!

What is HTML?
=============
According to Wikipedia, HyperText Markup Language (HTML) is the standard markup language for creating web pages and web applications. Web browsers are the ones who render HTML and provide us the nice view we enjoy.

What is CSS?
============
According to Wikipedia, Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language. HTML alone does not specify the layout, color, background and all these decorative features of the web page. It is CSS that made the User Interface (UI) of web apps useful. We will use really few CSS in this tutorial, but it will definitely help you improve the UI for your own app.

What is JavaScript?
===================
HTML and CSS alone constitutes static pages. If you want to make a button that has some functionality when clicked, or store data on your device to be retrieved later on, you will need the help of JavaScript (Js), the scripting language for web. Js is a very versatile language and has many frameworks built upon it. We will not introduce specific Js frameworks such as React, Angular or JQuery. We will use easy plain Javascript throughout this tutorial.

What is Onsen UI?
=================
`Onsen UI <https://onsen.io/>`_ is a popular Mobile Development Framework built upon Cordova, which offers us CSS and Js files that will provide common mobile app components out of the box.

What is front-end and back-end?
===============================
All the concepts above, including HTML, CSS and JS are all part of the front-end development, whose final product can be directy seen and felt by the user. Back-end deals with database and some business logic within the application that the users will not see. In this tutorial we will only care about the frontend and handle all business logic within frontend.
