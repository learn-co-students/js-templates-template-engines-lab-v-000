function updatePage() {
  //create template string
  var pageTemplate = document.getElementById("page-template").innerHTML;
  //create template function
  var pageFn = _.template(postTemplate);

  var pageDiv = document.getElementById("page");

  //append rather than replace!
  postDiv.innerHTML += pageTemplate;
}

function createPost() {
  var title = document.getElementById("postTitle").value;
  var author = document.getElementById("postAuthor").value;
  var postBody = document.getElementById("postBody").value;
  //insert comment into "comments" div in this format:
  //<div class="comment"><p>comment</p><p>Posted By: <span class="commenter">commenter</span></p></div>

  //create template string
  var postTemplate = document.getElementById("post-template").innerHTML;
  //create template function
  var postFn = _.template(postTemplate);
  var postDiv = document.getElementById("post");

  //append rather than replace!
  postDiv.innerHTML += postFn({ 'title': title, 'author': author, 'postBody': postBody });

  updatePage();
}


function postComment() {
  var commenter = document.getElementById("commenterName").value;
  var comment = document.getElementById("commentText").value;
  //insert comment into "comments" div in this format:
  //<div class="comment"><p>comment</p><p>Posted By: <span class="commenter">commenter</span></p></div>

  //create template string
  var commentTemplate = '<div class="comment"><p><%= comment %></p><footer>Posted By: <span class="commenter"><%= commenter %></span></footer></div>';
  //create template function
  var templateFn = _.template(commentTemplate);

  var commentsDiv = document.getElementById("comment");

  //execute template function with JSON object for the interpolated values
  var templateHTML = templateFn({ 'comment': comment, 'commenter': commenter });

  //append rather than replace!
  commentsDiv.innerHTML += templateHTML;
}
