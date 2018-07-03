function createPost() {

  // Get the data submitted by the form
  var postTitle = document.getElementById("postTitle").value;
  var post = document.getElementById("postBody").value;
  var postAuthor = document.getElementById("postAuthor").value;

  //Create template
  var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  var postTemplate = _.template(document.getElementById("post-template").innerHTML);

  //Get the place where you are going to spit the html back out
    //this is inside the pageTemplate, the div with the id of post
  var postElement = document.getElementById("post");

  //execute template function with JSON object for the interpolated values
   var blogSection = postTemplate({ 'title': postTitle, 'body': post, 'poster': postAuthor });



  //Return the template back to the html
    postElement.innerHTML = blogSection;


}
