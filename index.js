

function createPost(){
  //build PAGE TEMPLATE
  var pageTemplate = document.getElementById("page-template").innerHTML;
  var pageTemplateFn = _.template(pageTemplate);

  //BUILD POST TEMPLATE AND CREATE POST
  // get data from form inputs:
  var postTitle = document.getElementById("postTitle").value;
  var postBody = document.getElementById("postBody").value;
  var postAuthor = document.getElementById("postAuthor").value;

  // create post template string:
  var postTemplate = document.getElementById("post-template").innerHTML;
  //create post template function:
  var postTemplateFn = _.template(postTemplate);

  //execute post template function with JSON object for interpolated values
  var postTemplateHTML = postTemplateFn({'postTitle': postTitle, 'postBody': postBody, 'postAuthor': postAuthor});


  // execute page template function with JSON object for interpolated postTemplate:
  var pageTemplateHTML = pageTemplateFn({'postTemplate': postTemplateHTML});

  // get page div:
  var pageDiv = document.getElementById("pageDiv");

  pageDiv.innerHTML += pageTemplateHTML;


renderCommentsTemplate();

}

function renderCommentsTemplate(){

  var commentFormTemplate = document.getElementById("comments-template").innerHTML;
  var commentFormTemplateFn = _.template(commentFormTemplate);
  var commentsDiv = document.getElementById("comments");
  commentsDiv.innerHTML += commentFormTemplateFn

}

function postComment(){
  var commenterName = document.getElementById("commenterName").value;
  var commentBody = document.getElementById("commentBody").value;

  var commentTemplate = document.getElementById("comment-template").innerHTML;
  var commentTemplateFn = _.template(commentTemplate);

  var commentTemplateHTML = commentTemplateFn({'commentBody': commentBody, 'commenterName': commenterName});

  //Get comments-template:
  var commentsTemplate = document.getElementById("comments-template").innerHTML;
  var commentsTemplateFn = _.template(commentsTemplate);
  var commentsTemplateHTML = commentsTemplateFn({'commentTemplate': commentTemplateHTML});

  var commentsDiv = document.getElementById("comments");
  commentsDiv.innerHTML += commentsTemplateHTML;

}
