function createPost(){
    const postTitle = document.getElementById('postTitle').value;
    const postBody = document.getElementById('postBody').value;
    const postAuthor = document.getElementById('postAuthor').value;

    const postTemplateFn = _.template(document.getElementById('post-template').innerHTML);
    const postTemplateHTML = postTemplateFn({
        title: postTitle,
        body: postBody,
        author: postAuthor
    });

    const pageTemplateFn = _.template(document.getElementById('page-template').innerHTML);
    const pageTemplateHTML = pageTemplateFn({post: postTemplateHTML});

    const commentsTemplateFn = _.template(document.getElementById('comments-template').innerHTML);
    const commentsTemplateHTML = commentsTemplateFn();

    const postPageDiv = document.getElementById('postPage');
    postPageDiv.innerHTML += pageTemplateHTML;
    postPageDiv.innerHTML += commentsTemplateHTML;
}

function postComment(){
    const cName = document.getElementById('commenterName').value;
    const cText = document.getElementById('commentText').value;

    const commentTemplateFn = _.template(document.getElementById('comment-template').innerHTML);
    const commentTemplateHTML = commentTemplateFn({
        commenterName: cName,
        commentText: cText
    });

    const commentsDiv = document.getElementById('comments');
    commentsDiv.innerHTML += commentTemplateHTML;
}