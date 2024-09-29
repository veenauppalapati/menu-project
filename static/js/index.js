
function getItems(buttonValue){

    document.getElementById("category-heading").innerHTML = buttonValue;

    fetch('/get-items', {
        method: 'POST',
        headers: {
            'ContentType': "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({category: buttonValue})
    })
    .then(response => response.json())
    .then(data => {
        const itemsSection = document.getElementById("items-section");
        itemsSection.innerHTML = '';

        data.items.forEach(item => {    
            itemsSection.innerHTML += createItem(item.name, item.price);
        });       
    })
    .catch(error => {
        console.error('Error fetching items:', error);
    })
}

function createItem(item, price){
    return `
         
        <div class="items">
            <div class="item-name">${item}</div>
            <div class="quantity-container">
                <label>Qty:</label>
                <input type="number" class="quantity-input" value="1" min="1"/>    
            </div>
            <div class="item-price">$${price}</div>
            <button>ADD</button>   
        </div> 
            
    `;
}



