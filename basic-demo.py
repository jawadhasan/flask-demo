from flask import Flask
app = Flask(__name__) #flask constructor creates a global app object, __name__ special variable, name of current file

@app.route("/")
def welcome():
    return "Welcome to the Sample App"