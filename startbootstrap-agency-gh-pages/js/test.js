var xhttp=new XMLHttpRequest();
    var myTableBody=document.querySelector("tbody");
    xhttp.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
        //
          let users=JSON.parse(this.responseText);
           alert(users);
          }
    }
xhttp.open("GET","test.txt");
xhttp.send();

