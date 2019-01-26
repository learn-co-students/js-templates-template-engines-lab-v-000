function createPost(){
    let postTitle = document.getElementById("postTitle").value;
    let postBody = document.getElementById("postBody").value;
    let postAuthor = document.getElementById("postAuthor").value;

    let pageTemplate = document.getElementById("page-template").innerHTML;
    let postTemplate = document.getElementById("post-template").innerHTML;
    let commentsTemplate = document.getElementById("comments-template").innerHTML;

    let pageTemplateFn = _.template(pageTemplate);
    let postTemplateFn = _.template(postTemplate);
    let commentsTemplateFn = _.template(commentsTemplate);

    let mainDiv = document.querySelector("main");

    let postTemplateHTML = postTemplateFn({ postTitle: postTitle, postBody: postBody, postAuthor: postAuthor });
    let commentsTemplateHTML = commentsTemplateFn();
    let pageTemplateHTML = pageTemplateFn( { post: postTemplateHTML });

    mainDiv.innerHTML += (pageTemplateHTML + commentsTemplateHTML);
}

function postComment(){
    let commenterName = document.getElementById("commenterName").value;
    let commentText = document.getElementById("commentText").value;

    let commentTemplate = document.getElementById("comment-template").innerHTML;
    let commentTemplateFn = _.template(commentTemplate);  
    let commentTemplateHTML = commentTemplateFn( {commenterName: commenterName, commentText: commentText });

    let commentsDiv = document.getElementById("comments");

    commentsDiv.innerHTML += commentTemplateHTML;
}