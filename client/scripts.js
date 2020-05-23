const getCardMarkup = (input, drinks) => (
  `<div class="small-container">
    <p class="secondary-heading">
      You like: <span class="drink-choice">${input}</span>
    </p>
    <p class="secondary-heading">
      You should try:
    </p>
    <div class="drink-row">
    ${drinks.map(drink => `
      <div class="drink-card text-center">
        <img src="${drink[1]}" class="card-image">
        <p class="tertiary-heading">
          ${drink[0]}
        </p>
      </div>
    `).join('')}
    </div>
  </div>`
);

document.getElementById('drink-form').addEventListener('submit', postData);

 function postData(event) {
    event.preventDefault();

    let input = document.getElementById('drink-input');

    let obj = {
      input: input.value
    }

    fetch('http://0.0.0.0:5000/api/', {
      method: 'POST',
      body: JSON.stringify(obj),
      headers: new Headers({
        "content-type": "application/json"
      })
    })
    .then((res) => res.json())
    .then(data => {
      console.log(data)
      const cardMarkup = getCardMarkup(data['input'], data['recs']);
      document.getElementById("search-section").innerHTML = cardMarkup;
    })
    .catch((err) => console.log(err))
}
