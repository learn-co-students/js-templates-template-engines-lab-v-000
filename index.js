function createPost() {
  let title = document.getElementById('postTitle').value
  let post = document.getElementById('postBody').value
  let author = document.getElementById('postAuthor').value

  let postTemplate = document.getElementById('post-template').innerHTML

  let templateFN = _.template(postTemplate)

  templateFN({'title': title, 'post': post, 'author': author})
}
