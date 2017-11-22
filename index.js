function createPost(){

  //set up the post HTML

  var blogger = document.getElementById("bloggerName").value;
  var postTitle = document.getElementById("postTitle").value;
  var postContent = document.getElementById("postContent").value;

  var postTemplate = document.getElementById("post-template").innerHTML;
  var postTemplateFn = _.template(postTemplate);

  var pageTemplate = document.getElementById("page-template").innerHTML
  var pageTemplateFn = _.template(pageTemplate)


  var postTemplateHTML = postTemplateFn({'postTitle': postTitle, 'postContent': postContent, 'bloggerName': blogger})

  var pageTemplateHTML = pageTemplateFn()

  var main = document.querySelector('main')

  debugger
  main.innerHTML += pageTemplateHTML

  var postDiv = document.getElementById("post")

  postDiv.innerHTML += postTemplateHTML

  // add a comments template to the bottom of the post

  var commentsTemplate = document.getElementById("comments-template").innerHTML
  var commentsTemplateFn = _.template(commentsTemplate)
  var commentsTemplateHTML = commentsTemplateFn({'postTitle': postTitle.toString()})
  debugger

  var articleDivs = postDiv.querySelectorAll('article')
  var lastArticle = articleDivs[articleDivs.length - 1]
  debugger
  lastArticle.innerHTML += commentsTemplateHTML

}





function postComment(){
  // var articleIdentifierVar = document.getElementById("articleIdentifier").text

  var commentContentVar = document.getElementById("commentContent").value
  var commenterNameVar = document.getElementById("commenterName").value

  var commentsTemplate = document.getElementById("comment-template").innerHTML

  var commentsTemplateFn = _.template(commentsTemplate)
  var commentTemplateHTML = commentsTemplateFn({"commentContent": commentContentVar, "commenterName": commenterNameVar})

  // var commentContentVar = document.getElementById =
  var commentsSection = document.getElementById('comments')
  debugger
  commentsSection.innerHTML += commentTemplateHTML

}
