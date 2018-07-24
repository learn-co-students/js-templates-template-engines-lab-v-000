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
  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();

//use the postTemplate to make a template, setting the values for the titles, body, and poster keys
  let blogSection = postTemplate({'title': postTitle, 'body': post, 'poster': postAuthor});
  let commentsSection = commentsTemplate();
  let postElement = document.getElementById("post");

//set the values of the postElement and it's footer
  postElement.innerHTML = blogSection;
  postElement.getElementsByTagName("footer")[0].innerHTML = commentsSection;
}

function postComment() {
  let commentTemplate = _.template(document.getElementById("comment-template").innerHTML);
  let commentText = document.getElementById("commentText").value;
  let commenterName = document.getElementById("commenter").value;
  let commentsSection = document.getElementById("comments");
  commentsSection.innerHTML += commentTemplate({'commenter': commenterName, 'comment': commentText});
}
