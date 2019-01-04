function createPost() {
  let postTemplate = _.template(document.getElementById("post-template").innerHTML);
  let pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  let commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);

  let title = document.getElementById("postTitle").value;
  let body = document.getElementById("postBody").value;
  let author = document.getElementById("postAuthor").value;

  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();

  let blogSection =  postTemplate({'title': title, 'body': body, 'author': author});
  let commentsSection = commentsTemplate();
  let postElement = document.getElementById("post");

  postElement.innerHTML = blogSection
  postElement.getElementsByTagName("footer")[0].innerHTML += commentsSection;

}


function postComment() {
  let commentTemplate = _.template(document.getElementById("comment-template").innerHTML);

  let commenter = document.getElementById("commenterName").value;
  let comment = document.getElementById("commentContent").value;

  let commentsSection= document.getElementById("comments")

  commentsSection.innerHTML += commentTemplate({'comment': comment, 'commenter': commenter});
}
