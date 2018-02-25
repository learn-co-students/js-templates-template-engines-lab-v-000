function createPost() {
  //
  // create template functions -- Seems like these grab the templates created on the html page -- ie,
  // these grab the inner html within the <script> tags> -- and SEE THAT THESE ARE FUNCTIONS
  // CALLED BELOW.  SO _.template creates a function, using the html within the script, and that
  // function, when called, inserts the template. But see last lines of this function below.
  var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  var postTemplate = _.template(document.getElementById("post-template").innerHTML);
  var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);

  // get blog values -- That is, the post-form is not in a script but is in the html itself.
  // So this is grabbing values inputted by the user in the pre-existing form
  var postTitle = document.getElementById("postTitle").value;
  var postAuthor = document.getElementById("postAuthor").value;
  var post = document.getElementById("postBody").value;

  // This must add the page template captured above.  The page-template adds div of sidebar and post
  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();

  // This takes the functions created above to insert the html and saves that html in a variable
  var blogSection = postTemplate({ 'title': postTitle, 'body': post, 'poster': postAuthor });
  var commentsSection = commentsTemplate();
  var postElement = document.getElementById("post");

  // I guess this finally takes the stuff and inserts it. No idea why there are this many steps.
  postElement.innerHTML = blogSection;
  postElement.getElementsByTagName("footer")[0].innerHTML = commentsSection;
    // When is the commentsTemplate inserted??

}

function postComment() {
   var commentTemplate = _.template(document.getElementById("comment-template").innerHTML);

   var commentText = document.getElementById("commentText").value;
   var commenterName = document.getElementById("commenter").value;

   var commentsSection = document.getElementById("comments");
   commentsSection.innerHTML += commentTemplate({ 'commenter': commenterName, 'comment': commentText });
}
