function createPost() {

    var pageTemplate = document.getElementById("page-template").innerHTML;
    var postTemplate = document.getElementById("post-template").innerHTML;
    var commentsTemplate = document.getElementById("comments-template").innerHTML;

    var pageTemplateFn = _.template(pageTemplate);
    var postTemplateFn = _.template(postTemplate);
    var commentsTemplateFn = _.template(commentsTemplate);

    var title = document.getElementById("postTitle").value;
    var body = document.getElementById("postBody").value;
    var author = document.getElementById("postAuthor").value;

    document.getElementsByTagName("main")[0].innerHTML += pageTemplateFn();

    var postTemplateHTML = postTemplateFn({'title': title, 'body': body, 'author': author });
    var post = document.getElementById("post");
    post.innerHTML = postTemplateHTML;
    post.getElementsByTagName("footer")[0].innerHTML += commentsTemplateFn();
}

function postComment() {
    var commentTemplate = document.getElementById("comment-template").innerHTML;
    var commentTemplateFn = _.template(commentTemplate);

    var comment = document.getElementById("commentBody").value;
    var commenter = document.getElementById("commenter").value;

    var commentHTML = commentTemplateFn({'comment': comment, 'commenter': commenter });
    document.getElementById("comments").innerHTML = commentHTML;
}
