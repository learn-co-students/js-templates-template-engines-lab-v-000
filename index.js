function createPost(){
  let postTitle = document.getElementById('postTitle').value
  let postContent = document.getElementById('postContent').value
  let postAuthor = document.getElementById('postAuthor').value

  let postFn = _.template(document.querySelector('#post-template').innerHTML)
  let postHTML = postFn({header:postTitle, content:postContent, footer:postAuthor})

  let pageFn = _.template(document.querySelector('#page-template').innerHTML)
  let pageHTML= pageFn()

  let commentsFn = _.template(document.querySelector('#comments-template').innerHTML)
  let commentsHTML = commentsFn()

  let main = document.getElementById('post-hold')
  main.innerHTML += pageHTML

  let postDiv = document.getElementById('post')
  postDiv.innerHTML += postHTML
  postDiv.innerHTML += commentsHTML
}

function postComment(){
  let commenterName = document.getElementById('commenterName').value
  let commentText = document.getElementById('commentText').value

  let commentFn = _.template(document.querySelector('#comment-template').innerHTML)
  let commentHTML = commentFn({comment: commentText, commenter: commenterName})

  let commentsDiv = document.getElementById('comments')
  commentsDiv.innerHTML += commentHTML

}
