function createPost(){
  // get templates function
   let pageTemplate = _.template(document.getElementById("page-template").innerHTML);
   let postTemplate = _.template(document.getElementById("post-template").innerHTML);
   let commentTemplate = _.template(document.getElementById("comments-template").innerHTML);
  //get blog values

  let postTitle = document.getElementById("postTitle").value;
  let postAuthor = document.getElementById("postAuthor").value;
  let postBody = document.getElementById("postBody").value;
  let main = document.querySelector("main");

  let postFn = postTemplate({'title': postTitle, 'author': postAuthor })
  main.innerHTML += postFn;
  let commentSection = commentTemplate();
  main.innerHTML += commentSection;

}

function postComment() {
  let commentTemplate = _.template(document.getElementById("comment-template").innerHTML);
  let commentText = document.getElementById("commentText").value;
  let commenterName = document.getElementById("commenter").value;

  let commentsSection = document.getElementById("comments");
  commentsSection.innerHTML += commentTemplate({ 'commenter': commenterName, 'comment': commentText });
} 



   // get blog values




