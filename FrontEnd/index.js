// Simple Get Request function.
helloRequst = (theURL) => {
    console.log('Hello World 02'); 
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theURL), () => {
        print("Get Failed");
    };   
    xmlHttp.send(null);
    return xmlHttp.responseText; 
}

helloRequst('http://localhost:5000'); // Call the request.

