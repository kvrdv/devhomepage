// project information on hover
let project = document.querySelectorAll('.project');

project.forEach((elementProject) => {
  elementProject.addEventListener('mouseenter', (overEvent) => {
    overEvent.preventDefault();
    elementProject.childNodes[1].classList.toggle('hidden');
    elementProject.childNodes[3].classList.toggle('hidden');
  });

  elementProject.addEventListener('mouseleave', (outEvent) => {
    outEvent.preventDefault();
    elementProject.childNodes[1].classList.toggle('hidden');
    elementProject.childNodes[3].classList.toggle('hidden');
  });
});
