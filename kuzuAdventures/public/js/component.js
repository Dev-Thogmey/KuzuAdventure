function includeHTML() {
  const includes = document.querySelectorAll('[data-include]');
  includes.forEach(el => {
    const file = el.getAttribute('data-include');
    fetch(file)
      .then(response => {
        if (!response.ok) throw new Error('Page not found');
        return response.text();
      })
      .then(data => (el.innerHTML = data))
      .catch(err => console.error('Include error:', err));
  });
}

document.addEventListener('DOMContentLoaded', includeHTML);
