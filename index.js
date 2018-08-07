function createPost() {
  var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);
  var postTemplate = _.template(document.getElementById("post-template").innerHTML);
  //_.template makes it a function. Without it, it's just text
  //.value below only works for single values, such as in a form and you have the value=?
  var title = document.getElementById("title").value;
  var content = document.getElementById("content").value;
  var author = document.getElementById("author").value;

  document.querySelector("main").innerHTML += pageTemplate(); //insert the template as actual html code for the basic layout

  var templateHTML = postTemplate({'title': title, 'content': content, 'author': author})
  //inserting real values into the postTemplate html
  var commentsSection = commentsTemplate(); //the () applies the html from the lodash onto the actual webpage
  var postDiv = document.getElementById("post"); //NOW this works because we did line 21! Without it, it's only a template in dodash

  postDiv.innerHTML += templateHTML
  //We're inserting the 'post-template' stuff into the actual html on the actual page!!
  postDiv.getElementsByTagName("footer")[0].innerHTML = commentsSection; //can also just use querySelector
}

function postComment() {
  var commentText = document.getElementById('commentText').value
  var commenter = document.getElementById('commenter').value

  var commentTemplate = _.template(document.getElementById("comment-template").innerHTML);

  var commentsSection = document.getElementById("comments");
  //we already put it on the page before
  commentsSection.innerHTML += commentTemplate({ 'commenter': commenter, 'comment': commentText });
  //Appending comment to comments Section on webpage
}
