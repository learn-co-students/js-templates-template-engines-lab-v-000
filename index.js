function createPost() {
  let pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  let commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);
  let postTemplate = _.template(document.getElementById("post-template").innerHTML);

  let postTitle = document.getElementById("postTitle").value;
  let postAuthor = document.getElementById("postAuthor").value;
  let postContent = document.getElementById("postContent").value;

  document.getElementsByTagName('main')[0].innerHTML += pageTemplate();

  let templateHTML = postTemplate({ 'post': postContent, 'poster': postAuthor, 'title': postTitle});
  let commentsSection = commentsTemplate();
  let postDiv = document.getElementById('post')

  postDiv.innerHTML += templateHTML;
  postDiv.getElementsByTagName("footer")[0].innerHTML += commentsSection;
  }


  function postComment() {
    let commentTemplate = _.template(document.getElementById("comment-template").innerHTML);

    let commentText = document.getElementById("commentText").value;
    let commenterName = document.getElementById("commenter").value;

    let commentsSection = document.getElementById("comments")
    commentsSection.innerHTML += commentTemplate({ 'commenter': commenterName, 'comment': commentText })
  }
