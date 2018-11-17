function createPost() {
  let postTitle = document.getElementById('titleName')
  let postAuthor = document.getElementById('authorName')
  let postText = document.getElementById('postText')

  let postTemplate = document.getElementById('post-template').innerHTML;

  let templateFn = _.template(postTemplate)

  let page = document.getElementById('page-template').innerHTML

  let templateHTML = templateFn({postTitle: postTitle, postAuthor: postAuthor, postText: postText})

  page.innerHTML += templateHTML
}

function postComment() {

}
