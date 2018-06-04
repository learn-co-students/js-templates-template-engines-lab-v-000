function createPost(){
  var postTitle = document.getElementById("postTitle").value;
  var postAuthor = document.getElementById("postAuthor").value;
  var postBody = document.getElementById("postBody").value;
//grab values

  var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  var postTemplate = _.template(document.getElementById("post-template").innerHTML);
  var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);
//create templates
  var main = document.querySelector("main")
    main.innerHTML += pageTemplate();
//append template to main section so you don't have to keep making a new template
  var blogSection = postTemplate({
     'title': postTitle,
     'body': postBody,
     'poster': postAuthor
   });
  var commentsSection = commentsTemplate();
  var postElement = document.getElementById("post");

  postElement.innerHTML = blogSection;

  postElement.getElementsByTagName("footer")[0].innerHTML = commentsSection;

}
  function postComment(){
  //retrieve the values from the comments form...
  var commenter = document.getElementById("commenter");
  var commentText = document.getElementById("commentText");

  //create our comment template:
  var commentTemplate = _.template(document.getElementById("comment-template").innerHTML);
  var commentsSection = document.getElementById("comments");

  commentsSection.innerHTML += commentTemplate({
    'comment': commentText,
    'commenter': commenter
    })
  }
