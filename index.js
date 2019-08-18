// index.js
function createPost() {
    var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
    var postTemplate = _.template(document.getElementById("post-template").innerHTML);
    var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);

    var postTitle = document.getElementById("postTitle").value;
    var postBody = document.getElementById("postBody").value;
    var postAuthor = document.getElementById("postAuthor").value;

    var page = document.getElementsByTagName("main")[0];
    page.innerHTML += pageTemplate();

    var postSection = postTemplate({'postTitle': postTitle, 'postBody': postBody, 'postAuthor': postAuthor}); 
    var commentsSection = commentsTemplate();
    var postElement = document.getElementById('post');

    postElement.innerHTML = postSection;
    postElement.getElementsByTagName("footer")[0].innerHTML += commentsSection;
    
  }

  function postComment() {
    var commentTemplate = _.template(document.getElementById("comment-template").innerHTML);

    var commentText = document.getElementById("commentText").value;
    var commenter = document.getElementById("commenter").value;

    var commentsSection = document.getElementById("comments");
    debugger;
    commentsSection.innerHTML += commentTemplate({"commenter": commenter, "commentText": commentText});
  }