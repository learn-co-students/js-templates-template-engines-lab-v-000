function createPost(){
  // Create templates for post
  let pageTemplate = _.template(document.getElementById("page-template").innerHTML)
  let postTemplate = _.template(document.getElementById("post-template").innerHTML)
  let commentsTemplate = _.template(document.getElementById("comments-template").innerHTML)

  // Establish values for individual post
  let postTitle = document.getElementById("postTitle").value
  let postAuthor = document.getElementById("postAuthor").value
  let postBody = document.getElementById("postBody").value

  // Create page area for posts
  document.getElementsByTagName("main")[0].innerHTML += pageTemplate()

  // Create post and comments based on template
  let postSection = postTemplate({ 'title': postTitle, 'body': postBody, 'poster': postAuthor });
  let commentsSection = commentsTemplate();

  // create post area for post
  let postElement = document.getElementById("post");

  // insert created post in post area and create comments in comment area
  postElement.innerHTML = postSection;
  postElement.getElementsByTagName("footer")[0].innerHTML = commentsSection;
}

function postComment() {
  // Establish values for individual comment
  let commenter = document.getElementById("commenter-name").value
  let comment = document.getElementById("comment").value

  // Create template for comment
  let commentTemplate = _.template(document.getElementById("comment-template").innerHTML)

  // Create comment area for comments
  let commentDiv = document.getElementById("comments")

  // insert comment in comment area 
  commentDiv.innerHTML += commentTemplate({"commenter": commenter, "comment": comment})
}
