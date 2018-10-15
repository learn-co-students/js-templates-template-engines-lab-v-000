function postComment() {
  let commenter = document.getElementById('commenterName').value;
  let comment = document.getElementById('commentText').value;
  
  let commentTemplate = document.getElementById('comment-template').innerHTML;
  
  let templateFn = _.template(commentTemplate);

  let commentsDiv = document.getElementById('comments');
 
  let templateHTML = templateFn({ comment: comment, commenter: commenter });
 
  commentsDiv.innerHTML += templateHTML;
}

function createPost() {
  //get values
  let postTitle = document.getElementById('postTitle').value;
  let postBody = document.getElementById('postBody').value;
  let postAuthor = document.getElementById('postAuthor').value;
  
  // get templates & make them functions
  let pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  let postTemplate = _.template(document.getElementById("post-template").innerHTML);
  let commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);

  // add page template to main section
  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();

  // create a post section with submitted data and save it to a variable
  let postSection = postTemplate({ 'title': postTitle, 'body': postBody, 'poster': postAuthor });

  // select comments section 
  let commentsSection = commentsTemplate();

  // select post element
  let postElement = document.getElementById("post");

  // add newly created postSection to post element
  postElement.innerHTML = postSection;

  // add comments section to post element
  postElement.getElementsByTagName("footer")[0].innerHTML = commentsSection;

}

