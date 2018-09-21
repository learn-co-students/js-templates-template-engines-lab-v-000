

function createPost() {
    let pageTemplate = document.getElementById("page-template");

    let postName = document.getElementById('posted-by').value;
    let comment = document.getElementById('post').value;

    let postTemplate = document.getElementById("post-template").innerHTML;

}

function postComment() {
    let commenterName = document.getElementById('commenterName').value;
    let  comment = document.getElementById('comment').value;

    let commentTemplate = document.getElementById('comment-template').innerHTML;

    let templateFn = _.template(commentTemplate);

    let commentsDiv = document.getElementById('comments');

    let templateHTML = templateFn({'comment': comment, 'commenterName': commenterName});

    commentsDiv.innerHTML + templateHTML;
}
