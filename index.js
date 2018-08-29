function createPost() {
  var postTitle = document.getElementById("postTitle").value;
  var poster = document.getElementById("posterName").value;
  var post = document.getElementById("postText").value;
 
  var postTemplate = document.getElementById("post-template").innerHTML;
  var postTemplateFn = _.template(postTemplate);
  
  var commentsTemplate = document.getElementById("comments-template").innerHTML;
  var commentsTemplateFn = _.template(commentsTemplate);
  var commentsTemplateHTML = commentsTemplateFn()
  
 
  var postsDiv = document.getElementById("posts");
  var postTemplateHTML = postTemplateFn({'postTitle': postTitle, 'post': post, 'poster': poster });
  postsDiv.innerHTML = postTemplateHTML;
  postsDiv.innerHTML += commentsTemplateHTML;
  
  
  
  
  var pageTemplate = document.getElementById("page-template").innerHTML
  var pageTemplateFn = _.template(pageTemplate);

}


function postComment() {
  debugger
  
  var commentText = document.getElementById("commentText").value;
  var commenter = document.getElementById("commenterName").value;
  
  var commentTemplate = document.getElementById("comment-template").innerHTML;
  var commentTemplateFn = _.template(commentTemplate);
  
  var commentsDiv = document.getElementById("comments");
  var commentTemplateHTML = commentTemplateFn({'commentText': commentText, 'commenter': commenter }).innerHTML;
  commentsDiv.innerHTML += commentTemplateHTML;
}

