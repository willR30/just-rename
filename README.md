# Flask File Renamer Project

This is a Flask project that allows you to upload files, enter keywords, rename the files based on these keywords, and then download the renamed files in a `.zip` file while preserving the original extension of each file.

## Requirements

- Python 3.11.6
- GNU nano 7.2
- blinker==1.7.0
- click==8.1.7
- Flask==3.0.2
- itsdangerous==2.1.2
- Jinja2==3.1.3
- MarkupSafe==2.1.5
- Werkzeug==3.0.2

## Installation

1. Clone this repository to your local machine:

    ```bash
    git clone https://github.com/your_username/repository_name.git
    ```

2. Navigate to the project directory:

    ```bash
    cd repository_name
    ```

3. Create a virtual environment (recommended but optional):

    ```bash
    python3 -m venv venv
    ```

4. Activate the virtual environment (if created):

    - **Windows:**

        ```bash
        venv\Scripts\activate
        ```

    - **Linux/macOS:**

        ```bash
        source venv/bin/activate
        ```

5. Install project dependencies:

    ```bash
    pip install -r requirements.txt
    ```

## Execution

1. Make sure you are in the project root directory and the virtual environment is activated (if created).

2. Run the Flask application:

    ```bash
    python3 app.py
    ```

3. Open your web browser and go to `http://127.0.0.1:5000` to use the application.

## Usage

1. Upload the files you want to rename by clicking the "Select Files" button.

2. Enter the keywords separated by commas in the corresponding field.

3. Click the "Rename & Download ZIP" button to rename the files and download them in a `.zip` file.

## Contributions

Contributions are welcome! If you have suggestions for improvements, bugs to fix, or new features to add, feel free to open an issue or submit a pull request.





