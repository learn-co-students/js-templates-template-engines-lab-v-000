function createPost() {
  var postTitle = document.getElementById("postTitle").value;
  var postBody = document.getElementById("postBody").value;
  var postAuthor = document.getElementById("postAuthor").value;

  // create template string
  var postTemplate = document.getElementById("post-template").innerHTML;
  var pageTemplate = document.getElementById('page-template').innerHTML;
  var commentsTemplate = document.getElementById('comments-template').innerHTML;

  //create template function
  var postTemplateFn = _.template(postTemplate);
  var pageTemplateFn = _.template(pageTemplate);
  var commentsTemplateFn = _.template(commentsTemplate);

  var mainEl = document.getElementsByTagName('main')[0];
  mainEl.innerHTML += pageTemplateFn();
  
  var postTemplateHTML = postTemplateFn({ title: postTitle, content: postBody, author: postAuthor });
  var postEl = document.getElementById('post');
  postEl.innerHTML += postTemplateHTML;

  var commentsHTML = commentsTemplateFn();
  var footerEl = document.getElementsByTagName('footer')[0]
  footerEl.innerHTML += commentsHTML;
}


function postComment() {
  var comment = document.getElementById("commentText").value;
  var commenter = document.getElementById("commenterName").value;

  //create template string
  var commentTemplate = document.getElementById("comment-template").innerHTML;

  //create template function
  var templateFn = _.template(commentTemplate);

  //execute template function with JSON object for the interpolated values
  var templateHTML = templateFn({'comment': comment, 'commenter': commenter })

  //append rather than replace
  var commentsDiv = document.getElementById("comments");
  commentsDiv.innerHTML += templateHTML;
}