function createPost() {

    let body = document.getElementById('postBody').value;
    let author = document.getElementById('postAuthor').value;

    let main = document.querySelector('main')

    let pageTemplate = document.getElementById('page-template').innerHTML;
    let postTemplate = document.getElementById('post-template').innerHTML;
    let commentsTemplate = document.getElementById('comments-template').innerHTML;

    let templatePageFn = _.template(pageTemplate);
    let templatePostFn = _.template(postTemplate);

    main.innerHTML += pageTemplate

    let postDiv = document.getElementById('post');

    let templatePostHTML = templatePostFn({ postBody: body, postAuthor: author });
    

    postDiv.innerHTML += templatePostHTML;
    postDiv.innerHTML += commentsTemplate

    
}

function postComment() {
    let commenter = document.getElementById('commenterName').value;
    let comment = document.getElementById('commentText').value;

    let commentTemplate = document.getElementById('comment-template').innerHTML;
    
    //create template function
    let templateFn = _.template(commentTemplate);
    
    let commentsDiv = document.getElementById('comments');
    
    //execute template function with JSON object for the interpolated values
    let templateHTML = templateFn({ comment: comment, commenter: commenter });
    
    //append rather than replace!
    commentsDiv.innerHTML += templateHTML;
}