from flask import Flask, render_template, jsonify

import random

from repo import db

#app = Flask(__name__) #flask constructor creates a global app object, __name__ special variable, name of current file

# set the project root directory as the static folder, you can set others.
app = Flask(__name__, static_url_path='')

@app.route('/')
def root():
    return app.send_static_file('index.html')

@app.route("/getRandomQuote")
def get_random_quote():
    total=len(db)-1
    randomIndex = random.randint(0,total)
    quote=db[randomIndex]
    return quote


@app.route("/welcome")
def welcome():
    return render_template("welcome.html",
    message="this is injected message!")

@app.route("/quote")
def get_quote():
    quote=db[0]
    return render_template("quote.html", quote=quote)