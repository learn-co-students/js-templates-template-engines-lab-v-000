function createPost(event) {
  // guarding against undefined event in tests
  event && event.preventDefault()
  const postTitle = document.getElementById('postTitle').value
  const postAuthor = document.getElementById('postAuthor').value
  const postBody = document.getElementById('postBody').value

  const postTemplateString = document.getElementById('post-template').innerHTML
  const pageTemplateString = document.getElementById('page-template').innerHTML

  const produceHTMLForPostFn = _.template(postTemplateString)
  const produceHTMLForPageFn = _.template(pageTemplateString)

  const finishedPostHTML = produceHTMLForPostFn({
    title: postTitle,
    body: postBody,
    author: postAuthor
  })

  document.getElementsByTagName('main')[0].innerHTML = finishedPostHTML
  return false
}

function postComment() {
  // const commenterName = document.getElementById('commenterName').value
  // const commentText = document.getElementById('commentText').value

  const commentTemplateString =
    document.getElementById('comment-template').innerHTML

  //create template function
  const templateFn = _.template(commentTemplateString)
  //
  // const commentsDiv = document.getElementById('comments')
  //
  // const templateHTML = templateFn({
  //   comment: commentText,
  //   commenter: commenterName
  // })
  //
  // 
  // commentsDiv.innerHTML += templateHTML
}
