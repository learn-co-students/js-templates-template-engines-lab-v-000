function createPost() {
  //create the templates for page, post, and comments
  let pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  let postTemplate = _.template(document.getElementById("post-template").innerHTML);
  let commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);

  //get values for what will eventually be saved over to the database once we wire on the backend
  let postTitle = document.getElementById("postTitle").value;
  let postAuthor = document.getElementById("postAuthor").value;
  let post = document.getElementById("postBody").value;

  //find the first 'main' tag and add it's innerHTML values to the pageTemplate function variable
  document.getElementByTagName("main")[0].innerHTML += pageTemplate();

  let blogSection = postTempalte({'title': postTitle, 'body': post, 'poster': postAuthor});
  let commentsSection = commentsTemplate();
  let postElement = document.getElementById("post");

//
  postElement.innerHTML = blogSection;
  postElement.getElementByTagName("footer")[0].innerHTML = commentsSection;

}

function postComment() {
  let commentTemplate = _.template(document.getElementById("comment-template").innerHTML);
  let commentText = document.getElementById("commentText").value;
  let commenterName = document.getElementById("commenter").value;
  let commentsSection = document.getElementById("comments");
  commentsSection.innerHTML += commentTemplate({'commenter': commenterName, 'comment': commentText});

}
