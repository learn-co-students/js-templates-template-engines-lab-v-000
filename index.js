
function postComment() {
  var commenter = document.getElementById("commenterName").value;
  var comment = document.getElementById("commentText").value;

  //insert comment into "comments" div in this format:
  //<div class="comment"><p>comment</p><p>Posted By: <span class="commenter">commenter</span></p></div>

  //create template string - THIS IS THE ONLY LINE WE HAVE TO CHANGE
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

function createPost() {
     var title = document.getElementById("title").value;
     var author = document.getElementById("post_author").value;

    var pageTemplate = document.getElementById("page-template").innerHTML;
     var postTemplate = document.getElementById("post-template").innerHTML;
     var templateFn = _.template(postTemplate);
     var pageTemplateFn = _.template(pageTemplate);
     var templateHTML = templateFn({ 'title':title, 'post_author':author, 'page_template':pageTemplate});
     document.body.innerHTML += templateHTML;
     document.body.innerHTML += pageTemplateFn.innerHTML;
 };

