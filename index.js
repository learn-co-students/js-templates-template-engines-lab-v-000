function createPost() {
  let author = document.getElementById("author").value;
  let body = document.getElementById("body").value;
  let title = document.getElementById("title").value;

  let pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  let postTemplate = _.template(document.getElementById("post-template").innerHTML);
  let commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);

  let main = document.getElementById("main");
  main.innerHTML += pageTemplate();

  let postSection = postTemplate({ 'title': title, 'body': body, 'author': author });
  let commentsSection = commentsTemplate();
  let postElement = document.getElementById("post");

  postElement.innerHTML = postSection;
  document.getElementById("comment").innerHTML = commentsSection;
}

function postComment() {
  let commenter = document.getElementById("commenterName").value;
  let comment = document.getElementById("commentText").value;

  //create template string
  let commentTemplate = document.getElementById("comment-template").innerHTML;

  //create template function
  let templateFn = _.template(commentTemplate);

  let commentsDiv = document.getElementById("comments");

  //execute template function with JSON object for the interpolated values
  let templateHTML = templateFn({ 'comment': comment, 'commenter': commenter });

  //append rather than replace!
  commentsDiv.innerHTML += templateHTML;
}
