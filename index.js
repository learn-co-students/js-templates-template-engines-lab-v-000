function createPost() {
  var postTitle = document.getElementById("postTitle").value;
  var poster = document.getElementById("posterName").value;
  var post = document.getElementById("postText").value;
 
  var postTemplate = document.getElementById("post-template").innerHTML;
  var postTemplateFn = _.template(postTemplate);
 
  var postsDiv = document.getElementById("posts");
  var postTemplateHTML = postTemplateFn({'postTitle': postTitle, 'post': post, 'poster': poster });
  postsDiv.innerHTML += postTemplateHTML;
  
  
  
  var pageTemplate = document.getElementById("page-template").innerHTML
  var pageTemplateFn = _.template(pageTemplate);

}


function postComment() {
  var commentText = document.getElementById("commentText");
  var commenter = document.getElementById("commenterName");
  
  var commentTemplate = document.getElementById("comment-template").innerHTML;
  var commentTemplateFn = _.template(commentTemplate);
  
  var commentsDiv = document.getElementById("comments");
  var commentTemplateHTML = commentTemplateFn({'commentText': comment, 'commenter': commenter });
  commentsDiv.innerHTML += commentTemplateHTML;
  
}

