//Model
var page = "Main";
var player = 1;
var player1 = 0;
var player2 = 0;
var won = 0;

var computerNumber;
var guessNumber;
var guesses=0;
var low=0;
var high=100;


updateNow();
//Controller
function clickMain()
{
    page="Main";
    updateNow();
}
function clickAbout()
{
    page="About";
    updateNow();
}
function clickGames()
{
    page="Games";
    updateNow();
}
function clickEvolutions()
{
    page="Evolutions";
    updateNow();
}
function clickDiscord()
{
    
}
function clickContact()
{
    page="Contact";
    updateNow();
}
//View
function updateNow()
{
    if(page=="Main")
    {
        resetColors();
        document.getElementById("home").style.color="#07f5e2";
        document.getElementById("main").innerHTML=`
        <div id="left">
            <img id="topLeftPic" src="images/ZMiniLogo.png">
            <p>Left</p>
        </div>
        <div id="right">
            <img id="topRightPic" src="images/ZMiniLogo.png">
            <p>Right</p>
        </div>
        `;
    }
    else if(page=="About")
    {
        resetColors();
        document.getElementById("abou").style.color="#07f5e2";
        document.getElementById("main").innerHTML=`
        <div id="one">
<h3><u>About us:</u></h3>        
<pre>
I am a Norwegian dude who likes to geek it out.
I program games, websites & I am a gamer.

Zhenis Technologies started december of 2020.

Zhenis Evolutions started getting made january 2021.
            
</pre>
        </div>
        `;
    }
    else if(page=="Games")
    {
        resetColors();
        document.getElementById("game").style.color="#07f5e2";
        document.getElementById("main").innerHTML=`
        <div id="one">
            <h1>Games</h1>
            <p><a id="evoClick" onclick="clickEvolutions()">Zhenis Evolutions<a></p>
        </div>    
        <div id="Reset" onClick="resetGame1()">Reset</div>
        <div></div>
        <p id="YouWon"></p>
        <div id="game1Main">
            <div id="G11" class="Color1" onClick="Clicked(this)">.</div>
            <div id="G12" class="Color2" onClick="Clicked(this)">.</div>
            <div id="G13" class="Color1" onClick="Clicked(this)">.</div>
            <div id="G21" class="Color2" onClick="Clicked(this)">.</div>
            <div id="G22" class="Color1" onClick="Clicked(this)">.</div>
            <div id="G23" class="Color2" onClick="Clicked(this)">.</div>
            <div id="G31" class="Color1" onClick="Clicked(this)">.</div>
            <div id="G32" class="Color2" onClick="Clicked(this)">.</div>
            <div id="G33" class="Color1" onClick="Clicked(this)">.</div>
        </div>
        <div id="game2Main">
            <div id="GuessBack">
                <button id="newGame" onClick="newGame()">New Game</button>
                <h3>Guess a number between 1 and 100</h3>
                <div id="lowHigh"></div>
                <input type="number" id="numberGuess" min="1" max="100" onchange="compareGuess()" placeholder="Number Here"></input>
                <p id="guessAnswer"> </p>
                <p>Previous answers: </p>
                <p id="previousAnswers"> </p>
                <p id="Guesses"> </p>
                
            </div>
        </div>
        `;
        newGame();
    }
    else if(page=="Evolutions")
    {
        resetColors();
        document.getElementById("evol").style.color="#07f5e2";
        document.getElementById("main").innerHTML=`
        <div id="one">
            <h1><u><i>Zhenis Evolutions</i></u></h1>
            <img id="topLeftPic" src="images/ZMiniLogo.png">
            <p>Info comming soon to a place near you!!</p>
        </div>
        `;
    }
    else if(page=="Contact")
    {
        resetColors();
        document.getElementById("cont").style.color="#07f5e2";
        document.getElementById("main").innerHTML=`
        <div id="one">
            <h1>Contact</h1>
            <p>Navn:</p><input type="text"  id="navn"  placeholder= "Ditt navn"> </input><br>
            <p>Epost:</p> <input type="email" id="epost" placeholder= "Din Epost"> </input><br>
            <p>Message:</p> <textarea type="text" id="message" placeholder= "Beskjed til oss"></textarea><br>
            <button id="submit">Send</button>
        </div>
        `;
    }
}
//Denne er til og resete knappene på header menyer
function resetColors()
{
    document.getElementById("home").style.color="teal";
    document.getElementById("abou").style.color="teal";
    document.getElementById("game").style.color="teal";
    document.getElementById("evol").style.color="teal";
    document.getElementById("cont").style.color="teal";
    document.getElementById("disc").style.color="teal";
}
//bytter når du har mus over knappen
function mouseOver(that)
{
    if(that.innerHTML=="Home")document.getElementById("home").style.color="#07f5e2";
    if(that.innerHTML=="About")document.getElementById("abou").style.color="#07f5e2";
    if(that.innerHTML=="Games")document.getElementById("game").style.color="#07f5e2";
    if(that.innerHTML=="Discord")document.getElementById("disc").style.color="#07f5e2";
    if(that.innerHTML=="Contact")document.getElementById("cont").style.color="#07f5e2";
    if(that.innerHTML=="Evolutions")document.getElementById("evol").style.color="#07f5e2";
}
//når du tar vekk musen så bytter den farge hvis ikke den er valgt.
function mouseOut(that)
{
    if(that.innerHTML=="Home" && page!="Main")document.getElementById("home").style.color="teal";
    if(that.innerHTML=="About" && page!="About")document.getElementById("abou").style.color="teal";
    if(that.innerHTML=="Games" && page!="Games")document.getElementById("game").style.color="teal";
    if(that.innerHTML=="Discord" && page!="Discord")document.getElementById("disc").style.color="teal";
    if(that.innerHTML=="Contact" && page!="Contact")document.getElementById("cont").style.color="teal";
    if(that.innerHTML=="Evolutions" && page!="Evolutions")document.getElementById("evol").style.color="teal";
}
//Dette er til spillet Game1 som er tick tack toe.
function Clicked(that)
{
    if(won==0)
    {
        if(that.innerHTML!="R" && that.innerHTML!="T")
        {
            if(player==1)
            {
                that.innerHTML="R";
                player=2;
                document.getElementById("YouWon").innerHTML="Player 2's turn";
            }
            else{
                that.innerHTML="T";
                player=1;
                document.getElementById("YouWon").innerHTML="Player 1's turn";
            }
        }
        //Check if player 1 has won
        if(document.getElementById("G11").innerHTML=="R" && document.getElementById("G12").innerHTML=="R" && document.getElementById("G13").innerHTML=="R")
        {document.getElementById("YouWon").innerHTML="Player1 WON!!"; won=1; player1+=1;}
        else if(document.getElementById("G11").innerHTML=="R" && document.getElementById("G21").innerHTML=="R" && document.getElementById("G31").innerHTML=="R")
        {document.getElementById("YouWon").innerHTML="Player1 WON!!"; won=1; player1+=1;}
        else if(document.getElementById("G11").innerHTML=="R" && document.getElementById("G22").innerHTML=="R" && document.getElementById("G33").innerHTML=="R")
        {document.getElementById("YouWon").innerHTML="Player1 WON!!"; won=1; player1+=1;}
        else if(document.getElementById("G12").innerHTML=="R" && document.getElementById("G22").innerHTML=="R" && document.getElementById("G32").innerHTML=="R")
        {document.getElementById("YouWon").innerHTML="Player1 WON!!"; won=1; player1+=1;}
        else if(document.getElementById("G13").innerHTML=="R" && document.getElementById("G23").innerHTML=="R" && document.getElementById("G33").innerHTML=="R")
        {document.getElementById("YouWon").innerHTML="Player1 WON!!"; won=1; player1+=1;}
        else if(document.getElementById("G21").innerHTML=="R" && document.getElementById("G22").innerHTML=="R" && document.getElementById("G23").innerHTML=="R")
        {document.getElementById("YouWon").innerHTML="Player1 WON!!"; won=1; player1+=1;}
        else if(document.getElementById("G31").innerHTML=="R" && document.getElementById("G32").innerHTML=="R" && document.getElementById("G33").innerHTML=="R")
        {document.getElementById("YouWon").innerHTML="Player1 WON!!"; won=1; player1+=1;}
        else if(document.getElementById("G31").innerHTML=="R" && document.getElementById("G22").innerHTML=="R" && document.getElementById("G13").innerHTML=="R")
        {document.getElementById("YouWon").innerHTML="Player1 WON!!"; won=1; player1+=1;}
        //Check if player 2 has won
        if(document.getElementById("G11").innerHTML=="T" && document.getElementById("G12").innerHTML=="T" && document.getElementById("G13").innerHTML=="T")
        {document.getElementById("YouWon").innerHTML="Player2 WON!!"; won=1; player2+=1;}
        else if(document.getElementById("G11").innerHTML=="T" && document.getElementById("G21").innerHTML=="T" && document.getElementById("G31").innerHTML=="T")
        {document.getElementById("YouWon").innerHTML="Player2 WON!!"; won=1; player2+=1;}
        else if(document.getElementById("G11").innerHTML=="T" && document.getElementById("G22").innerHTML=="T" && document.getElementById("G33").innerHTML=="T")
        {document.getElementById("YouWon").innerHTML="Player2 WON!!"; won=1; player2+=1;}
        else if(document.getElementById("G12").innerHTML=="T" && document.getElementById("G22").innerHTML=="T" && document.getElementById("G32").innerHTML=="T")
        {document.getElementById("YouWon").innerHTML="Player2 WON!!"; won=1; player2+=1;}
        else  if(document.getElementById("G13").innerHTML=="T" && document.getElementById("G23").innerHTML=="T" && document.getElementById("G33").innerHTML=="T")
        {document.getElementById("YouWon").innerHTML="Player2 WON!!"; won=1; player2+=1;}
        else if(document.getElementById("G21").innerHTML=="T" && document.getElementById("G22").innerHTML=="T" && document.getElementById("G23").innerHTML=="T")
        {document.getElementById("YouWon").innerHTML="Player2 WON!!"; won=1; player2+=1;}
        else if(document.getElementById("G31").innerHTML=="T" && document.getElementById("G32").innerHTML=="T" && document.getElementById("G33").innerHTML=="T")
        {document.getElementById("YouWon").innerHTML="Player2 WON!!"; won=1; player2+=1;}
        else  if(document.getElementById("G31").innerHTML=="T" && document.getElementById("G22").innerHTML=="T" && document.getElementById("G13").innerHTML=="T")
        {document.getElementById("YouWon").innerHTML="Player2 WON!!"; won=1; player2+=1;}
    }
}
//reset for Game1(Tick tack toe)
function resetGame1()
{
    document.getElementById("G11").innerHTML=".";
    document.getElementById("G12").innerHTML=".";
    document.getElementById("G13").innerHTML=".";
    document.getElementById("G21").innerHTML=".";
    document.getElementById("G22").innerHTML=".";
    document.getElementById("G23").innerHTML=".";
    document.getElementById("G31").innerHTML=".";
    document.getElementById("G32").innerHTML=".";
    document.getElementById("G33").innerHTML=".";
    document.getElementById("YouWon").innerHTML="Player1 wins: "+player1+" - Player2 wins: "+player2;
    won=0;
}

//Game2
function compareGuess()
{
    guessNumber=Number(document.getElementById("numberGuess").value)
    if(guessNumber==computerNumber)
    {
        guesses++;
        document.getElementById("previousAnswers").innerHTML="";
        document.getElementById("Guesses").innerHTML="";
        document.getElementById("guessAnswer").innerHTML="You Won with "+guesses+" guesses";
    }
    else if(guessNumber<computerNumber)
    {
        guesses++;
        if(guessNumber>low)low=guessNumber;
        document.getElementById("guessAnswer").innerHTML="Number is to low"
        document.getElementById("previousAnswers").innerHTML+="-"+guessNumber;
        document.getElementById("numberGuess").value="";
        document.getElementById("Guesses").innerHTML="You have used: "+guesses+" guesses.";
        document.getElementById("lowHigh").innerHTML="Number is between "+low+" and "+high;
    }
    else
    {
        guesses++;
        if(guessNumber<high)high=guessNumber;
        document.getElementById("guessAnswer").innerHTML="Number is to high"
        document.getElementById("previousAnswers").innerHTML+="-"+guessNumber;
        document.getElementById("numberGuess").value="";
        document.getElementById("Guesses").innerHTML="You have used: "+guesses+" guesses.";
        document.getElementById("lowHigh").innerHTML="Number is between "+low+" and "+high;
    }
}
function newGame()
{
    computerNumber=Math.floor(Math.random() *100+1);
    document.getElementById("guessAnswer").innerHTML=""
    document.getElementById("previousAnswers").innerHTML="";
    guesses=0;
    document.getElementById("Guesses").innerHTML="";
    document.getElementById("lowHigh").innerHTML="";
    document.getElementById("numberGuess").value="";
}