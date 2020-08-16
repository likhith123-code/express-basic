const http = require('http');
const hostname = 'localhost';
const fs=require('fs') //file system for getting files
const path=require('path') //for setting the path
const port = 3000;
const server = http.createServer((req,res)=>{
    //req.url gives url of request
    console.log("request for the html page whose url is : "+req.url+" and method is : "+req.method);
    if(req.method == 'GET'){
        var fileurl;
        //if deafult host name is entered we serve index html file
        if(req.url=='/'){
            fileurl = '/index.html';
        }
        //if any other is entered we serve that file
        else{
            fileurl=req.url;
        }
        var filepath= path.resolve('./public'+fileurl); //creates full path
        const filext = path.extname(filepath);
        if(filext=='.html'){
            //checking if file existed
            fs.exists(filepath,(exists)=>{
                if(!exists){
                    res.statusCode=404;
                    res.setHeader('type','text/html');
                    res.end('<html><body>Error 404 file not found </body></html>')
                    return;
                }
                    res.statusCode=200;
                    res.setHeader('type','text/html');
                    fs.createReadStream(filepath).pipe(res);
                
            })
        }
        else{
            res.statusCode=404;
            res.setHeader('type','text/html');
            res.end('<html><body>Incorrect extension not an html page</body></html>');
            return;
        }
    }
    else{
        res.statusCode=404;
        res.setHeader('type','text/html');
        res.end('<html><body>Incorrect method of calling</body></html>');

    }

})

// server.listen(port,hostname,function_name)       starts litening incoming requests

server.listen(port,hostname,()=>{
    //use back quote only
    console.log(`Server running at http://${hostname}:${port}`)
})