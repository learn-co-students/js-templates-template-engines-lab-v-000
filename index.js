function createPost() {
  //define each value from the form
  var postTitle = document.getElementById("post-title").value;
  var postAuthor = document.getElementById("post-author").value;
  var postBody = document.getElementById("post-body").value;
   //build out all the templates going inside the main tag
   var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
   var postTemplate = _.template(document.getElementById("post-template").innerHTML);
   var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);
   //these now are called with ();

   //push the page template into the main tag (X overwrite)
   document.getElementsByTagName("main")[0].innerHTML += pageTemplate();
   var postElement = document.getElementById("post");
   //filling out post template with the values returned above
   var postSection = postTemplate({'title': postTitle, 'body': postBody, 'author': postAuthor});
   //creating a comments form template that should come after the post
   //var commentsSection = commentsTemplate();
   //defining a post so that now we can push post section & comments form


   postElement.innerHTML = postSection;
   postElement.getElementsByTagName("footer")[0].innerHTML = commentsTemplate();
 }

 function postComment() {
   let comment = document.getElementById("comment").value;
   let commenter = document.getElementById("commenter").value;

    let commentTemplate = _.template(document.getElementById("comment-template").innerHTML);

    let commentHTML = commentTemplate({'comment': comment,'commenter': commenter});

    let commentsDiv = document.getElementById("comments");

    commentsDiv.innerHTML += commentHTML;
  }
