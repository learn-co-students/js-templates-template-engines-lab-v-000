function createPost() {
    // event.preventDefault();
    let main = document.querySelector('main');
    let postTitle = document.getElementById('postTitle').value;
    let postAuthor = document.getElementById('postAuthor').value;
    let postBody = document.getElementById('postBody').value;

    let postTemplate = document.getElementById('post-template').innerHTML;
    let templateFn = _.template(postTemplate);

    let pageTemplate = document.getElementById('page-template').innerHTML;
    let ptemplateFn = _.template(pageTemplate);
    let templateHTML = templateFn({ postTitle: postTitle, postAuthor: postAuthor, postBody: postBody });
    let commentsTemplate = document.getElementById('comments-template').innerHTML;
    let ctemplateFn = _.template(commentsTemplate);
    main.innerHTML += ptemplateFn();
    let postDiv = document.getElementById('post');
    postDiv.innerHTML += templateHTML;

    main.innerHTML += commentsTemplate;

}

function postComment() {
    let commenter = document.getElementById('commenterName').value;
    let comment = document.getElementById('commentText').value;

    //create template string
    let commentTemplate = document.getElementById('comment-template').innerHTML;
    //create template function
    let templateFn = _.template(commentTemplate);

    let commentsDiv = document.getElementById('comments');

    // execute template function with JSON object for the interpolated values
    let templateHTML = templateFn({ comment: comment, commenter: commenter });

    //append, dont replace!
    commentsDiv.innerHTML += templateHTML;
}