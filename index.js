function createPost() {
    let pageTemplate = _.template(document.getElementById("page-template").innerHTML);
    let postTemplate = _.template(document.getElementById("post-template").innerHTML);
    let commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);

    let postTitle = _.template(document.querySelector("input[name='postTitle']").value);
    let postBody = _.template(document.querySelector("input[name='postBody']").value);
    let postAuthor = _.template(document.querySelector("input[name='postAuthor']").value);

    document.getElementsByTagName("main")[0].innerHTML += pageTemplate();

    let postings = postTemplate({'title': postTitle, 'body':postAuthor, 'poster': postAuthor});
    let comments = commentsTemplate();
    let postElement = document.getElementById('post');

    postElement.innerHTML = postings;
    postElement.getElementsByTagName("footer")[0].innerHTML = comments;
}
function postComment() {
    let commentTemplate = _.template(document.getElementById("comment-template").innerHTML);
  
    let commentText = document.querySelector("input[name='commentText']").value;
    let commenterName = document.querySelector("input[name='commenterName']").value;
  
    let commentsSection = document.getElementById("comments");
    commentsSection.innerHTML += commentTemplate({ 'commenterName': commenterName, 'comment': commentText });
  }