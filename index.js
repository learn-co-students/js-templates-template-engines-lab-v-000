var createPost = () => {
    // create template functions
    const pageTemplate = _.template(document.getElementById("page-template").innerHTML);
    const postTemplate = _.template(document.getElementById("post-template").innerHTML);
    const commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);
  
    // get blog values
    const postTitle = document.getElementById("postTitle").value;
    const postAuthor = document.getElementById("postAuthor").value;
    const post = document.getElementById("postBody").value;
  
    document.getElementsByTagName("main")[0].innerHTML += pageTemplate();
  
    const blogSection = postTemplate({ 'title': postTitle, 'body': post, 'poster': postAuthor });
    const commentsSection = commentsTemplate();
    const postElement = document.getElementById("post");
  
    postElement.innerHTML = blogSection;
    postElement.getElementsByTagName("footer")[0].innerHTML = commentsSection;
}
  
function postComment() {
    const commentTemplate = _.template(document.getElementById("comment-template").innerHTML);
  
    const commentText = document.getElementById("commentText").value;
    const commenterName = document.getElementById("commenter").value;
  
    const commentsSection = document.getElementById("comments");
    commentsSection.innerHTML += commentTemplate({ 'commenter': commenterName, 'comment': commentText });
}