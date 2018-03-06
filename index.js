function createPage () {
  const pageTemplate = document.getElementById("page-template").innerHTML;
  const templateFn = _.template(pageTemplate);
  const postsDiv = document.getElementById("posts");
  const templateHTML = templateFn();
  postsDiv.innerHTML += templateHTML;
}

function createCommentSection () {
  const commentSectionTemplate = document.getElementById("comments-template").innerHTML;
  const templateFn = _.template(commentSectionTemplate);
  const postDiv = document.getElementById("post");
  const templateHTML = templateFn();
  postDiv.innerHTML += templateHTML;
}

function createPost () {
  createPage();
  const title = document.getElementById("postTitle").value;
  const author = document.getElementById("postAuthor").value;
  const body = document.getElementById("postBody").value;

  const postTemplate = document.getElementById("post-template").innerHTML;
  const templateFn = _.template(postTemplate);

  const postDiv = document.getElementById("post");

  //execute template function with JSON object for the interpolated values
  const templateHTML = templateFn({'title': title, 'body': body, 'author': author});

  //append rather than replace!
  postDiv.innerHTML += templateHTML;
  createCommentSection();
}

function postComment () {
  const comment = document.getElementById("commentText").value;
  const commenter = document.getElementById("commenterName").value;

  // template string
  const commentTemplate = document.getElementById("comment-template").innerHTML;

  // create the template function
  const templateFn = _.template(commentTemplate);

  const commentsDiv = document.getElementById("comments");

  //execute template function with JSON object for the interpolated values
  const templateHTML = templateFn({'comment': comment, 'commenter': commenter});

  //append rather than replace!
  commentsDiv.innerHTML += templateHTML;
}
