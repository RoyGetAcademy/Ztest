//Model
var page = "Main";
var player = 1;
var player1 = 0;
var player2 = 0;
var won = 0;
var boxes=["","","","","","","","",""]
var winner="";

var computerNumber;
var guessNumber;
var guesses=0;
var low=0;
var high=100;
var guessAnswer="";
var previousAnswer="";
var numberGuess="";
var GuessesStr="";
var lowHigh="";

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
    newGame();
    updateNow();
}
function clickEvolutions()
{
    page="Evolutions";
    updateNow();
}
function clickContact()
{
    //page="Contact";
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
        
        <div id="left" onClick="clickEvolutions()">
            <img id="topLeftPic" src="images/ZhenisEvolutions.png">
            <p>Zhenis Evolutions</p>
        </div>
        <div id="right" onClick="clickEvolutions()">
            <img id="topRightPic" src="images/ZhenisEvolutions2.png">
            <p>Zhenis Evolutions</p>
        </div>
        `;
    }
    else if(page=="About")
    {
        resetColors();
        document.getElementById("abou").style.color="#07f5e2";
        document.getElementById("main").innerHTML=`
        <div id="one" >
        <h3 class="AboutInfo"><u>About us:</u></h3>        
        <p class="AboutInfo">I am a Norwegian dude who likes to geek it out.</p>
        <p class="AboutInfo">I program games, websites & I am a gamer.</p>
        <p class="AboutInfo">Zhenis Technologies started december of 2020.</p>
        <p class="AboutInfo">Zhenis Evolutions started getting made january 2021.</p>
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
        <p id="YouWon">${winner}</p>
        <div id="game1Main">
            <div class="Color1" onClick="Clicked(0)">${boxes[0]}</div>
            <div class="Color2" onClick="Clicked(1)">${boxes[1]}</div>
            <div class="Color1" onClick="Clicked(2)">${boxes[2]}</div>

            <div class="Color2" onClick="Clicked(3)">${boxes[3]}</div>
            <div class="Color1" onClick="Clicked(4)">${boxes[4]}</div>
            <div class="Color2" onClick="Clicked(5)">${boxes[5]}</div>

            <div class="Color1" onClick="Clicked(6)">${boxes[6]}</div>
            <div class="Color2" onClick="Clicked(7)">${boxes[7]}</div>
            <div class="Color1" onClick="Clicked(8)">${boxes[8]}</div>
        </div>
        <div id="game2Main">
            <div id="GuessBack">
                <button id="newGame" onClick="newGame()">New Game</button>
                <h3>Guess a number between 1 and 100</h3>
                <div>${lowHigh}</div>
                <input id="Numerics" type="text" min="1" max="100" onchange="compareGuess(this)" placeholder="Number Here">${numberGuess}</input>
                <p>${guessAnswer}</p>
                <p>Previous answers: </p>
                <p>${previousAnswer}</p>
                <p>${GuessesStr}</p>
            </div>
        </div>
        `;
    }
    else if(page=="Evolutions")
    {
        resetColors();
        document.getElementById("evol").style.color="#07f5e2";
        document.getElementById("main").innerHTML=`
        <div id="one">
            <h1><u><i>Zhenis Evolutions</i></u></h1>
            <img id="topPic" src="images/ZhenisEvolutions.png">
            <img id="midPic" src="images/ZhenisEvolutions2.png">
            <img id="botPic" src="images/ZhenisEvolutions3.png">
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
    else if(page=="Donations")
    {
        document.getElementById("main").innerHTML=`
        <div id="smart-button-container">
            <div style="text-align: center"><label for="description">Donate </label><input type="text" name="descriptionInput" id="description" maxlength="127" value=""></div>
            <p id="descriptionError" style="visibility: hidden; color:red; text-align: center;">Please enter a description</p>
            <div style="text-align: center"><label for="amount">Amount </label><input name="amountInput" type="number" id="amount" value="" ><span> USD</span></div>
            <p id="priceLabelError" style="visibility: hidden; color:red; text-align: center;">Please enter a price</p>
            <div id="invoiceidDiv" style="text-align: center; display: none;"><label for="invoiceid"> </label><input name="invoiceid" maxlength="127" type="text" id="invoiceid" value="" ></div>
            <p id="invoiceidError" style="visibility: hidden; color:red; text-align: center;">Please enter an Invoice ID</p>
            <div style="text-align: center; margin-top: 0.625rem;" id="paypal-button-container"></div>
        </div>
        <script src="https://www.paypal.com/sdk/js?client-id=AUx3Vo2dB9ZrgvZUZnzGYUpaZF38GST4UPJOudcWYGxlyqyKmG2RPxWmFyjLvijURhefIDeCbolAG05o&currency=USD" data-sdk-integration-source="button-factory"></script>

        `;
    }
}


function initPayPalButton() {
    var description = document.querySelector('#smart-button-container #description');
    var amount = document.querySelector('#smart-button-container #amount');
    var descriptionError = document.querySelector('#smart-button-container #descriptionError');
    var priceError = document.querySelector('#smart-button-container #priceLabelError');
    var invoiceid = document.querySelector('#smart-button-container #invoiceid');
    var invoiceidError = document.querySelector('#smart-button-container #invoiceidError');
    var invoiceidDiv = document.querySelector('#smart-button-container #invoiceidDiv');

    var elArr = [description, amount];

    if (invoiceidDiv.firstChild.innerHTML.length > 1) {
    invoiceidDiv.style.display = "block";
    }

    var purchase_units = [];
    purchase_units[0] = {};
    purchase_units[0].amount = {};

    function validate(event) {
    return event.value.length > 0;
    }

    paypal.Buttons({
    style: {
        color: 'gold',
        shape: 'rect',
        label: 'paypal',
        layout: 'vertical',
        
    },

    onInit: function (data, actions) {
        actions.disable();

        if(invoiceidDiv.style.display === "block") {
        elArr.push(invoiceid);
        }

        elArr.forEach(function (item) {
        item.addEventListener('keyup', function (event) {
            var result = elArr.every(validate);
            if (result) {
            actions.enable();
            } else {
            actions.disable();
            }
        });
        });
    },

    onClick: function () {
        if (description.value.length < 1) {
        descriptionError.style.visibility = "visible";
        } else {
        descriptionError.style.visibility = "hidden";
        }

        if (amount.value.length < 1) {
        priceError.style.visibility = "visible";
        } else {
        priceError.style.visibility = "hidden";
        }

        if (invoiceid.value.length < 1 && invoiceidDiv.style.display === "block") {
        invoiceidError.style.visibility = "visible";
        } else {
        invoiceidError.style.visibility = "hidden";
        }

        purchase_units[0].description = description.value;
        purchase_units[0].amount.value = amount.value;

        if(invoiceid.value !== '') {
        purchase_units[0].invoice_id = invoiceid.value;
        }
    },

    createOrder: function (data, actions) {
        return actions.order.create({
        purchase_units: purchase_units,
        });
    },

    onApprove: function (data, actions) {
        return actions.order.capture().then(function (details) {
        alert('Transaction completed by ' + details.payer.name.given_name + '!');
        });
    },

    onError: function (err) {
        console.log(err);
    }
    }).render('#paypal-button-container');
}
initPayPalButton();


//Dette er til spillet Game1 som er tick tack toe.
function Clicked(that)
{
    if(won==0)
    {
        if(boxes[that] != "R" && boxes[that] != "T")
        {
            if(player==1)
            {
                boxes[that]="R";
                player=2;
                winner="Player 2's turn";
            }
            else{
                boxes[that]="T";
                player=1;
                winner="Player 1's turn";
            }
        }
        //Check if player 1 has won
        if   ((boxes[0]=="R" && boxes[1]=="R" && boxes[2]=="R") || (boxes[0]=="R" && boxes[3]=="R" && boxes[6]=="R")
            ||(boxes[0]=="R" && boxes[4]=="R" && boxes[8]=="R") || (boxes[3]=="R" && boxes[4]=="R" && boxes[5]=="R")
            ||(boxes[6]=="R" && boxes[7]=="R" && boxes[8]=="R") || (boxes[2]=="R" && boxes[4]=="R" && boxes[6]=="R")
            ||(boxes[0]=="R" && boxes[4]=="R" && boxes[8]=="R") || (boxes[1]=="R" && boxes[4]=="R" && boxes[7]=="R")
            ||(boxes[2]=="R" && boxes[5]=="R" && boxes[8]=="R")){winner="Player1 WON!!"; won=1; player1+=1;}
        //Check if player 2 has won
        if   ((boxes[0]=="T" && boxes[1]=="T" && boxes[2]=="T") || (boxes[0]=="T" && boxes[3]=="T" && boxes[6]=="T")
            ||(boxes[0]=="T" && boxes[4]=="T" && boxes[8]=="T") || (boxes[3]=="T" && boxes[4]=="T" && boxes[5]=="T")
            ||(boxes[6]=="T" && boxes[7]=="T" && boxes[8]=="T") || (boxes[2]=="T" && boxes[4]=="T" && boxes[6]=="T")
            ||(boxes[0]=="T" && boxes[4]=="T" && boxes[8]=="T") || (boxes[1]=="T" && boxes[4]=="T" && boxes[7]=="T")
            ||(boxes[2]=="T" && boxes[5]=="T" && boxes[8]=="T")){winner="Player2 WON!!"; won=1; player2+=1;}
        updateNow();
    }
}
//reset for Game1(Tick tack toe)
function resetGame1()
{
    boxes=["","","","","","","","",""];
    winner="Player1 wins: "+player1+" - Player2 wins: "+player2;
    won=0;
    updateNow();
}
//Game2
function compareGuess(that)
{
    guessNumber=Number(that.value)
    if(guessNumber == computerNumber)
    {
        guesses++;
        previousAnswer="";
        GuessesStr="";
        guessAnswer="You Won with "+ guesses +" guesses";
    }
    else if(guessNumber<computerNumber)
    {
        guesses++;
        if(guessNumber>low)low=guessNumber;
        guessAnswer="Number is to low"
        previousAnswer+="-"+guessNumber;
        numberGuess="";
        GuessesStr="You have used: "+guesses+" guesses.";
        lowHigh="Number is between "+low+" and "+high;
    }
    else
    {
        guesses++;
        if(guessNumber<high)high=guessNumber;
        guessAnswer="Number is to high"
        previousAnswer+="-"+guessNumber;
        numberGuess="";
        GuessesStr="You have used: "+guesses+" guesses.";
        lowHigh="Number is between "+low+" and "+high;
    }
    updateNow();
}
function newGame()
{
    computerNumber=Math.floor(Math.random() *100+1);
    guessAnswer=""
    previousAnswer="";
    guesses=0;
    GuessesStr="";
    lowHigh="";
    numberGuess="";
    low=1;
    high=100;
    updateNow();
}
//bytter når du har mus over knappen
function mouseOver(that)
{
    that.style.color="#07f5e2";
}
//når du tar vekk musen så bytter den farge hvis ikke den er valgt.
function mouseOut(that)
{
    that.style.color="teal";
}

//IKKE LENGER MVC!! IKKE LENGER MVC!! IKKE LENGER MVC!!
//IKKE LENGER MVC!! IKKE LENGER MVC!! IKKE LENGER MVC!!
//IKKE LENGER MVC!! IKKE LENGER MVC!! IKKE LENGER MVC!!
//IKKE LENGER MVC!! IKKE LENGER MVC!! IKKE LENGER MVC!!
//IKKE LENGER MVC!! IKKE LENGER MVC!! IKKE LENGER MVC!!

//Denne er til og resete knappene på header menyer (Utenfor MVC)
function resetColors()
{
    document.getElementById("home").style.color="teal";
    document.getElementById("abou").style.color="teal";
    document.getElementById("game").style.color="teal";
    document.getElementById("evol").style.color="teal";
    document.getElementById("cont").style.color="teal";
    document.getElementById("disc").style.color="teal";
}


