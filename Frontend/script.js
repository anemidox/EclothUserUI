const phace2 = document.getElementById('phace2');

fetch('https://fakestoreapi.com/products/1')
  .then(res => res.json())
  .then(json => {
    const buttonHTML = `
      <button class="dynamic-button">
        <img src="${json.image}" alt="${json.title}" />
        <h2>${json.title}</h2>
      </button>
    `;

    phace2.innerHTML = buttonHTML;
    
    const dynamicButton = document.querySelector('.dynamic-button');
    dynamicButton.addEventListener('click', function() {
      // Handle button click event
      alert('Button clicked!');
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });
