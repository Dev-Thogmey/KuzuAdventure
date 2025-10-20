const questions = document.querySelectorAll('.que');

questions.forEach((que) => {
  que.addEventListener('click', () => {
    const answer = que.nextElementSibling;

    // Toggle between collapsed and expanded
    if (answer.style.height === 'fit-content') {
      answer.style.height = '0';
    } else {
      answer.style.height = 'fit-content';
    }
  });
});
