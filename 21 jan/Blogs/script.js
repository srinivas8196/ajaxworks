function loading()
{
    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange = function ()
    {
    if(this.readyState==4 && this.status ==200)
    {
        document.getElementById("demo").innerHTML=this.response;

    }
}
    xhttp.open("GET","blogs.text",true)
    xhttp.send()
}

// function loading(){
//     var xhttp= new XMLHttpRequest();
//     xhttp.onreadystatechange = function (){


//     if(this.readyState==4 && this.status==200){
//         document.getElementById("demo").innerHTML=this.response;
    
//     }
// }
//     xhttp.open("GET","blogs.text",true);
//     xhttp.send();

// }

