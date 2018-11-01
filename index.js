  // describe('createPost', () => {
  //     it('exists', () => {
  //       expect(createPost).toExist("Must have a function named createPost")
  //     })
  //     it('builds the proper templates', () => {
  //       var spy = expect.spyOn(window._, 'template').andCallThrough()
  //       createPost()
  //       expect(spy).toHaveBeenCalledWith(document.getElementById("page-template").innerHTML)
  //       expect(spy).toHaveBeenCalledWith(document.getElementById("post-template").innerHTML)
  //     })
  //   })
function createPost(){
  let page_template = document.getElementById("page-template").innerHTML
 
  let post_template = _.template(document.getElementById("post-template").innerHTML)
  
  document.getElementById("post-form").innerHTML +=  _.template(page_template)()
  document.getElementById("post-form").innerHTML += _.template(post_template)()
}

// describe('postComment', () => {
//       it('exists', () => {
//         expect(postComment).toExist("Must define a function named postComment")
//       })
//       it('builds the proper templates', () => {
//         createPost()
//         var spy = expect.spyOn(window._, 'template').andReturn(function(){})
//         postComment()
//         expect(spy).toHaveBeenCalledWith(document.getElementById("comment-template").innerHTML)
//       })
//     })
function postComment(){
  let comment_template = document.getElementById("comment-template").innerHTML 
  let comments_template = document.getElementById("comments-template").innerHTML 
  document.getElementById("post-form").innerHTML += _.template(comment_template)() 
  document.getElementById("post-form").innerHTML += _.template(comments_template)()
}