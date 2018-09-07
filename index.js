function createPost() {
  // create template functions
  var pageTemplateFn = _.template(document.getElementById("page-template").innerHTML);
  var postTemplateFn = _.template(document.getElementById("post-template").innerHTML);
  var commentsTemplateFn = _.template(document.getElementById("comments-template").innerHTML);
  // document.getElementById("page-template") is <script id="page-template"...></script>
  // document.getElementById("page-template").innerHTML is this string of HTML inside the above <script>:
  // "
  //    <div id="sidebar"></div>
  //    <div id="post"></div>
  //  "
  // Pass this string to _.template() Lodash function as its argument
  // to convert the string into function stored in pageTemplateFn
  // ---
  // document.getElementById("post-template") is <script id="post-template" type="text/x-lodash-template">...</script>
  // document.getElementById("post-template").innerHTML returns this HTML string found inside above <script>:
  // "
  //    <article>
  //      <header><h2><%- title %></h2></header>
  //      <p><%- body %></p>
  //      <footer><%- author %></footer>
  //    </article>
  //  "
 // Pass the above HTML string as argument of _.template() Lodash function,
 // to convert this string into the function stored in postTemplateFn
 // postTemplateFn(JSON object) will be invoked w/ JSON object argument where
 // the keys are the variable names (title, body, author) used within <%- %> delimiters
 // and corresponding values are the string values submitted in form field <input>s,
 // stored in variables postTitle, postBody and postAuthor, respectively
  // get blog values
  var postTitle = document.getElementById("postTitle").value;
  var postAuthor = document.getElementById("postAuthor").value;
  var postBody = document.getElementById("postBody").value;

  document.getElementsByTagName("main")[0].innerHTML += pageTemplateFn();
// document.getElementsByTagName("main") is HTMLCollection [main] (An HTMLCollection of 1 <main> element)
// document.getElementsByTagName("main")[0] is <main>...</main> element
// document.getElementsByTagName("main")[0].innerHTML is this string HTML form inside <main> element:
// "
// <form id="post-form" onsubmit="createPost();return false;">
//   Title: <input type="text" id="postTitle"><br>
//   Author: <input type="text" id="postAuthor"><br>
//   Body: <input type="text" id="postBody"><br>
//   <input type="submit">
// </form>
//    "
// To which we append the invocation of pageTemplateFn(), i.e., the string:
// "
//    <div id="sidebar"></div>
//    <div id="post"></div>
//  "
//
  var blogSection = postTemplateFn({ 'title': postTitle, 'body': postBody, 'author': postAuthor });
  // blogSection stores HTML string of a post's info w/ values inserted from form submission, e.g.,
  // "
  //    <article>
  //      <header><h2>THE TITLE SUBMITTED IN FORM</h2></header>
  //      <p>THE POST BODY SUBMITTED IN FORM</p>
  //      <footer>Posted by: THE AUTHOR SUBMITTED IN FORM</footer>
  //    </article>
  //  "
  var commentsSection = commentsTemplateFn();
  // commentsSection stores string HTML:
  // "
  //    <div id="comments">
  //      <form onsubmit="postComment();return false;">
  //        Name: <input type="text" id="commenterName"><br>
  //        Comment: <input type="text" id="commentText"><br>
  //        <input type="submit">
  //      </form>
  //    </div>
  //  "
  var postDiv = document.getElementById("post");
  // postDiv stores <div id="post"></div>

  postDiv.innerHTML = blogSection;
  // blogSection (lines 55-61 above) is string HTML found inside <div id="post">
  postDiv.getElementsByTagName("footer")[0].innerHTML = commentsSection;
}

function postComment() {
  // create comment template function
  var commentTemplateFn = _.template(document.getElementById("comment-template").innerHTML);
  // store the string values submitted in the form field <input>s of the form to create a new comment
  var commenterName = document.getElementById("commenterName").value;
  var commentText = document.getElementById("commentText").value;
  // store the <div id="comments"></div> (container for all comments on a post) in the variable commentsSection
  var commentsSection = document.getElementById("comments");
  commentsSection.innerHTML += commentTemplateFn({ 'text': commentText, 'commenter': commenterName });
}

// document.getElementById("comment-template") is <script id="comment-template" type="text/x-lodash-template">...</script>
// document.getElementById("comment-template").innerHTML is the string inside the above <script...>:
// "
//    <div>
//      <p><%- text %></p>
//      <footer>Posted by: <%- commenter %></footer>
//    </div>
// "
// The above string is passed in as the argument of _.template() Lodash function,
// to convert this string into the function stored in commentTemplateFn variable
// commentTemplateFn(JSON object) can be invoked with JSON object argument,
// where the keys are the names of the variables (text and commenter) found between the <%- %> delimiters
// and the corresponding values are the strings submitted in the commentText and commenterName form field <input>s,
// stored in commentText and commenterName variables, respectively
// Invoking commentTemplateFn({ 'text': commentText, 'commenter': commenterName });
// returns the HTML string above (lines 94-99) but w/ values inserted from form submission
// So every time a new comment is added, we append an HTML string with that comment's info
// to the HTML string inside <div id="comments">, which stores all comments on the post
