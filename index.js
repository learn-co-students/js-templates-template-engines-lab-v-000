function createPost() {
    let title = document.getElementById('postTitle').value;
    let body = document.getElementById('postbody').value;
    let author = document.getElementById('postAuthor').value;

    let pageTemplate = document.getElementById('page-template')
    
    let pageTemplateFunction = _.template(pageTemplate);

    let mainTag = document.getElementsByTagName('main')

    let pageHTML = pageTemplateFunction()
    
    mainTag.innerHTML += pageHTML;
}

function submitComment() {

}