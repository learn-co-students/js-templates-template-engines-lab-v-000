function createPost() {
    let title = document.getElementById("postTitle").value;
    let postBody = document.getElementById("postBody").value;
    let author = document.getElementById("postAuthor").value;

    let pageTemplate = _.template(document.getElementById("page-template").innerHTML);
    let postTemplate = _.template(document.getElementById("post-template").innerHTML);
    let commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);

    document.getElementsByTagName("main")[0].innerHTML += pageTemplate();

    let blogPost = postTemplate({ title: title, postBody: postBody, author: author });
    let commentSection = commentsTemplate();
    let postDiv = document.getElementById("post");

    postDiv.innerHTML += blogPost;
    postDiv.getElementsByTagName("footer")[0].innerHTML += commentSection;
}



function postComment() {
    let name = document.getElementById("commenterName").value;
    let comment = document.getElementById("comment").value;

    let commentTemplate = _.template(document.getElementById("comment-template").innerHTML);

    let commentDiv = document.getElementById("comments");

    commentDiv.innerHTML += commentTemplate({comment: comment, name: name});
}
