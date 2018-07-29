function createPost() {
  let postTemplate = _.template(document.getElementById("post-template").innerHTML);
  let pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  let commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);

  let postText = document.getElementById("postText").value;
  let authorName = document.getElementById("authorName").value;

  let templateHTML = postTemplate({ 'postBody': postText, 'authorName': authorName });

  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();
  document.getElementById("post").innerHTML += templateHTML + commentsTemplate();
}

function postComment() {
  let commentTemplate =_.template(document.getElementById("comment-template").innerHTML);

  let commentText = document.getElementById("commentText").value;
  let authorName = document.getElementById("authorName").value;

  let templateHTML = commentTemplate({ 'commentBody': postText, 'commenterName': authorName });
  // debugger;
  document.getElementsByTagName("main")[0].innerHTML += commentTemplate();
  document.getElementsByTagName("footer").innerHTML += templateHTML;

}
