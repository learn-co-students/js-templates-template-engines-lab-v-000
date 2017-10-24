function createPost() {
  // create page template function
  var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  // create the page html by grabbing main and calling pageTemplate()
  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();
  // create post template function and get post variables
  var postTemplate = _.template(document.getElementById("post-template").innerHTML);
  var postTitle = document.getElementById('postTitle').value;
  var postContent = document.getElementById('postAuthor').value;
  var postAuthor = document.getElementById('postAuthor').value;
  // grab find div which will contain post
  var postDiv = document.getElementById('post');
  // call post template function to get html as string
  var postHTML = postTemplate( { 'postTitle': postTitle, 'postContent': postContent,
'postAuthor': postAuthor });

  // create comment template
  var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);
  var commentHTML = commentsTemplate();
  // show the new post content
  postDiv.innerHTML = postHTML;
  // show the comment section
  postDiv.getElementsByTagName("footer")[0].innerHTML = commentHTML
}

function postComment() {
  // create comment template
  var commentTemplate = _.template(document.getElementById("comment-template").innerHTML)
  //get comment values
  var commenter = document.getElementById('commenterName').value;
  var comment = document.getElementById('commentText').value;
  // grab the comment Div
  var commentDiv = document.getElementById('comments');
  //add on comments
  commentDiv.innerHTML += commentTemplate( { 'comment': comment, 'commenter': commenter });
}
