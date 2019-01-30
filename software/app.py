from flask import Flask
from redis import Redis, RedisError
import os
import socket

# Connect to Redis
redis = Redis(host="redis", db=0, socket_connect_timeout=2, socket_timeout=2)

app = Flask(__name__)

@app.route("/")
def hello():
    try:
        visits = redis.incr("counter")
    except RedisError:
        visits = "<i>cannot connect to Redis, counter disabled</i>"

    html = "<h1>Hello!<h1>" \
    "<h2>Plz take me down<h2>" \
    "<h3>Plz take me down<h3>" \
    "<h4>Plz take me down<h4>" \
    "<h5>Plz take me down<h5>" \
    "<h6>Plz take me down<h6><br>" \
    "<b>Hostname:</b> {hostname}\</b><br/>" \
    "<b>Visits: </b>{visits}"
    return html.format(name=os.getenv("NAME", "world"), hostname=socket.gethostname(), visits=visits)

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=80)
