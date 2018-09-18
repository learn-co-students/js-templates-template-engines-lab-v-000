function createPost(){
  let body = document.getElementById('body').value
  let author = document.getElementById('author').value
  let title = document.getElementById('title').value

  var pageTemplate = document.getElementById('page-template').innerHTML
  var postTemplate = document.getElementById('post-template').innerHTML
  var commentsTemplate = document.getElementById('comments-template').innerHTML


  var postTemplateFn = _.template(postTemplate);
  var post = postTemplateFn({'author': author, 'body': body, 'title': title});



  var pageTemplateFn = _.template(pageTemplate);
  var pageTemplateHTML = pageTemplateFn({'posting': post, 'comments': commentsTemplate});

  var main = document.getElementById("main");
  main.innerHTML += pageTemplateHTML

}

function postComment(){
  let comment = document.getElementById('comment').value
  let commenter = document.getElementById('commenter').value

  document.getElementById('comment').value = ""
  document.getElementById('commenter').value = ""

  var commentTemplate = document.getElementById('comment-template').innerHTML
  var commentTemplateFn = _.template(commentTemplate);
  var commentTemplateHTML = commentTemplateFn({'comment': comment, 'commenter': commenter});


  var commentsDiv = document.getElementById("comments");
  commentsDiv.innerHTML += commentTemplateHTML
}