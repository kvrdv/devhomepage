// read button hover effect
let post = document.querySelectorAll('.post');

post.forEach((elementPost) => {
  elementPost.addEventListener('mouseenter', (overEvent) => {
    overEvent.preventDefault();
    elementPost.classList.toggle('post-hover');
    elementPost.childNodes[1].classList.toggle('post-image-frame-hover');
    elementPost.childNodes[3].classList.toggle('post-name-hover'); 
    elementPost.childNodes[5].classList.toggle('post-tags-hover'); 
    elementPost.childNodes[7].classList.toggle('post-read-hover');    
  });

  elementPost.addEventListener('mouseleave', (outEvent) => {
    outEvent.preventDefault();
    elementPost.classList.toggle('post-hover');
    elementPost.childNodes[1].classList.toggle('post-image-frame-hover');
    elementPost.childNodes[3].classList.toggle('post-name-hover'); 
    elementPost.childNodes[5].classList.toggle('post-tags-hover');
    elementPost.childNodes[7].classList.toggle('post-read-hover'); 
  });
});
