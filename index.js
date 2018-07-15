function createPost() {
  var title = document.getElementById("postTitle")
  var author = document.getElementById("postAuthor")
  var body = document.getElementById("postBody")

  var pageTemplate = _.template(document.getElementById("page-template").innerHTML)
  var postTemplate = _.template(document.getElementById("post-template").innerHTML)
  var commentTemplate = _.template(document.getElementById("comments-template").innerHTML)

  document.getElementsByTagName("main")[0].innerHTML += pageTemplate()

  var post = postTemplate({"title": postTitle, "author": postAuthor, "body": postBody})
  var comments = commentsTemplate()
  var postContent = document.getElementById('post')

  postContent.innerHTML = post
  postContent.getElementsByTagName("footer")[0].innerHTML = comments
};

function postComment(){
    const commentTemplate = _.template(document.getElementById("comment-template").innerHTML)

    const commentText = document.getElementById("commentText").value
    const commenterName = document.getElementById("commenterName").value

    const commentsSection = document.getElementById("comments")
    commentsSection.innerHTML += commentTemplate({ 'commenter': commenterName, 'comment': commentText })
}
