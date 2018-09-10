function createPost() {
  let title = document.getElementById('postTitle').value
  let post = document.getElementById('postBody').value
  let author = document.getElementById('postAuthor').value
  let pageTemplate = document.getElementById('page-template').innerHTML
  let postTemplate = document.getElementById('post-template').innerHTML
  let commentTemplate = document.getElementById('comments-template').innerHTML
  let templateComment = _.template(commentTemplate)

  let templatePage = _.template(pageTemplate)
  document.querySelector('main').innerHTML += templatePage()
  

  let templateFN = _.template(postTemplate)
  let postDiv = document.getElementById('post')
  postDiv.innerHTML = templateFN({'title': title, 'post': post, 'author': author})
  postDiv.innerHTML += templateComment()
}

function postComment() {
  var commenter = document.getElementById("commenterName").value
    var comment = document.getElementById("commentText").value

    var commentTemplate = document.getElementById("comment-template").innerHTML
    var templateFn = _.template(commentTemplate)

    var commentsDiv = document.getElementById("comments")


    var templateHTML = templateFn({ 'comment': comment, 'commenter': commenter })


    commentsDiv.innerHTML += templateHTML
}
