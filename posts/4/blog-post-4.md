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

<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.14.5/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/7.14.5/firebase-analytics.js"></script>
<script src="https://www.gstatic.com/firebasejs/7.14.5/firebase-database.js"></script>
<script src="https://www.gstatic.com/firebasejs/7.14.5/firebase-auth.js"></script>

<script>
  // TODO: Replace with your project's config object
  var firebaseConfig = {
    apiKey: "apiKey",
    authDomain: "authDomain",
    databaseURL: "databaseURL",
    projectId: "projectId",
    storageBucket: "storageBucket",
    messagingSenderId: "messagingSenderId",
    appId: "appId",
    measurementId: "measurementId"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  // Global variable to access the database
  var database = firebase.database();
</script>

<!-- Logic using the database 
     TODO:
     - use authentication -->
<script src="../scripts/saveToFirebase.js"></script>