
function createPost() {
  var title = document.getElementById("title").value;
  var postBody = document.getElementById("postBody").value;
  var author = document.getElementById("author").value;
  // var commenter = document.getElementById("commenter").value;
  // var comment = document.getElementById("comment").value;
  //insert comment into "comments" div in this format:
  //<div class="comment"><p>comment</p><p>Posted By: <span class="commenter">commenter</span></p></div>

  //create template string
  var pageTemplate = document.getElementById("page-template").innerHTML;  //create template function
  var postTemplate = document.getElementById("post-template").innerHTML;
  // var commentsTemplate = document.getElementById("comments-template").innerHTML;

  var pageTemplateFn = _.template(pageTemplate);
  var postTemplateFn = _.template(postTemplate);
  // var commentsTemplateFn = _.template(commentsTemplate)

  var postDiv = document.getElementById("post");

  //execute template function with JSON object for the interpolated values
  var postTemplateHTML = postTemplateFn({ 'title': title, 'postBody': postBody, 'author': author });
  var pageTemplateHTML = pageTemplateFn()
  // var commentsTemplateHTML = commentsTemplateFn({ 'commenter': commenter, 'comment': comment})
  //append rather than replace!
  postDiv.innerHTML += pageTemplateHTML;
  postDiv.innerHTML += postTemplateHTML;
  // postDiv.innerHTML += commentsTemplateHTML;
}




function postComment() {
  var commenter = document.getElementById("commenterName").value;
  var comment = document.getElementById("commentText").value;
  //insert comment into "comments" div in this format:
  //<div class="comment"><p>comment</p><p>Posted By: <span class="commenter">commenter</span></p></div>

  //create template string
  var commentTemplate = document.getElementById("comment-template").innerHTML;
    //create template function
  var templateFn = _.template(commentTemplate);

  var commentsDiv = document.getElementById("comments");

  //execute template function with JSON object for the interpolated values
  var templateHTML = templateFn({ 'comment': comment, 'commenter': commenter });

  //append rather than replace!
  commentsDiv.innerHTML += templateHTML;
}
