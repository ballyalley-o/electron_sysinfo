import subprocess
from 'flask'
import Flask

app = Flask(__name__)


@app.route('/')
def index():
    p = subprocess.Popen("ifconfig | awk '/inet addr/{print substr($2,6)}'", shell=True, stdout=subprocess.PIPE)
    out, err = p.communicate()
    return out

if __name__ == '__main__':
    app.run(debug=True)