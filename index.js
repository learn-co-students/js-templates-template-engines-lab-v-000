function createPost() {
  let title = document.getElementById("title").value;
  let body = document.getElementById("body").value;
  let author = document.getElementById("author").value;

  let postTemplate = _.template(document.getElementById("post-template").innerHTML);
  let commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);
  let pageTemplate = _.template(document.getElementById("page-template").innerHTML);

  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();

  let postSection = postTemplate({"title": title, "body": body, "author": author});
  let commentsSection = commentsTemplate();
  let postDiv = document.getElementById("post");
  
  postDiv.innerHTML = postSection;
  postDiv.getElementsByTagName("footer")[0].innerHTML = commentsSection;
};

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
};