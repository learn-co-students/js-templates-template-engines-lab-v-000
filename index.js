function createPost() {
  let title = document.getElementById('postTitle').value
  let body = document.getElementById('postBody').value
  let author = document.getElementById('postAuthor').value
  // expect(spy).toHaveBeenCalledWith(document.getElementById("page-template").innerHTML)
  // expect(spy).toHaveBeenCalledWith(document.getElementById("post-template").innerHTML)

  let pageTemplate = document.getElementById('page-template').innerHTML
  let pageFn = _.template(pageTemplate)
  document.getElementsByTagName("main")[0].innerHTML += pageFn();

  let postTemplate = document.getElementById('post-template').innerHTML
  let postFn = _.template(postTemplate)
  let postDiv = document.getElementById('post')
  postDiv.innerHTML = postFn({ 'title': title, 'body': body, 'author': author })

  let commentsTemplate = document.getElementById('comments-template').innerHTML
  let commentsFn = _.template(commentsTemplate)
  postDiv.innerHTML += commentsFn()
}

function postComment() {
  let commenter = document.getElementById('commenterName').value
  let comment = document.getElementById('commentText').value
  let commentTemplate = document.getElementById('comment-template').innerHTML

  let commentFn = _.template(commentTemplate)
  let commentsDiv = document.getElementById('comments')
  commentsDiv.innerHTML += commentFn({ 'comment': comment, 'commenter': commenter })
}
