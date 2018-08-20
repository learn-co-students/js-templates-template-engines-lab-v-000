function createPost(){
  var postTitle = document.getElementById("postTitle").value;
  var postBody = document.getElementById("postBody").value;
  var postAuthor = document.getElementById("postAuthor").value;

  //Title: <input type="text" id="postTitle"><br>
  //Body: <input type="textarea" id="postBody"><br>
  //Author: <input type="text" id="postAuthor"><br>

  var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML)
  var postTemplate = _.template(document.getElementById("post-template").innerHTML);
  //var templateFn = _.template(postTemplate);

  var main = document.getElementById("main");
  main.innerHTML += pageTemplate();

  var postDiv = document.getElementById("post");

  var templateHTML = postTemplate({ 'postTitle': postTitle, 'postBody': postBody, 'postAuthor': postAuthor});

  postDiv.innerHTML += templateHTML;

  var comments = document.getElementById("comment-form");
  comments.innerHTML += commentsTemplate();

}

function postComment() {
  var commenter = document.getElementById("commenterName").value;
  var comment = document.getElementById("commentText").value;
  //insert comment into "comments" div in this format:
  //<div class="comment"><p>comment</p><p>Posted By: <span class="commenter">commenter</span></p></div>
  //create template string
  //var commentTemplate = '<div class="comment"><p><%= comment %></p><p>Posted By: <span class="commenter"><%= commenter %></span></p></div>';


  var commentTemplate = document.getElementById("comment-template").innerHTML;
  //create template function
  var templateFn = _.template(commentTemplate);

  var commentsDiv = document.getElementById("comments");

  //execute template function with JSON object for the interpolated values
  var templateHTML = templateFn({ 'comment': comment, 'commenter': commenter });

  //append rather than replace!
  commentsDiv.innerHTML += templateHTML;
}
