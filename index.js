function createPost() {
  var title = document.getElementById("postTitle").value;
  var post = document.getElementById("postBody").value;
  var author = document.getElementById("postAuthor").value;

  var postTemplate = _.template(document.getElementById("post-template").innerHTML);
  var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);

  var main = document.getElementsByTagName('main')[0].innerHTML

  main += pageTemplate()

  var post =  postTemplate({ 'title': title, 'post': post, 'author': author})

  var pageDiv  = document.getElementById("post")


  pageDiv.innerHTML = postTemplate({ 'title': title, 'post': post, 'author': author})

  pageDiv.getElementsByTagName('footer')[0].innerHTML = commentsTemplate()
}


function postComment() {

  var commenter = document.getElementById("commenterName").value;
  var comment = document.getElementById("commentText").value;


  var commentTemplate = document.getElementById("comment-template").innerHTML;

  //create template function
  var templateFn = _.template(commentTemplate);

  var commentsDiv = document.getElementById("comments");

  //execute template function with JSON object for the interpolated values
  var templateHTML = templateFn({ 'comment': comment, 'commenterName': commenter });

  //append rather than replace!
  commentsDiv.innerHTML += templateHTML;

}
