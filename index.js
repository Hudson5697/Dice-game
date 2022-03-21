var random1=Math.floor(Math.random()*6)+1;
var random2=Math.floor(Math.random()*6)+1;
var image="dice"+ random1 + ".png";
var img="images/"+ image;
var image1="dice"+ random2 + ".png";
var img1="images/"+ image1;
var s1=document.querySelectorAll("img")[0];
s1=s1.setAttribute("src",img);
var s2=document.querySelectorAll("img")[1];
s2=s2.setAttribute("src",img1);
if(random1>random2)
{
	document.querySelector("h1").innerHTML="player 1 wins";
}
else if(random2>random1)
{
	document.querySelector("h1").innerHTML="player 2 wins";
}
else
{
	document.querySelector("h1").innerHTML="DRAW";
}
