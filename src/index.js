const init = () => {
  const inputForm = document.querySelector('form');

  //event listener on the text bar
  inputForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = document.querySelector('input#searchByID');
    // this is a comment for testing learn gem

    //pointing to where to grab the information on server
    fetch(`http://localhost:3000/movies/${input.value}`)
    .then(response => response.json())
    .then(data => {

      //pointing to where to place info so client can see
      const title = document.querySelector('section#movieDetails h4');
    const summary = document.querySelector('section#movieDetails p');

    //changing the elements based on retrieved data
    title.innerText = data.title;
    summary.innerText = data.summary;
    });
  });
}

document.addEventListener('DOMContentLoaded', init);

