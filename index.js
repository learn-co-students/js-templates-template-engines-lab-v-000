function createPost() {
    let title = document.getElementById('postTitle').value;
    let body = document.getElementById('postbody').value;
    let author = document.getElementById('postAuthor').value;

    // grab the templates from lodash script file

    let pageTemplate = document.getElementById('page-template').innerHTML;
    let postTemplate = document.getElementById('post-template').innerHTML;
    
    let pageTemplateFunction = _.template(pageTemplate);
    let postTemplateFunction = _.template(postTemplate);

    let pageHTML = pageTemplateFunction();
    let postHTML = postTemplateFunction( { title: title, body: body, author: author });


    let mainTag = document.getElementsByTagName('main')
    mainTag.innerHTML += pageHTML;
}

function postComment() {

}