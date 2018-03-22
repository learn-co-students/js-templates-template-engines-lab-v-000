function createPost() {
    const postTitle = document.getElementById("postTitle").value;
    const postBody = document.getElementById("postBody").value;
    const postPoster = document.getElementById("postAuthor").value;

    const postTemplate = _.template(document.getElementById("post-template").innerHTML);

    const commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);

    const pageTemplate = _.template(document.getElementById("page-template").innerHTML);

    //After <form> in main, add ```<div id="sidebar"></div><div id="post"></div>```
    document.getElementsByTagName("main")[0].innerHTML += pageTemplate();

    const blogSection = postTemplate({"title": postTitle, "body": postBody, "poster": postPoster});

    const commentsSection = commentsTemplate();

    const postElement = document.getElementById("post");

    postElement.innerHTML = blogSection;
    document.getElementById("comment-form").innerHTML = commentsSection;
}

function postComment() {
    const commenter = document.getElementById("commenter").value;
    const commentText = document.getElementById("commentText").value;

    const commentTemplate = _.template(document.getElementById("comment-template").innerHTML);

    const commentSection = commentTemplate({"comment": commentText, "commenter": commenter});

    document.getElementById("comments").innerHTML += commentSection;
}