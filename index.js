function createPost() {
  const pageTemplate = _.template(document.getElementById('page-template').innerHTML)
  const postTemplate = _.template(document.getElementById('post-template').innerHTML)
  const commentsTemplate = _.template(document.getElementById('comments-template').innerHTML)

  if (document.getElementsByTagName('main')[0].children[1]) {
    document.getElementsByTagName('main')[0].innerHTML = pageTemplate()
  } else {
    document.getElementsByTagName('main')[0].innerHTML += pageTemplate()
  }

  const postObj = {
    title: document.getElementById('post-title').value,
    body: document.getElementById('post-body').value,
    author: document.getElementById('post-author').value
  }

  document.getElementById('post').innerHTML = postTemplate(postObj)

  // put commentsTemplate into footer

}
