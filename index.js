function createPage(post) {
  // let authorName = document.getElementById('authorName').value
  // let body = document.getElementById('body').value
  // let title = document.getElementById('title').value

  let main = document.querySelector('main')
  let pageTemplate = document.getElementById('page-template').innerHTML

  let templateFn = _.template(pageTemplate)
  let templateHTML = templateFn({ post: post })

  main.innerHTML += templateHTML
}

function createPost() {
  let authorName = document.getElementById('authorName').value
  let body = document.getElementById('body').value
  let title = document.getElementById('title').value

  let postTemplate = document.getElementById('post-template').innerHTML

  let templateFn= _.template(postTemplate)
  let templateHTML = templateFn({authorName: authorName, body: body, title:title})
  createPage(templateHTML)
}

function postComment() {
  let main = document.querySelector('main')
  if (main.querySelector('#comments') != true) {
    let commentsTemplate = document.getElementById('comments-template')
    let commentsTemplateFunction = _.template(commentsTemplate)
    let commentsTemplateHTML = commentsTemplateFunction()

    main.innerHTML += commentsTemplateHTML
  }

  let commentContent = document.getElementById('comment-content')
  let commentTemplate = document.getElementById('comment-template').innerHTML
  let commentTemplateFunction = _.template(commentTemplate)
  let commentTemplateHTML = commentTemplateFunction({comment: commentContent})

  document.getElementById('comments').innerHTML += commentTemplateHTML
}
