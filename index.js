function updatePage() {
  //create template string
  var pageTemplate = document.getElementById("page-template").innerHTML;
  //create template function
  var pageFn = _.template(pageTemplate);

  var pageDiv = document.getElementById("page");

  //append rather than replace!
  pageDiv.innerHTML += pageFn();

}

function createPost() {
  var title = document.getElementById("postTitle").value;
  var author = document.getElementById("postAuthor").value;
  var postBody = document.getElementById("postBody").value;
  //insert comment into "comments" div in this format:
  //<div class="comment"><p>comment</p><p>Posted By: <span class="commenter">commenter</span></p></div>
  updatePage();

  //create template string
  var postTemplate = document.getElementById("post-template").innerHTML;
  //create template function
  var postFn = _.template(postTemplate);
  var postDiv = document.getElementById("post");

  //append rather than replace!
  postDiv.innerHTML += postFn({ 'title': title, 'author': author, 'postBody': postBody });
  addCommentForm();
  updatePage();

}

function addCommentForm() {
  var commentTemplate = document.getElementById("comments-template").innerHTML;
  var commentFn = _.template(commentTemplate);
  var commentDiv = document.getElementById("comment");

  commentDiv.innerHTML += commentFn();
}

function postComment() {

  //create template string
  var commentTemplate = document.getElementById("comment-template").innerHTML;

  var comment = document.getElementById("commentText").value;
  var commenter = document.getElementById("commenter").value;

  //create template function
  var templateFn = _.template(commentTemplate);

  var commentsDiv = document.getElementById("comments-template");

  //execute template function with JSON object for the interpolated values
  var templateHTML = templateFn({ 'comment': comment, 'commenter': commenter });

  //append rather than replace!
  commentsDiv.innerHTML += templateHTML;
}
