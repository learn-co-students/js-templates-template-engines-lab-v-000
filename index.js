function createPost() {
    
    
    let pageTemplate = _.template(document.getElementById("page-template").innerHTML)
    let postTemplate = _.template(document.getElementById("post-template").innerHTML)
    let commentsTemplate = _.template(document.getElementById("comments-template").innerHTML)
    
    let title = document.getElementById('postTitle').value
    let body = document.getElementById('postBody').value
    let author = document.getElementById('postAuthor').value
    
    document.getElementsByTagName("main")[0].innerHTML += pageTemplate()
    
    let actualPost = postTemplate({ 'title': title, 'body': body, 'author':author })
    let postDiv = document.getElementById('post')
    let commentsSection = commentsTemplate()
    
    postDiv.innerHTML = actualPost
    postDiv.getElementsByTagName('footer')[0].innerHTML = commentsSection
    
}

function postComment() {
    
    let commentTemplate = _.template(document.getElementById('comment-template').innerHTML)
    let name = document.getElementById('commenter').value
    let comment = document.getElementById('commentText').value
    document.getElementById("comments").innerHTML += commentTemplate( { 'comment': comment, 'test': commenter } )
    
}