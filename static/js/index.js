
let cart = [];

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
        
        addToCart();
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
            <button class="add-to-cart">ADD</button>   
        </div> 
            
    `;
}


function addToCart() {
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function(event) {

            // Get the parent element of the button (the item container)
            const itemElement = event.target.closest('.items'); 
            const quantityInput = itemElement.querySelector('.quantity-input');

            // Navigate to the item name and price
            const itemName = itemElement.querySelector('.item-name').textContent;
            const itemQuantity = itemElement.querySelector('.quantity-input').value;
            const itemPrice = itemElement.querySelector('.item-price').textContent;
            floatPrice = parseFloat(itemPrice.replace('$', ''));

            console.log(typeof floatPrice);
            cart.push({'name': itemName, 'qty':itemQuantity, 'price': floatPrice})

            tBody = document.getElementById('cart-items').getElementsByTagName('tbody')[0];

            tBody.innerHTML += createTableRecord(itemName, itemQuantity, itemPrice);
            totalPrice = 0;
            cart.forEach(item => {
                totalPrice += (item.price * item.qty);
            });

            const tFoot = document.getElementsByTagName('tfoot')[0];
            tFoot.querySelector('td:last-child').textContent = `$${totalPrice}`;

            quantityInput.value = 1;
           
        })
    })
}

function createTableRecord(item, qty, price){
    return `
        <tr>
            <td>${item}</td>
            <td>${qty}</td>
            <td>${price}</td>
        </tr>
    `;
}

function placeOrder(){
    totalPrice = 0;
    cart.forEach(item => {
        totalPrice += (item.price * item.qty);
    });

    document.getElementById('category-heading').style.display = 'none';
    document.getElementById('items-section').style.display = 'none';
    document.getElementById('cart-section').style.display = 'none';

    confirmationSection = document.getElementById('confirmation-section');
    confirmationSection.style.display = 'flex';
    confirmationSection.style.justifyContent = 'center';
    confirmationSection.style.alignItems = 'center';
    confirmationSection.style.flexDirection = 'column';
    
    confirmationSection.innerHTML = `
        <div>Congratulations! You have successfully placed the order.</div>
        <div>Your order total is $${totalPrice.toFixed(2)}</div>
    `;

}




