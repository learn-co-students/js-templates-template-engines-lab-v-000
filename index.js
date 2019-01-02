function createPost(){
    const title = document.querySelector('#post-form input#title').value;
    const author = document.querySelector('#post-form input#author').value;
    const body = document.querySelector('#post-form input#body').value;

    const postTemplateHTML = document.querySelector('#post-template').innerHTML;
    const postTemplateFn = _.template(postTemplateHTML);
    const newPost = postTemplateFn({title: title, author: author, body: body});

    const commmentsTemplateHTML = document.querySelector('#comments-template').innerHTML;
    const commentsTemplateFn = _.template(commmentsTemplateHTML);
    const newComments = commentsTemplateFn({comments: []});

    const pageTemplateHTML = document.querySelector('#page-template').innerHTML;
    const pageTemplateFn = _.template(pageTemplateHTML);
    const newPage = pageTemplateFn({sidebar: newComments, post: newPost});
    let pageBody = document.querySelector('body');
    pageBody.innerHTML += newPage;
}

function postComment(){
    const authorInput = document.querySelector('#comment-form input.author');
    const contentInput = document.querySelector('#comment-form input.content');
    const author = authorInput.value;
    const content = contentInput.value;
    authorInput.value = '';
    contentInput.value = '';

    const commentTemplateHTML = document.querySelector('#comment-template').innerHTML;
    const commentTemplateFn = _.template(commentTemplateHTML);
    const newComment = commentTemplateFn({content: content, author: author})

    let commentsDiv = document.querySelector('#comments')
    commentsDiv.innerHTML += newComment;

}