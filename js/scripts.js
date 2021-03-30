function getJson() {
    var myReaquest=new XMLHttpRequest();
    myReaquest.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
         var users=JSON.parse(this.responseText);
         document.getElementById("titdrone").innerHTML=users[0].titre;
        document.getElementById("date").innerHTML=users[0].date;
        document.getElementById("tag").innerHTML=users[0].tags;
        document.getElementById("lien").innerHTML=users[0].lien;
        document.getElementById("ap1").innerHTML=users[0].aprenants[0];
        document.getElementById("ap2").innerHTML=users[0].aprenants[1];

        
        document.getElementById("tit1").innerHTML=users[1].titre;
        document.getElementById("date1").innerHTML=users[1].date;
        document.getElementById("tag1").innerHTML=users[1].tags;
        document.getElementById("lien1").innerHTML=users[1].lien;
        document.getElementById("ap11").innerHTML=users[1].aprenants[0];
        document.getElementById("ap21").innerHTML=users[1].aprenants[1];

        
        document.getElementById("tit2").innerHTML=users[2].titre;
        document.getElementById("date2").innerHTML=users[2].date;
        document.getElementById("tag2").innerHTML=users[2].tags;
        document.getElementById("lien2").innerHTML=users[2].lien;
        document.getElementById("ap12").innerHTML=users[2].aprenants[0];
        document.getElementById("ap22").innerHTML=users[2].aprenants[1];


        document.getElementById("tit3").innerHTML=users[3].titre;
        document.getElementById("dat3").innerHTML=users[3].date;
        document.getElementById("tag3").innerHTML=users[3].tags;
        document.getElementById("lien3").innerHTML=users[3].lien;
        document.getElementById("ap13").innerHTML=users[3].aprenants[0];
        document.getElementById("ap23").innerHTML=users[3].aprenants[1];

        document.getElementById("tit4").innerHTML=users[4].titre;
        document.getElementById("dat4").innerHTML=users[4].date;
        document.getElementById("tag4").innerHTML=users[4].tags;
        document.getElementById("lien4").innerHTML=users[4].lien;
        document.getElementById("ap14").innerHTML=users[4].aprenants[0];
        document.getElementById("ap24").innerHTML=users[4].aprenants[1];


        document.getElementById("tit5").innerHTML=users[5].titre;
        document.getElementById("dat5").innerHTML=users[5].date;
        document.getElementById("tag5").innerHTML=users[5].tags;
        document.getElementById("lien5").innerHTML=users[5].lien;
        document.getElementById("ap15").innerHTML=users[5].aprenants[0];
        document.getElementById("ap25").innerHTML=users[5].aprenants[1];




        
        }
    }
    myReaquest.open("GET","./users.json");
    myReaquest.send();
}
getJson();

function add() {
   document.getElementById("button1").style.display="none";
   document.getElementById("parag").style.display="block";
   document.getElementById("moins1").style.display="block";
}
function moins() {
    document.getElementById("button1").style.display="block";
    document.getElementById("parag").style.display="none";
    document.getElementById("moins1").style.display="none";
 }

 //function rech(){
   // var tit=document.getElementById("search");
    //if(users[0]==tit){
        //document.getElementById("1").innerHTML=users[0].titre;
        //document.getElementById("2").innerHTML=users[0].date;
        //document.getElementById("3").innerHTML=users[0].tags;
        //document.getElementById("4").innerHTML=users[0].lien;
        //document.getElementById("5").innerHTML=users[0].aprenants[0];
        //document.getElementById("6").innerHTML=users[0].aprenants[1];
   // }
 //}
