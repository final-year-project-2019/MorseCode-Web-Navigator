
const videoCapture = ()=>{
    let {PythonShell} = require('python-shell')
    let path = require('path')
    console.log('inside videoCapture');
    alert('inside videoCapture');
    let commandLineOptions={
        scriptPath : path.join(__dirname,'/../AppEngine'),
    }
    let pyshell = new PythonShell("test.py",commandLineOptions);
    pyshell.on('message',function (message) {
        console.log("message returned from"+message)
    });
    pyshell.end(function (err) {
        if (err){
            throw err;
        }

        console.log('finished');
    });

};

document.getElementById('videoButton').addEventListener("click",videoCapture);
