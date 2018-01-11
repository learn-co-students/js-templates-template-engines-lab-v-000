function createPost() {
  const pageTemplate = _.template(document.getElementById('page-template').innerHTML)
  const postTemplate = _.template(document.getElementById('post-template').innerHTML)
  const commentsTemplate = _.template(document.getElementById('comments-template').innerHTML)

  if (document.getElementsByTagName('main')[0].children[1]) {
    document.getElementsByTagName('main')[0].innerHTML = pageTemplate()
  } else {
    document.getElementsByTagName('main')[0].innerHTML += pageTemplate()
  }

debugger;
  const postObj = {
    title: document.getElementById('post-title').value,
    body: document.getElementById('post-body').value,
    author: document.getElementById('post-author').value
  }


  let postHTML = document.getElementById('post')

  postHTML.innerHTML = postTemplate(postObj)

  postHTML.getElementsByTagName('footer')[0].innerHTML += commentsTemplate()
}

function createComment() {
  const commentTemplate = _.template(document.getElementById('comment-template').innerHTML)

  const commentObj = {
    comment: document.getElementById('comment').value,
    commenter: document.getElementById('commenter').value
  }

  document.getElementById('comments').innerHTML += commentTemplate(commentObj)
}
