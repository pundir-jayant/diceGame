var n1=Math.random();
n1=n1*6;
n1=Math.floor(n1)+1;

var n2=Math.random();
n2=n2*6;
n2=Math.floor(n2)+1;

switch(n1){
    case 1:
        document.querySelector(".img1").src="./images/dice1.png"
        break;
    case 2:
        document.querySelector(".img1").src="./images/dice2.png"
        break;
    case 3:
        document.querySelector(".img1").src="./images/dice3.png"
        break;
    case 4:
        document.querySelector(".img1").src="./images/dice4.png"
        break;
    case 5:
        document.querySelector(".img1").src="./images/dice5.png"
        break;
    case 6:
        document.querySelector(".img1").src="./images/dice6.png"
        break;
    }

    switch(n2){
        case 1:
            document.querySelector(".img2").src="./images/dice1.png"
            break;
        case 2:
            document.querySelector(".img2").src="./images/dice2.png"
            break;
        case 3:
            document.querySelector(".img2").src="./images/dice3.png"
            break;
        case 4:
            document.querySelector(".img2").src="./images/dice4.png"
            break;
        case 5:
            document.querySelector(".img2").src="./images/dice5.png"
            break;
        case 6:
            document.querySelector(".img2").src="./images/dice6.png"
            break;
        };




if(n1>n2){
document.querySelector("h1").innerHTML="🚩Player 1 wins"
}
else if(n2>n1){
document.querySelector("h1").innerHTML="Player 2 wins🚩"
}
else{
document.querySelector("h1").innerHTML="Draw🪐"
}