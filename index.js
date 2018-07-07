function createPost() {

  var pageTemplate = _.template(document.getElementById("page-template").innerHTML); //set template for page, which is on index.html. On HTML, is a template with an id of "page-template"
  var postTemplate = _.template(document.getElementById("post-template").innerHTML); //template for post
  var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML); //template for comments


  var postTitle = document.getElementById("postTitle").value; //make form on HTML that has thes values
  var postAuthor = document.getElementById("postAuthor").value;
  var post = document.getElementById("postBody").value;

  document.getElementsByTagName("main")[0].innerHTML += pageTemplate(); //renders the page template, which on HTML, has a sidebard and post div 

  var blogSection = postTemplate({ 'title': postTitle, 'body': post, 'author': postAuthor }); //renders the blog section with post templates of all different variables being passed (person submits form, goes to index.js, gets the variables above, then executes so it looks like a comment in index.html)
  var commentsSection = commentsTemplate(); //render comments template as above 
  var postElement = document.getElementById("post");

  postElement.innerHTML = blogSection; //blog section is the template for the posts
  postElement.getElementsByTagName("footer")[0].innerHTML = commentsSection; //comments are in the footers
}


function postComment() {
  var commenter = document.getElementById("commenterName").value;
  var comment = document.getElementById("commentText").value;

  var commentTemplate = _.template(document.getElementById("comment-template").innerHTML);

  var commentsDiv = document.getElementById("comments");

  commentsDiv.innerHTML += commentTemplate({ 'comment': comment, 'commenter': commenter });
}