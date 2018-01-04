function createPost() {
  //build out all the templates going inside the main tag
  var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  var postTemplate = _.template(document.getElementById("post-template").innerHTML);
  var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);
  //these now are called with ();

  //push the page template into the main tag (X overwrite)
  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();

  //define each value from the form
  var postTitle = document.getElementById("postTitle").value;
  var postAuthor = document.getElementById("postAuthor").value;
  var postBody = document.getElementById("postBody").value;

  //filling out post template with the values returned above
  var postSection = postTemplate({'title': postTitle, 'body': postBody, 'poster': postAuthor});
  //creating a comments form template that should come after the post
  var commentsSection = commentsTemplate();
  //defining a post so that now we can push post section & comments form
  var postElement = document.getElementById("post");

  postElement.innerHTML = postSection;
  postElement.getElementsByTagName("footer")[0].innerHTML += commentsSection;
}

function postComment() {
  //values
  let commenter = document.getElementById("commenter").value;
  let comment = document.getElementById("commentText").value;
  //template & template function
  let commentTemplate = _.template(document.getElementById("comment-template").innerHTML);
  let commentsDiv = document.getElementById("comments");
  //execute template function
  let templateHTML = commentTemplate({'commenter': commenter, 'comment': comment});

  commentsDiv.innerHTML += templateHTML;
}