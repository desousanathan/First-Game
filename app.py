from flask import Flask, render_template, request, redirect, session, g, url_for
from database import get_db, close_db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_session import Session

app = Flask(__name__)
app.config["SECRET_KEY"] = 'this-is-the-secret-key'
app.config["SESSION_PERMANENT"] = True
app.config["SESSION_TYPE"] = "filesystem"
Session(app)
app.teardown_appcontext(close_db)

@app.before_request
def load_logged_in_user():
    g.user_id = session.get("user_id", None)


@app.route("/")
def index():
    leaderboard = None
    db = get_db()
    leaderboard = db.execute("""SELECT *
                             FROM leaderboard
                             ORDER BY round DESC
                             LIMIT 20;""").fetchall()
    return render_template("index.html", leaderboard=leaderboard)

@app.route("/game")
def game():
    return render_template("game.html")



@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "GET":
        return render_template("login.html")
    else:
        print("hello world")
        user_id = request.form["user_id"]
        password = request.form["password"]
        if not user_id or not password:
            return render_template("login.html", user_id_error = "All Feilds Required", password_error = "All feilds required")
        db = get_db()
        username_check = db.execute("""SELECT *
                                    FROM users
                                    WHERE user_id = ?""", (user_id, )).fetchone()
        if username_check is None:
            return render_template("login.html", user_id_error = "Username Not registered")
        elif not check_password_hash( username_check["password"], password):
                        return render_template("login.html", password_error = "Incorrect Passowed")
        else:
            session.clear()
            session["user_id"] = user_id
            session.modified = True
            return redirect(url_for("index"))

@app.route("/logout")
def logout():
    session.clear()
    session.modified = True
    return redirect( url_for("index"))

@app.route("/upgrade")
def upgrade():
    return render_template("upgrade.html") 


@app.route("/register", methods=["GET", "POST"])
def register():
    if request.method == "GET":
        return render_template("registration.html")
    else:
        db = get_db()
        check = None
        user_id = request.form["user_id"]
        password = request.form["password"]
        check_password = request.form["check_password"]
        if not user_id or not password or not check_password:
             return render_template("registration.html", user_id_error = "All feilds needed", password_error = "All feilds needed", check_password_error="All feilds needed")
        check = db.execute("""SELECT *
                           FROM users
                           WHERE user_id = ?""", (user_id, )).fetchone()
        if check:
            user_id_error = "User ID already taken"
            return render_template("registration.html", user_id_error=user_id_error)
        elif len(password) < 8:
            password_error = "Min Length is 8"
            return render_template("registration.html", password_error=password_error)
        elif password != check_password:
            check_password_error = "The Passowrds are not the same"
            return render_template("registration.html", check_password_error=check_password_error)
        else:
            db.execute("""INSERT INTO users
                       VALUES(?, ?)""", (user_id, generate_password_hash(password)))
            db.commit()
            return redirect('login')


@app.route("/store_score", methods=["GET", "POST"])
def store_score():
    if request.method == "GET":
        return render_template("storeScore.html")
    else:
        if g.user_id != None:
            score = int(request.form["score"])
            db = get_db()
            db.execute("""INSERT INTO leaderboard
                    VALUES (?, ?);""", (g.user_id, score))
            db.commit()
        return redirect( url_for("index"))