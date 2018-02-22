function createPost() {
     var title = document.getElementById("postTitle").value;
     var content = document.getElementById("postContent").value;
     var author =  document.getElementById("postAuthor").value;
     
     var postTemplate = document.getElementById("post-template").innerHTML;
     var templateFn = _.template(postTemplate);
     
     var postDiv = document.getElementById("post");
     
     var templateHTML = templateFn({ 'title': title, 'body': content, 'author': author });
     postDiv.innerHTML +=templateHTML
    
}




function postComment() {
    var comment = document.getElementById("commentText").value;
    var commenter = document.getElementById("commenterName").value;
    
    var commentTemplate = document.getElementById("comment-template").innerHTML;
    var templateFn = _.template(commentTemplate);
    
    var commentDiv = document.getElementById("comments-template");
    
    
    var templateHTML = templateFn({ 'comment': comment, 'commenter': commenter});
    commentDiv.innerHTML +=templateHTML
    
}

// function postComment() {
//      var commenter = document.getElementById("commenterName").value;
//       var comment = document.getElementById("commentText").value;
     
//       //insert comment into "comments" div in this format:
//       //<div class="comment"><p>comment</p><p>Posted By: <span class="commenter">commenter</span></p></div>
     
//       //create template string - THIS IS THE ONLY LINE WE HAVE TO CHANGE
//       //var commentTemplate = '<div class="comment"><p><%= comment %></p><p>Posted By: <span class="commenter"><%= commenter %></span></p></div>';
//       var commentTemplate = document.getElementById("comment-template").innerHTML;
     
//       //create template function
//       var templateFn = _.template(commentTemplate);
     
//       var commentsDiv = document.getElementById("comments");
     
//       //execute template function with JSON object for the interpolated values
//       var templateHTML = templateFn({ 'comment': comment, 'commenter': commenter });
     
//       //append rather than replace!
//       commentsDiv.innerHTML += templateHTML;

// }
