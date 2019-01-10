function createPost(){
let title = document.getElementById("postTitle").value
let postText = document.getElementById("postText").value
let author = document.getElementById("postAuthor").value

let postTemplate = document.getElementById("post-template").innerHTML
let pageTemplate = document.getElementById("page-template").innerHTML
let commentsTemplate = document.getElementById("comments-template").innerHTML
let commentTemplate = document.getElementById("comment-template").innerHTML

let templateFn = _.template(postTemplate)

let postsDiv = document.getElementById("posts")

let templateHTML = templateFn({title: title, postText: postText, author: author})

postsDiv.innerHTML += templateHTML
  }


  function postComment(){
  let commentText = document.getElementById("commentText").value
  let commenterName = document.getElementById("commenterName").value

  let commentTemplate = document.getElementById("comment-template").innerHTML
  let templateFn = _.template(commentTemplate)

  let commentsDiv = document.getElementById("comments")

  let templateHTML = templateFn({commentText: commentText, commenterName: commenterName})

  commentsDiv.innerHTML += templateHTML
    }
