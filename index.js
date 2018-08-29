function createPost() {
  var postTitle = document.getElementById("postTitle").value;
  var poster = document.getElementById("posterName").value;
  var post = document.getElementById("postText").value;
 
  var postTemplate = document.getElementById("post-template").innerHTML;
  var postTemplateFn = _.template(postTemplate);
 
  var postsDiv = document.getElementById("posts");
  var templateHTML = templateFn({'postTitle': postTitle, 'post': post, 'poster': poster });
  postsDiv.innerHTML += templateHTML;
  
  
  
  var pageTemplate = document.getElementById("page-template").innerHTML
  
  var pageTemplateFn = _.template(pageTemplate);

}