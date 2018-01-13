function createPost () {

  var title = document.getElementById("title").value;
  var body = document.getElementById("body").value;
  var author = document.getElementById("author").value;
  
  var article = document.getElementById("article");
  var header = document.getElementById("header");
  var footer = document.getElementById("footer");
  
  var postTemplate = document.getElementById("post-template").innerHTML;
  
  var pageTemplate = document.getElementById("page-template").innerHTML

  var pageTemplateFn = _.template(pageTemplate);
  
  var pageDivs = document.getElementById("posts");
  
  var pageTemplateHTML = pageTemplateFn({
    'title': title, 'body': body, 'author': author 
  })
  
  var postTemplateFn = _.template(postTemplate);
  
  var postTemplateHTML = postTemplateFn({
    'article': article, 'header': header, 'footer': footer,
  })
  
}

function postComment () {
  
  var commenterName = document.getElementById("commenterName");
  var commentText = document.getElementById("commentText");
  var commentFooter = document.getElementById("commentFooter");
  var comments = document.getElementById("comments");

  var commentsTemplate = document.getElementById("comments-template").innerHTML;

  var commentTemplate = document.getElementById("comment-template").innerHTML;

  var commentsTemplateFn = _.template(commentsTemplate);
  
  var commentTemplateFn = _.template(commentTemplate);
  
  var commentsTemplateHTML = commentsTemplateFn({
    'commenterName': commenterName, 'commentText': commentText, 'comments': comments 
  })
  
  var commentTemplateHTML = commentTemplateFn({
     'commentFooter': commentFooter
  })
  
}


