function createPost() {
  event.preventDefault();
  let post = document.getElementById("post_content").value;
  let postTemplate = document.getElementById("post-template").innerHTML;

  //create template function
  let templateFn = _.template(postTemplate);
  let postDiv = document.getElementById("posts");

  //execute template function with JSON object for the interpolated values
  let templateHTML = templateFn({ 'post': post });

  //append rather than replace!
  postDiv.innerHTML += templateHTML;
}

function postComment() {
  event.preventDefault();
  let comment = document.getElementById("comment_content").value;
  let commentTemplate = document.getElementById("comment-template").innerHTML;
  //create template function
  let templateFn = _.template(commentTemplate);
  let commentDiv = document.getElementById("comments");

  //execute template function with JSON object for the interpolated values
  let templateHTML = templateFn({ 'comment': comment });

  //append rather than replace!
  commentDiv.innerHTML += templateHTML;
}
