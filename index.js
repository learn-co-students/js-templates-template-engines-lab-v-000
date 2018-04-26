function postComment() {
    const commenter = document.getElementById("commenterName").value;
    const comment = document.getElementById("commentText").value;
    const commentTemplate = document.getElementById("comment-template").innerHTML;
    const templateFn = _.template(commentTemplate);
 
    const commentsDiv = document.getElementById("comments");
    const templateHTML = templateFn({ 'comment': comment, 'commenter': commenter });
    commentsDiv.innerHTML += templateHTML;

}

function createPost() {
    if (!document.getElementById("post")) {
        createPostDiv();
    } 
    const title = document.getElementById("postTitle").value;
    const content = document.getElementById("postContent").value;
    const author = document.getElementById("postAuthor").value;
    const postsDiv = document.getElementById("post");

    const postTemplate = document.getElementById("post-template").innerHTML;
    const postTemplateFn = _.template(postTemplate);
    const postTemplateHTML = postTemplateFn({'title': title, 'content': content, 'author': author});
    postsDiv.innerHTML += postTemplateHTML;

    const commentsTemplate = document.getElementById("comments-template").innerHTML;
    const commentsTemplateFn = _.template(commentsTemplate);
    const commentsTemplateHTML = commentsTemplateFn();
    postsDiv.innerHTML += commentsTemplateHTML;
}

function createPostDiv() {
    const pageTemplate = document.getElementById("page-template").innerHTML;
    const pageTemplateFn = _.template(pageTemplate);
    const pageDiv = document.querySelector("main");
    const pageTemplateHTML = pageTemplateFn();
    pageDiv.innerHTML += pageTemplateHTML;

}