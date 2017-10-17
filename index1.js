function createPost(){

  let pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  let postTemplate = _.template(document.getElementById("post-template").innerHTML);
  let commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);

  let postTitle = document.getElementById("postTitle").value
  let postAuthor = document.getElementById("postAuthor").value
  let postBody = document.getElementById("postBody").value
 
  document.getElementsByTagName("main")[0].innerHTML += pageTemplate()
  let dataPairs = postTemplate({ 'postTitle': postTitle, 'postAuthor': postAuthor, 'bodyBody': postBody })
  let commentsSection = commentsTemplate()  
  let postDiv = document.getElementById('post')

  postDiv.innerHTML = dataPairs 
  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();
}


function postComment(){
  debugger
  
  let commentTemplate = _.template(document.getElementById('comment-template').innerHTML)
debugger

  let commentText = document.getElementById("commentText").value
  let commenterName = document.getElementById("commenter").value
  
  let commentsDiv = document.getElementById('comments')

  commentDiv.innerHTML += commentTemplate({ 'comment': comment, 'commenter': commenter })
} 