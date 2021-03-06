---
title: This is my fourth post.
description: This is a post on my blog.
date: 2018-07-04
tags:
- BLOG SETUP
- DYNAMIC CONTENT
- FIREBASE
layout: "layouts/post.njk"
---
This is a post showing how to store data to Firebase.

<form class="form-signin">
    <label for="inputEmail" class="sr-only">Email Address</label>
    <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
    <button class="btn btn-lg btn-primary btn-lock" type="submit" onclick="saveToFirebase()">Subscribe!</button>
</form>

<button class="btn btn-lg btn-primary btn-lock" type="submit" onclick="readFromFirebase()">List subscribers!</button>

**NOTE**: before getting something out from the above buttons,
one has to login first! Use the form below:

<!-- TODO: if I use a form instead of div, sign in fails... Why?-->
<div id="myDIV" class="form-signin">
    <label for="inputEmail" class="sr-only">My Email Address</label>
    <input type="email" id="myLoginEmail" class="form-control" placeholder="Email address" required autofocus>
    <label for="inputEmail" class="sr-only">My Password</label>
    <input type="password" id="myLoginPassword" class="form-control" placeholder="Password" required autofocus>
    <button class="btn btn-lg btn-primary btn-lock" type="submit" onclick="loginToFirebase()">My Login!</button>
</div>

<button class="btn btn-lg btn-primary btn-lock" type="submit" onclick="logoutFromFirebase()">My Logout!</button>

<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.14.5/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/7.14.5/firebase-analytics.js"></script>
<script src="https://www.gstatic.com/firebasejs/7.14.5/firebase-database.js"></script>
<script src="https://www.gstatic.com/firebasejs/7.14.5/firebase-auth.js"></script>

<script>
  // TODO: Replace with your project's config object.
  // These are not sensitive info. Safety is implemented in
  // Firebase project by using some form of authentication/protection.
  var firebaseConfig = {
    apiKey: "AIzaSyD5tM-2x3BSOLEJ2eeGlsRT6AKIX19L6Vk",
    authDomain: "eleventy-blog-tutorial.firebaseapp.com",
    databaseURL: "https://eleventy-blog-tutorial.firebaseio.com",
    projectId: "eleventy-blog-tutorial",
    storageBucket: "eleventy-blog-tutorial.appspot.com",
    messagingSenderId: "1033941683486",
    appId: "1:1033941683486:web:ae8fcb2a05be9e49194d0f",
    measurementId: "G-4CFEYJ55RJ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  // Global variable to access the database
  var database = firebase.database();
</script>

<!-- Logic using the database -->
<script src="../scripts/saveToFirebase.js"></script>
<script src="../scripts/loginToFirebase.js"></script>
