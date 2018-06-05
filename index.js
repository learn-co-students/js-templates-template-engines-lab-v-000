function createPost() {
  var title = document.getElementById("postTitle").value
  var body = document.getElementById("postBody").value
  var author = document.getElementById("postAuthor").value
  
  var pageTemplate = document.getElementById("page-template").innerhtml
  
  var templateFn = _.template(pageTemplate)
  
  var pageDiv = document.getElementById("sidebar")
  
  var postDiv = document.getElementById("post")
  
  var templateHTML = templateFn({ 'postTitle': postTitle, 'postBody': postBody, "postAuthor": postAuthor })
  
  postDiv.innerhtml += templateHTML
  
}