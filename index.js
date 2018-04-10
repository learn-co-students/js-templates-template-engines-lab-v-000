function createPost() {
  var postContent = document.getElementById("postContent").value;
  var postAuthor = document.getElementById("postAuthor").value;

  var postTemplate = document.getElementById("post-template").innerHTML;
  var postTemplateFn = _.template(postTemplate);
  var postTemplateHTML = postTemplateFn({'content': postContent, 'author': postAuthor});
  // var postFromTemplate = postTemplateHTML.innerHTML

  var pageTemplate = document.getElementById("page-template").innerHTML;
  var pageTemplateFn = _.template(pageTemplate);
  var pageTemplateHTML = pageTemplateFn({'post': postTemplateHTML});


  var pageDiv = document.getElementById("page");
  pageDiv.innerHTML += pageTemplateHTML;
}

function postComment() {
  var commentContent = document.getElementById("commentContent").value;
  var commentAuthor = document.getElementById("commentAuthor").value;

  var commentTemplate = document.getElementById("comments-template").innerHTML;
  var commentTemplateFn = _.template(commentTemplate);
  var commentTemplateHTML = commentTemplateFn({'comment': commentContent, 'commenter': commentAuthor});
  var commentFromTemplate = commentTemplateHTML.innerHTML;

  var commentsTemplate = document.getElementById("comments-template").innerHTML;
  var commentsTemplateFn = _.template(commentsTemplate);
  var commentsTemplateHTML = commentsTemplateFn({'commentBody': commentTemplateHTML})

  var commentsDiv = document.getElementById("comments")
  commentsDiv.innerHTML += commentTemplateHTML;
}
