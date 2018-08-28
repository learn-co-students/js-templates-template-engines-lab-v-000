function postComment() {
    //create template function
    const commentTemplate = _.template(document.getElementById("comment-template").innerHTML);

    // grab raw data
    const commenter = document.getElementById("commenterName").value;
    const comment = document.getElementById("commentBody").value;
   
        
    // Comments Section to attach to
    const commentsDiv = document.getElementById("comments");
   
    //execute template function with JSON object for the interpolated values
    var templateHTML = templateFn({ 'comment': comment, 'commenter': commenter });
   
    //append rather than replace!
    commentsDiv.innerHTML += templateHTML;
  }

  //submitting the form should create the page template with the post inside of it
  function createPost(){
        
    //create template functions (page, post, comments)
    const pageTemplate = _.template(document.getElementById("page-template").innerHTML);
    const postTemplate = _.template(document.getElementById("post-template").innerHTML)
    const commentsTemplate = _.template(document.getElementById("comments-template").innerHTML)

    // grab raw data
    // post raw data ONLY
    const title = document.getElementById("postTitle").value
    const author = document.getElementById("postAuthor").value
    const body = document.getElementById("postBody").value

        
    // Define Section to Append HTML to
    //post appendage
    const pageSection = document.getElementsByTagName("main")[0]
    const postSection = document.getElementById("post")
    const commentSection = document.getElementsByTagName("footer")[0].innerHTML

    //execute all template functions    
    const pageHTML = pageTemplate()
    const postHTML = postTemplate({'title': title, "author": author, "body": body})
    const commentsHTML = commentsTemplate()


    //append rather than replace!
    pageSection.innerHTML += pageHTML;
    postSection.innerHTML += postHTML;
    commentSection.innerHTML += commentsHTML;

      
  }