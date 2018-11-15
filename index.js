function createPost() {

  // templates
  let pageTemplate = _.template(document.getElementById("page-template").innerHTML)
  let postTemplate = _.template(document.getElementById("post-template").innerHTML)
  let commentsTemplate = _.template(document.getElementById("comments-template").innerHTML)

  // get input and append the data to post-template innerHTML
  let postTitle = document.getElementById("postTitle").value
  let postAuthor = document.getElementById("postAuthor").value
  let postBody = document.getElementById("postBody").value

  // add the page template (sidebar and post divs) to the <main> tag
  // <main> is already holding the post form
  document.getElementsByTagName("main")[0].innerHTML += pageTemplate()

  // define page sections and append them to the <post div> in page template
  let postSection = postTemplate({'postTitle': postTitle, 'postBody': postBody, 'postAuthor': postAuthor})
  let commentsSection = commentsTemplate() // the form and future comments

  // get the post element in preparation to append the previous
  let postDiv = document.getElementById("post")

  // put postTemplate and post variables in the <div id="post"> in pageTemplate
  postDiv.innerHTML = postSection
  // also insert the commentsSection(the form and future comments) into the footer tag
  postDiv.getElementsByTagName("footer")[0].innerHTML += commentsSection
}

function postComment() {
  let commentTemplate = _.template(document.getElementById("comment-template").innerHTML)

  let commentText = document.getElementById("commentText").value
  let commenterName = document.getElementById("commenterName").value

  let commentSegment = commentTemplate({'commentText': commentText, 'commenterName': commenterName})

  let commentsDiv = document.getElementById("comments")

  commentsDiv.innerHTML = commentSegment
}
