document.getElementById("one").addEventListener("click",print);
function print(){
    fetch("demo.txt")
    .then(resoponse => resoponse.text())
    .then(data => {console.log(data)
    document.getElementById("output").innerHTML=data})
   
}

document.getElementById("two").addEventListener("click",print2);
function print2(){
    fetch("demo.json")
    .then(resoponse => resoponse.text())
    .then(data => {console.log(data)
           let output = "";
        data.forEach(function(post){
            output += `<li> ${post.title}:${post.body}</li> `;         
        });
        document.getElementById("output").innerHTML=output
})
   
    .catch((error)=>console.error(error))
    
}