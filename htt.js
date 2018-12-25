document.getElementById('button').onclick = function(){
	block2.innerHTML="";
var inp=document.getElementById('name1').value;
var xhttp = new XMLHttpRequest();
xhttp.open("GET", "https://api.openweathermap.org/data/2.5/find?q="+inp+"&units=metric&appid=f65a144af2c21696d1eba90d0e96d77a");
  
   xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let data = JSON.parse(this.responseText)
        console.log(data);
        for(var i=0;i<data.list.length;i++){
            console.log(1)
            var div=document.createElement("div")1
            div.classname="div";
            document.getElementById("block2").appendChild(div);
            div.innerHTML+="<p>"+data.list[i].name+"</p>"
            div.innerHTML+="<p>"+data.list[i].main.temp_max+"</p>"
            div.innerHTML+="<p>"+data.list[i].main.temp_min+"</p>"
            div.innerHTML+="<p>"+data.list[i].wind.speed+"</p>"
            div.innerHTML+="<p>"+data.list[i].description+"</p>"
             for(var j=0;j<data.list[i].weather.length;j++){
           	    div.innerHTML+=data.list[i].weather[j].description+"</p>"
            }
        }
    }
   }
    xhttp.send();
}


