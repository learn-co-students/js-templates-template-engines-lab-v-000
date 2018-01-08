function createPost() {

  // get blog values
  const title = document.getElementById("postTitle").value;
  const post = document.getElementById("postBody").value;
  const author = document.getElementById("postAuthor").value;

  const pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  const postTemplate = _.template(document.getElementById("post-template").innerHTML);
  const commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);


  //create page
  document.getElementsByTagName("main")[0].innerHTML += pageTemplate;

  const postDiv = document.getElementById("post");

  postDiv.innerHTML = postTemplate({
    title: title,
    post: post,
    author: author
  });

  const commentsDiv = document.getElementsByTagName("footer")[0];
  commentsDiv.innerHTML = commentsTemplate();

}

function postComment() {
  //comment values
  const comment = document.getElementById("postComment").value;
  const commenter = document.getElementById("postCommenter").value;

  //template function
  let commentTemplate = _.template(
    document.getElementById("comment-template").innerHTML
  );

  const commentDiv = document.getElementById("comments");
  commentDiv.innerHTML += commentTemplate({
    comment: comment,
    commenter: commenter
  });
}