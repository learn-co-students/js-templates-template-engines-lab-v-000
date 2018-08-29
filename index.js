function createPost() {
    var author = document.getElementById("author").value;
    var body = document.getElementById("body").value;
    var title = document.getElementById("title").value;

    var pageTemplate = document.getElementById("page-template").innerHTML;
    var pageTemplateFn = _.template(pageTemplate);

    var postTemplate = document.getElementById("post-template").innerHTML;
    var postTemplateFn = _.template(postTemplate);

    var commentsTemplate = document.getElementById("comments-template").innerHTML;
    var commentsTemplateFn = _.template(commentsTemplate);

    var pageDiv = document.getElementById("page");
    pageDiv.innerHTML += pageTemplateFn();

    var postTemplateHTML = postTemplateFn({ 'title': title, 'body': body, 'author': author });
    var commentsTemplateHTML = commentsTemplateFn();
    var postDiv = document.getElementById("post");

    postDiv.innerHTML = postTemplateHTML;
    postDiv.getElementsByTagName("article")[0].innerHTML = commentsTemplateHTML

}

function postComment() {
    var commenter = document.getElementById("commenterName").value;
    var comment = document.getElementById("commentText").value;

    var commentTemplate = document.getElementById("comment-template").innerHTML;
    var templateFn = _.template(commentTemplate);

    var commentsDiv = document.getElementById("comments");

    var templateHTML = templateFn({ 'comment': comment, 'commenter': commenter });
    commentsDiv.innerHTML += templateHTML;

}

