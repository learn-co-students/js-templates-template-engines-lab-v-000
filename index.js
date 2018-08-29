function createPost() {
  var postTitle = document.getElementById("postTitle").value;
  var poster = document.getElementById("posterName").value;
  var post = document.getElementById("postText").value;
 

  var postTemplate = document.getElementById("post-template").innerHTML;
 
  var templateFn = _.template(postTemplate);
 
  var postsDiv = document.getElementById("posts");
 
  var templateHTML = templateFn({'postTitle': postTitle, 'post': post, 'poster': poster });
 
  postsDiv.innerHTML += templateHTML;
}