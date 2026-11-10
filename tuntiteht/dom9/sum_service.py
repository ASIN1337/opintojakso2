from flask import Flask, request

app = Flask(__name__)
@app.route('/hi')
def hello():
    args = request.args
    number1 = (args.get("number1"))

    response = {
        "hello world!" : number1
    }

    return response

if __name__ == '__main__':
    app.run(use_reloader=True, host='127.0.0.1', port=5000)