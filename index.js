function createPost() {

    let mainHTML = document.getElementsByTagName('main');
    let pageTemplate = document.getElementById('page-template').innerHTML;
    let pageFn = _.template(pageTemplate);
        
    let title = document.getElementById('postTitle').value;
    let text = document.getElementById('postText').value;
    let author = document.getElementById('postAuthor').value;

    let postTemplate = document.getElementById('post-template').innerHTML;
    let templateFn = _.template(postTemplate);
    
    let templateHTML = templateFn({ title: title, text: text, author: author });
    let pageHTML = pageFn({ post: templateHTML});

    mainHTML.innerHTML += pageHTML;
}

function postComment() {

    let commentsTemplate = document.getElementById('comments-template').innerHTML;
    let commentsFn = _.template(commentsTemplate);

    let commentTemplate = document.getElementById('comment-template').innerHTML;
    let commentFn = _.template(commentTemplate);

    let name = document.getElementById('commenterName');
    let text = document.getElementById('commentText');

    let commentHTML = commentFn({ name: name, text: text })
    let commentsHTML = commentsFn({ comment: commentHTML })

    commentsHTML.innerHTML += commentsHTML

}