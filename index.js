function createPost(){
    var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
    var postTemplate = _.template(document.getElementById("post-template").innerHTML);
    var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);

    var postTitle = document.getElementById("postTitle");
    var postAuthor = document.getElementById("author");
    var post = document.getElementById("post-content");
    
    document.getElementsByTagName("main")[0].innerHTML += pageTemplate();

    var blogSection = postTemplate({'title': postTitle, 'content': post, 'author': postAuthor})
    var commentSection = commentsTemplate();
    var postElement = document.getElementById("post")

    postElement.innerHTML = blogSection;
    postElement.getElementsByTagName("footer")[0].innerHTML = commentSection;
    
}

function postComment() {
    var commentTemplate = _.template(document.getElementById("comment-template").innerHTML);
  
    var commentText = document.getElementById("commentText").value;
    var commenterName = document.getElementById("commenter").value;
  
    var commentsSection = document.getElementById("comments");
    commentsSection.innerHTML += commentTemplate({ 'commenter': commenterName, 'comment': commentText });
  }