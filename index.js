
function createPost() {
  // define templates before other pieces

  const pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  const postTemplate = _.template(document.getElementById("post-template").innerHTML);
  const commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);


  // pull items you'd like to use as variables from their form input ids

  const postTitle = document.getElementById("postTitle").value
  const postAuthor = document.getElementById("postAuthor").value
  const post = document.getElementById("postBody").value


  // add them to the html on the page through the "main" tag
  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();

  // pushing content from the post form into variables
  const postDiv = postTemplate({'title': postTitle, 'body': post, 'author': postAuthor})
  const commentsDiv = commentsTemplate();
  const postElement = document.getElementById("post");

  // before this point, the postElement just equalled the div with an id of "post"
  // the line of code below fills that id with the postDiv's content, generated into a post form through the postTemplate defined at the top of the function
  postElement.innerHTML = postDiv;
  // this is appending to the post element (once it exists, you can't see the comments form before)
  // the comments form and existing comments to the first existence of "footer" within the div with the id of "post"
  postElement.getElementsByTagName("footer")[0].innerHTML = commentsDiv
}


// add comment to existing comments div
function postComment() {
  const commentTemplate = _.template(document.getElementById("comment-template").innerHTML)

  // save input data from comment form into variables
  const commenter = document.getElementById("commenterName").value
  const comment = document.getElementById("commentText").value

  // append variables (non destructively) into existing commentsDiv via the commentTemplate defined at the beginning of the function
  const commentsDiv = document.getElementById("comments")
  commentsDiv.innerHTML += commentTemplate({'commenter': commenter, 'comment': comment})
}
