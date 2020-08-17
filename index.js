const express=require('express') //getting express
const hostname="localhost"
const port = 3000;
const morgan=require('morgan');
const http=require('http') //using http 
const app=express(); //create new express server
app.use(morgan('dev')); //use morgan and in it dev type
app.use(express.static(__dirname+'/public'));  
// it will serve static pages : first page is index if we change we get other pages.
//if any wrong page name entered it will display default one i.e. This is express server
app.use((req,res,next)=>{
    console.log(req.headers);
    res.statusCode=200;
    res.setHeader('type','html/text');
    res.end('<html><body>This is express server</body></html>');
});
const server=http.createServer(app);
server.listen(port,hostname,()=>{
    console.log(`server running at http://${hostname}:${port}`);
})
