function createPost() {
    // Create Template Functions
    const pageTemplate = _.template(document.getElementById('page-template').innerHTML)
    
    const postTemplate = _.template(document.getElementById('post-template').innerHTML)
    
    const commentsTemplate = _.template(document.getElementById('comments-template').innerHTML)
    
    // Get Blog Values 
    const postTitle = document.getElementById('postTitle').nodeValue
    const postAuthor = document.getElementById('postAuthor').nodeValue
    const post = document.getElementById('postBody').nodeValue
    
    document.getElementsByTagName('main')[0].innerHTML += pageTemplate()
    
    const blogSection = postTemplate({ 'title': postTitle, 'body': post, 'poster': postAuthor });
    
    const commentsSection = commentsTemplate();
    
    const postElement = document.getElementById("post");

    postElement.innerHTML = blogSection;
    postElement.getElementsByTagName("footer")[0].innerHTML = commentsSection;
}

function postComment() {
  var commentTemplate = _.template(document.getElementById("comment-template").innerHTML);

  var commentText = document.getElementById("commentText").value;
  var commenterName = document.getElementById("commenter").value;

  var commentsSection = document.getElementById("comments");
  commentsSection.innerHTML += commentTemplate({ 'commenter': commenterName, 'comment': commentText });
}
