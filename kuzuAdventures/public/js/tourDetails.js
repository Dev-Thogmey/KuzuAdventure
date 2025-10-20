document.addEventListener('DOMContentLoaded', () => {
  const clickable = document.querySelectorAll('.clickable');
  console.log(clickable);

  clickable.forEach((click) => {
    click.addEventListener('click', () => {
      const answer = click.nextElementSibling;

      // Toggle between collapsed and expanded
      if (answer.style.height === 'fit-content') {
        answer.style.height = '0';
      } else {
        answer.style.height = 'fit-content';
      }
    });
  });
});
