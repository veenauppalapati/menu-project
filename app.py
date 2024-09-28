from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

menu = {
    "Snacks": {
        "Cookie": .99,
        "Banana": .69,
        "Apple": .49,
        "Granola bar": 1.99
    },
    "Meals": {
        "Burrito": 4.49,
        "Teriyaki Chicken": 9.99,
        "Sushi": 7.49,
        "Pad Thai": 6.99,
        "Pizza": {
            "Cheese": 8.99,
            "Pepperoni": 10.99,
            "Vegetarian": 9.99
        },
        "Burger": {
            "Chicken": 7.49,
            "Beef": 8.49
        }
    },
    "Drinks": {
        "Soda": {
            "Small": 1.99,
            "Medium": 2.49,
            "Large": 2.99
        },
        "Tea": {
            "Green": 2.49,
            "Thai iced": 3.99,
            "Irish breakfast": 2.49
        },
        "Coffee": {
            "Espresso": 2.99,
            "Flat white": 2.99,
            "Iced": 3.49
        }
    },
    "Dessert": {
        "Chocolate lava cake": 10.99,
        "Cheesecake": {
            "New York": 4.99,
            "Strawberry": 6.49
        },
        "Australian Pavlova": 9.99,
        "Rice pudding": 4.99,
        "Fried banana": 4.49
    }
}

@app.route("/")
@app.route("/home")
def home():
    return render_template('home.html', menu=menu)

@app.route("/get-items", methods=["POST"])
def get_items():
    selected_category = request.form.get("category")
    items = menu[selected_category]
    item_list = [{"name": key, "price": value} if not isinstance(value, dict) else {"name": f"{key} - {subkey}", "price": subval} 
                for key, value in items.items() for subkey, subval in (value.items() if isinstance(value, dict) else [(key, value)])]

  
    return jsonify({"items": item_list})
    
    

if __name__ == "__main__":
    app.run(debug=True)
