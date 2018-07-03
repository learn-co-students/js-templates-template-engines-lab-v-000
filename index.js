function createPost() {

  // Get the data submitted by the form
  var title = document.getElementById("postTitle").value;
  var body = document.getElementById("postBody").value;
  var author = document.getElementById("postAuthor").value;

  //Create template
  var pageTemplate = document.getElementById("page-template").innerHTML;
  var postTemplate = document.getElementById("post-template").innerHTML
  var templateFn = _.template(postTemplate);

  //Get the place where you are going to spit the html back out
  var postsDiv = document.getElementById("posts");

  //execute template function with JSON object for the interpolated values
  var templateHTML = templateFn({ 'postTitle': title, 'postBody': body, 'postAuthor': author });


  //Return the template back to the html

  postsDiv.innerHTML += templateHTML;


}
