function createPost(event) {
  event.preventDefault()
  const postTitle = document.getElementById('postTitle').value
  // const postAuthor = document.getElementById('postAuthor').value
  // const post = documentgetElementById('post').value

  const postTemplateString = document.getElementById('post-template').innerHTML

  const produceHTMLForPostFn = _.template(postTemplateString)

  const finishedPostHTML = produceHTMLForPostFn({
    title: postTitle,
    body: "body",
    author: "author"
  })

  document.getElementsByTagName('main')[0].innerHTML = finishedPostHTML
  return false;
}

// function postComment() {
//   let commenter = document.getElementById('commenterName').value;
//   let comment = document.getElementById('commentText').value;
//
//   let commentsTemplate = document.getElementById('comments-template').innerHTML;
//
//   //create template function
//   let templateFn = _.template(commentsTemplate);
//
//   let commentsDiv = document.getElementById('comments');
//
//   //execute template function with JSON object for the interpolated values
//   let templateHTML = templateFn({ comment: comment, commenter: commenter });
//
//   //append rather than replace!
//   commentsDiv.innerHTML += templateHTML;
// }
