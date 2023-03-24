const init = () => {
  let form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let input = e.target.searchByID.value

    fetch(`http://localhost:3000/movies/${input}`)
    .then((resp) => {
        return resp.json();
    }).then((data) => {
        const title = document.querySelector('h4');
        const summary = document.querySelector('p');

        title.innerText = data.title;
        summary.innerText = data.summary
    });
  });
};

document.addEventListener('DOMContentLoaded', init);