function createPost() {
  // create template functions
  let pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  let postTemplate = _.template(document.getElementById("post-template").innerHTML);
  let commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);
  // get blog values
  let postTitle = document.getElementById("postTitle").value;
  let postAuthor = document.getElementById("postAuthor").value;
  let postText = document.getElementById("postBody").value;
  //sets pageTemplate into html main
  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();
  //finds divs for post and comment section
  let postElement = document.getElementById("post");
  let commentElement = document.getElementById("comment");
  //creates post and adds the comment section in respective divs
  postElement.innerHTML = postTemplate({ 'title': postTitle, 'body': postText, 'poster': postAuthor });
  commentElement.innerHTML = commentsTemplate();
}

function postComment() {
  let commentTemplate = _.template(document.getElementById("comment-template").innerHTML);

  let commentText = document.getElementById("commentText").value;
  let commenterName = document.getElementById("commenter").value;
  let commentsSection = document.getElementById("comments");
  
  commentsSection.innerHTML += commentTemplate({ 'commenter': commenterName, 'comment': commentText });
}
