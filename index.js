function createPost(){
  var pageTemplate = _.template(document.getElementById('page-template').innerHTML);
  var postTemplate = _.template(document.getElementById('post-template').innerHTML);
  var commentsTemplate = _.template(document.getElementById('comments-template').innerHTML);
}

function postComment(){
  var commenterName = _.template(document.getElementById('commenterName').innerHTML);
  var comment = _.template(document.getElementById('comment').innerHTML);
}


var postTitle = document.getElementById('postTitle').value;

var postAuthor = document.getElementById('postAuthor').value;

var post = document.getElementById('post').value;
