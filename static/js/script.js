
var categoryForm = document.getElementById("category-form");
var categorySection = document.getElementById("category-section");
var categorySectionOutput = document.getElementById("category-section-output");
var resetButton = document.querySelector('input[type="reset"]')



// When submit button in input is hit
// set display of category-section div to hidden

categoryForm.addEventListener('submit', function(event) {
    event.preventDefault();


    const checkboxes = document.querySelectorAll('input[name="category"]:checked');
    selectedCategoies = [];
    checkboxes.forEach((checkbox) => {
        selectedCategoies.push(checkbox.value);

    })

    
    selectedCategoies.forEach((category) => {
        categoryDiv = document.createElement('div');
        categorySectionOutput.append(categoryDiv);
        categoryDiv.append(`You selected ${category}`);
        
    })

    console.log("Form submitted and category section is now hidden");
    
});


resetButton.addEventListener('click', function(){
    categorySectionOutput.innerHTML = "";
})
