function createPost(){

  //grab blog form values....
  var postTitle = document.getElementById("postTitle").value;
  var postAuthor = document.getElementById("postAuthor").value;
  var postBody = document.getElementById("postBody").value;


  //create template functions...

  var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  var postTemplate = _.template(document.getElementById("post-template").innerHTML);
  var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);

  //append the page template into the main section...
  var main = document.querySelector("main")
  main.innerHTML += pageTemplate();

 //Now that we have the page template within the main tags,
 //we should somehow execute the postTemplate with the values from our blog //form but before we do that, let's get it execution-ready.

 var blogSection = postTemplate({
   'title': postTitle,
   'body': postBody,
   'poster': postAuthor
 });

//we at some point want to include the comments template within the footer of the post template so let's get that execution-ready as well.

var commentsSection = commentsTemplate();

//Let's also grab the place in which we want to append our post which is within
//the page template's div with "post" id.
var postElement = document.getElementById("post");

//great! Now, remember that since we assigned these template functions to variables, we will actually invoke them by using the variables themselves.
//Let's go ahead and add our blogSection into the postElement
//By using blogSection, we just invoked the postTemplate function.

postElement.innerHTML = blogSection;

//Now that the blog section is within the postElement, let's add the commentsSection in the footer of our blogSection.

postElement.getElementsByTagName("footer")[0].innerHTML = commentsSection;

//we're done with our createPost() function but what do we have so far?
//we retrieved the form's values
//we created the templates for a page, a post to live in, and a comment form to live in the footer of a post.
//we appended the page template into the main tags
//we created a function called blogSection which contains a JSON object with key values that points to the values obtained from our blog form.
//we assigned our commentsTemplate to a variable called commentsSection to invoke later.
//we need a place to put our post, and commentsTemplate so we create a variable called postElement which queries for the post id that can be found within the page template that we appended earlier.
//Append the blogSection into the postElement
//Now we have a blog post on the page.
//Now we need to locate the footer within our blog post and append the commentsSection which is a template of a form for our users to fill out.

}

function postComment(){
  //let's start by retrieving the values from the comments form...
  var commenter = document.getElementById("commenter");
  var commentText = document.getElementById("commentText");

  //let's create our comment template:
  var commentTemplate = _.template(document.getElementById("comment-template").innerHTML);

  //remember that we want to place our comment within the same divs as our comments form so let's create a comment section with the comments id.
  var commentsSection = document.getElementById("comments");

  //append away.
  //notice below, we're calling the commentTemplate function with the JSON object that contains the keys from our commentTemplate and the values we retrieved from the coment form for interpolation. BAM! DONE!
  commentsSection.innerHTML += commentTemplate({
    'comment': commentText,
    'commenter': commenter
  })
}
