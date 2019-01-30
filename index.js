function createPost(){
    let page = document.getElementById('page-template').nodeValue
    let post = document.getElementById('post-template').value

    let postTemplate = document.getElementById('post-form').innerHTML;

    let templateFn =_.template(postTemplate);

    let templateHTML = templateFn({comment: comment, commenter: commenter});

}