const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')

let win


function createWin() {

    //create a new window
    win = new BrowserWindow({width: 800, height: 600, icon:__dirname+'/img/sysinfo.png'})

    //load html file
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }))


    //open devtools
    win.webContents().openDevTools()

    win.on('closed', () => {
        win = null
    })
}


app.on('ready', createWin)


//quit when window is closed
app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') {

    }})