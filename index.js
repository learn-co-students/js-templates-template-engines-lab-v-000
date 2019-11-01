function createPost()
{

  var pageTemplate = _.template(document.getElementById('page-template').innerHTML);
  var postTemplate = _.template(document.getElementById('post-template').innerHTML);
  var commentsTemplate = _.template(document.getElementById('comments-template').innerHTML);
   // getting post values
   var title = document.getElementById('title').value;
   var body = document.getElementById('body').value;
   var author = document.getElementById('author').value;

   document.getElementsByTagName("main")[0].innerHTML += pageTemplate();

   var blog = postTemplate({'title': title,'body': body,'author': author});
   var comments = commentsTemplate();
   var postDiv = document.getElementById('post')
    postDiv.innerHTML += blog;

   postDiv.getElementsByTagName('footer')[0].innerHTML = comments;
 }

function postComment()
{
   var commentTemplate = _.template(document.getElementById('comment-template').innerHTML);
   var comment = document.getElementById("comment").value;
   var commenter = document.getElementById("commenter").value;

   var commentSection = document.getElementById("comment");
   commentSection.innerHTML += commentTemplate({'comment':comment,'commenter': commenter});

}
