function createPost() {
    // event.preventDefault();
    let pageTemplate = _.template(document.getElementById('page-template').innerHTML);
    let postTemplate = _.template(document.getElementById('post-template').innerHTML);
    let commentsTemplate = _.template(document.getElementById('comments-template').innerHTML);

    let postTitle = document.getElementById('postTitle').value;
    let postAuthor = document.getElementById('postAuthor').value;
    let postBody = document.getElementById('postBody').value;
    let main = document.querySelector('main');

    main.innerHTML += pageTemplate();

    let blog = postTemplate({ postTitle: postTitle, postAuthor: postAuthor, postBody: postBody });
    let comments = commentsTemplate();
    let postDiv = document.getElementById('post');

    postDiv.innerHTML += blog;
    postDiv.getElementsByTagName('footer')[0].innerHTML += comments;

}

function postComment() {
    let commentTemplate = _.template(document.getElementById("comment-template").innerHTML);

    let commenter = document.getElementById('commenterName').value;
    let comment = document.getElementById('commentText').value;

    let commentsDiv = document.getElementById('comments');
    
    commentsDiv.innerHTML += commentTemplate({ comment: comment, commenter: commenter });
}