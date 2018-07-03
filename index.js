function createPost() {

  // Get the data submitted by the form
  var postTitle = document.getElementById("postTitle").value;
  var post = document.getElementById("postBody").value;
  var postAuthor = document.getElementById("postAuthor").value;

  //Create template function that will be called later
    //A template defines the HTML and provides places to insert data dynamically.
    //this creates a template string based on the html written inside the script corresponding to the id
    //_.template is a lodash function that turns the template string into a function
    //you call this function with a JSON argument to insert the variable values
    //the variable values are what were submitted by the form
    //By creating a function and holding it in a variable, we can execute the function over and over with different data, rather than having to rebuild the template function every time.
  var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  var postTemplate = _.template(document.getElementById("post-template").innerHTML);
  //this will create the form needed to comment on a post
  var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);


  //this gets the main DOM element and adds to it's innerHTML the page template html that is returned from the function
  //so it adds a sidebar element and a div with an id of "post"
  //the div with id of post needs to be created here/now because the next step will be to grab the element and then set it equal to a variable
   document.getElementsByTagName("main")[0].innerHTML += pageTemplate();
   document.getElementsByTagName("main")[0].innerHTML += commentsTemplate();


  //Get the place where you are going to spit the html back out
    //this is inside the pageTemplate, the div with the id of post
    //it was created by adding the pageTemplate to the main div
  var postElement = document.getElementById("post");

  //execute template function with JSON object for the interpolated values
  //the keys for the object match the variable names inside our interpolation delimiters.
  //Executing the function will return a string
  var blogSection = postTemplate({ 'title': postTitle, 'body': post, 'poster': postAuthor });



  //Return the template html back to the index file with the interpolated values inside
    //This takes the return value of calling the function created by _.template
    //(which is an html string) and puts it into the postElement
    postElement.innerHTML = blogSection;

}

function postComment() {

  //the comment template is a form that needs to be added to the page
  //after that form is submitted this function runs and keeps adding the comment data to the page

  // Get the data submitted by the form
  var commenterName = document.getElementById("commenterName").value;
  var commentText = document.getElementById("commentText").value;

  //Create template function that will be called later
  var commentTemplate = _.template(document.getElementById("comment-template").innerHTML);


  //this gets the main DOM element and adds to it's innerHTML the commentTemplate
   document.getElementsByTagName("main")[0].innerHTML += commentTemplate();

   //Get the place where you are going to spit the html back out
   var commentElement = document.getElementById("post");

};
