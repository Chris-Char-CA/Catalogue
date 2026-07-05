fetch('products.json')
  .then(res => res.json())
  .then(products => {
    const grid = document.getElementById('product-grid');

    products.forEach(p => {
      grid.innerHTML += `
        <div class="product-card">
          <div class="image-wrapper">
            <img src="${p.image}" alt="${p.name}">
            ${p.tag ? `<span class="tag">${p.tag}</span>` : ""}
          </div>

          <div class="info">
            <h3 class="name">${p.name}</h3>
            <p class="price">$${p.price}</p>
            <p class="colors">${p.colors} colors</p>
          </div>
        </div>
      `;
    });
  });
