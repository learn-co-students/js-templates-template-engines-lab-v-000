function createPost(){
let title = document.getElementById("postTitle").value
let postText = document.getElementById("postText").value
let author = document.getElementById("postAuthor").value

let postTemplate = document.getElementById("post-template").innerHTML
let templateFn = _.template(postTemplate)

let postsDiv = document.getElementById("posts")

let templateHTML = templateFn({title: title, postText: postText, author: author})

postsDiv.innerHTML += templateHTML
  }
