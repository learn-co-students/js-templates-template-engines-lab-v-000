// THIS NEEDS TO BE UPDATED TO ALLOW FOR COMMENTS TO APPEAR RIGHT BELOW THE LAST COMMENT THAT WAS POSTED AND ORGANIZED BY COMMENTS (ie. COMMENTS RIGHT BELOW RELEVANT POST)


function createPost() {
    // VARIABLE DECLARATIONS: Grab user input from form and store in variables
    let title = document.getElementById('postTitle').value;
    let body = document.getElementById('postText').value;
    let author = document.getElementById('postAuthor').value;
    let mainTag = document.querySelector('main');

    // grab raw HTML text from the templates from lodash script file in index.html
    let pageTemplate = document.getElementById('page-template').innerHTML;
    let postTemplate = document.getElementById('post-template').innerHTML;
    let commentsTemplate = document.getElementById('comments-template').innerHTML;
    
    // use lodash to create function object to be accessed through newly declared variables
    let pageTemplateFunction = _.template(pageTemplate);
    let postTemplateFunction = _.template(postTemplate);
    let commentsTemplateFunction = _.template(commentsTemplate);

    // hold onto template functions to be called later
    let pageHTML = pageTemplateFunction();
    let postHTML = postTemplateFunction( { title: title, body: body, author: author });
    let commentsMainHTML = commentsTemplateFunction();

    // Create initial view in index...
    mainTag.innerHTML += pageHTML;  
    mainTag.innerHTML += commentsMainHTML;

    // append templates to main HTML element (execution phase)
    mainTag.querySelector('#post').innerHTML += postHTML;
}

function postComment() {
    // VARIABLE DECLARATIONS: Grab user input from form and store in variables
    let commentsDiv = document.querySelector('#comments');
    let comment = document.getElementById('comment').value;
    let commenter = document.getElementById('commenter').value;

    // grab raw HTML text from the templates from lodash script file in index.html
    let commentTemplate = document.getElementById('comment-template').innerHTML;

    // use lodash to create function object to be accessed through newly declared variable
    let commentFunction = _.template(commentTemplate);

    // hold onto template function to be called later;
    let commentHTML = commentFunction( { comment: comment, commenter: commenter });
    
    // append templates to main HTML element (execution phase)
    commentsDiv.innerHTML += commentHTML;
}


// ANSWER: 

// function createPost() {
//     // create template functions
//     var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
//     var postTemplate = _.template(document.getElementById("post-template").innerHTML);
//     var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);
  
//     // get blog values
//     var postTitle = document.getElementById("postTitle").value;
//     var postAuthor = document.getElementById("postAuthor").value;
//     var post = document.getElementById("postBody").value;
  
//     document.getElementsByTagName("main")[0].innerHTML += pageTemplate();
  
//     var blogSection = postTemplate({ 'title': postTitle, 'body': post, 'poster': postAuthor });
//     var commentsSection = commentsTemplate();
//     var postElement = document.getElementById("post");
  
//     postElement.innerHTML = blogSection;
//     postElement.getElementsByTagName("footer")[0].innerHTML = commentsSection;
//   }
  
//   function postComment() {
//     var commentTemplate = _.template(document.getElementById("comment-template").innerHTML);
  
//     var commentText = document.getElementById("commentText").value;
//     var commenterName = document.getElementById("commenter").value;
  
//     var commentsSection = document.getElementById("comments");
//     commentsSection.innerHTML += commentTemplate({ 'commenter': commenterName, 'comment': commentText });
//   }