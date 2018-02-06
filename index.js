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
  
  var author = document.getElementById("postAuthor").value;
  var title = document.getElementById("postTitle").value;
  var body = document.getElementById("postBody").value;
  
  var pageTemplate = document.getElementById("page-template").innerHTML;
  var templateFunc = _.template(pageTemplate);
  var mainElements = document.getElementsByTagName("main");
  mainElements[0].innerHTML = templateFunc();
  
  var postTemplate = document.getElementById("post-template").innerHTML;
 
  //create template function
  var templateFn = _.template(postTemplate);
 
  var postDiv = document.getElementById("post");
 
  //execute template function with JSON object for the interpolated values
  var templateHTML = templateFn({ 'author': author, 'title': title, 'body': body });
 
  //append rather than replace!
  postDiv.innerHTML = templateHTML;
  
  var commentsTemplate = document.getElementById("comments-template").innerHTML;
  var templateFunction = _.template(commentsTemplate);
  //var mainElements = document.getElementsByTagName("main");
  //console.log("before");
  //console.log(templateFunction());
  //console.log("after");
  
  mainElements[0].innerHTML += templateFunction();

}