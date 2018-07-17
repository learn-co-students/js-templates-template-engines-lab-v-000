function postComment() {
    var commenter = document.getElementById("commenterName").value;
    var comment = document.getElementById("commentText").value;
 
    var commentTemplate = document.getElementById("comment-template").innerHTML;
   
    var templateFn = _.template(commentTemplate);
   
    var commentsDiv = document.getElementById("comments");
   
    var templateHTML = templateFn({ 'comment': comment, 'commenter': commenter });
   
    commentsDiv.innerHTML += templateHTML;
}

function createPost() {
    var postTitle = document.getElementById("postTitle").value;
    var postBody = document.getElementById("postBody").value;
    var postAuthor = document.getElementById("postAuthor").value;
 
    var postTemplate = document.getElementById("post-template").innerHTML;
   
    var templateFn = _.template(postTemplate);
   
    var postsDiv = document.getElementById("posts");
   
    var templateHTML = templateFn({ 'post-title': postTitle, 'post-body': postBody, 'post-author': postAuthor });
   
    postsDiv.innerHTML += templateHTML;
}