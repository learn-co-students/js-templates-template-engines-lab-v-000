function createPost() {

   // '<form id="post-form">  <input type="text" id="sidebar"><br>  <input type="submit"></form>'
   let title = document.getElementById('title').value;
   let body = document.getElementById('body').value;
   let author = document.getElementById('author').value;

   let pageTemplate = document.getElementById('page-template').innerHTML
   let postTemplate = document.getElementById('post-template').innerHTML

   let commentsTemp = document.getElementById("comments-template").innerHTML

   let postTemplateFn = _.template(postTemplate);
   let pageTemplateFn = _.template(pageTemplate);

   let commentsTemplateFn = _.template(commentsTemp);

   let postTemplateHTML = postTemplateFn({ 'title': title, 'body': body, 'author': author });
   document.getElementById('main').innerHTML += pageTemplateFn();
   debugger;
   document.getElementById("post").innerHTML = postTemplateFn()
   // let commentsForm = document.getElementById('comment-template').innerHTML;
   document.getElementById('footer').innerHTML = commentsTemplateFn()
}

function postComment() {
// console.log(document.getElementById('comment'));
     // <p><%- commenter %> </p>\n      <footer><%- comment %> </footer>\n

  let commenter = document.getElementById('commenter').value;
//   console.log("hi2");
  let comment = document.getElementById('comment').value;
//
  let commentsForm = document.getElementById('comment-template').innerHTML;
  let commentDiv = document.getElementById('comments').innerHTML;

  let commentsTemplateFn = _.template(commentsForm);
  // use this to append a comment
  let commentsDivTemplateFn = _.template(commentDiv);

  let commentTemplateHTML = commentsTemplateFn({ 'commenter': commenter, 'comment': comment});
  commentDiv += commentsDivTemplateFn()


}


//   <input type="submit"></form>
