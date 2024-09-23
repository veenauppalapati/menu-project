# menu-project

## Project Goal

The goal of this project is to create a client-server end-to-end Python application.

## Overview

To achieve this, I will use a Python web framework to handle the server-side logic. For this project, I have chosen to work with `Flask`, a lightweight and flexible web framework.

## Tools and Technologies

1. **Python**: The primary programming language.

2. **Flask**: The web framework for building the web server.

3. **Git Bash**: Command-line interface for managing the project and running the application.

4. **Visual Studio Code (VSCode)**: The Integrated Development Environment (IDE) for writing and editing the code.

5. **Anaconda**: For managing Python packages and environments efficiently

6. **Git**: For version control and managing your project repository

7. **Heroku**: Cloud platform for deploying and hosting the web application.


## Deployment

The Flask application is deployed on Heroku and can be accessed using the following link:

[Live Application on Heroku](https://menu-flask-app-7ce3cedd0dd3.herokuapp.com/)

---


## Getting Started 

### Setting up the environment

**Step 1: Create an `environment.yml` File**

The `environment.yml` file contains a list of dependencies required for this project.

Use the following command to create a list of depenencies required for this project

```
conda env create -f environment.yml

```

**Step 2: Create the Conda Environment from `environment.yml`**

1.  Open **Git Bash** or your terminal.

2.  Navigate to your project directory

3.  Create the environment using the `environment.yml` file.


### Setting up the `.gitignore` File

To prevent unnecessary files from being tracked by Git, create a `.gitignore` file in the root directory of your project. This file will help you exclude files and directories such as virtual environments, cache files, and other temporary data.

```
# Ignore Python virtual environments
venv/
env/
.venv/

# Byte-compiled / optimized files
__pycache__/
*.py[cod]
```


### Starter Code in `app.py`

Here is the basic code to set up a simple Flask web server:

```
from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

if __name__ == "__main__":
    app.run(debug=True)

```

### Explanation

- `Flask` is imported and used to create a web application instance

- `@app.route("/")` defines the URL route for the root URL (/)

- The `hello_world()` function handles requests to thiss route and returns a simple HTML message.

- The `if__name__ == "__main__":` block ensures that the Flask development server runs only when the script is executed directly.


## Running the application

To start the Flask server: 

1.  Open Git Bash and navigate to your project directory: 

```
cd path/to/your/menu-project

```

2. Run the following command to start the application

```
python app.py

```

3. Open your web browser and visit `http://127.0.0.1:5000` to see your application in action


## Version Control with Git

### Initializing Your Git Repository

1. Navigate to your project directory:

2. Initialize a new Git repository: `git init`

3. Add all files and commit: `git add .` | `git commit -m "Initial commit"`

4. If you have a remote repository (e.g., on GitHub), link it:

```
git remote add origin https://github.com/your-username/your-repo-name.git

```

5. Push your code to GitHub:

```
git push origin main

```

## Additional Documentation

- [Changelog](docs/changelog.md)

