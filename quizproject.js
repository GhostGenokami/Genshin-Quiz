let currentQuestion = 0;
let score = 0;
let questions = [
   {
	"question": "How many permanantly playable characters are in Genshin Impact?",
	"a": "Fifty-seven",
	"b": "Fifty-eight",
	"c": "Fifty-nine",
	"d": "Sixty",
	"image":"quizimages/q1.jpg",
	"answer": "b",
	"hint": ["a", "c"]
   },
   {
	"question": "In what order are elements combined to make a Reverse Vaporize reaction?",
	"a": "Pyro -> Hydro Reaction",
	"b": "Hydro -> Pyro Reaction",
	"c": "Cryo -> Pyro Reaction",
	"d": "Electro -> Hydro -> Pyro Reaction",
	"image":"quizimages/q2.jpg",
	"answer": "a",
	"hint": ["d", "b"]
   },
   {
	"question": "What is not an ascension material of Hu Tao?",
	"a": "Silk Flower",
	"b": "Shimmering Nectar",
	"c": "Everflame Seed",
	"d": "Agnidus Agate Chunk",
	"image":"quizimages/q3.jpg",
	"answer": "c",
	"hint": ["a", "b"]
   },
   {
	"question": "What is the name of the book that \"The thing calling itself Enjou\" was looking for?",
	"a": "Before Sun and Moon",
	"b": "Heart of Clear Springs",
	"c": "Sangonomiya Chronicles",
	"d": "In The Light, Beneath The Shadow",
	"image":"quizimages/q4.jpg",
	"answer": "a",
	"hint": ["d", "c"]
   },
   {
	"question": "From what nation was the Falcon of the West born?",
	"a": "Sumeru",
	"b": "Mondstadt",
	"c": "Natlan",
	"d": "Fontaine",
	"image":"quizimages/q5.jpg",
	"answer": "c",
	"hint": ["a", "b"]
   },
   {
	"question": "Who was the person who forced Diluc to lie about the temporary defeat of Ursa the Drake?",
	"a": "Grandmaster Varka",
	"b": "Diluc's father",     
	"c": "Il Dottore",      
	"d": "Investigator Eroch",    
	"image":"quizimages/q6.jpg",
	"answer": "d",
	"hint": ["a", "c"]
   },
   {
	"question": "What is the name of Zhongli's second story quest?",
	"a": "No Mere Stone",
	"b": "Historia Antiqua",
	"c": "Sal Flore",
	"d": "A New Star Approaches",
	"image":"quizimages/q7.jpg",
	"answer": "a",
	"hint": ["b", "c"]
   },
   {
	"question": "What is the team composition consisting of Jean, Bennett, and two flex slots?",
	"a": "Napalm Comp",
	"b": "Morgana Comp",
	"c": "Rational Comp",
	"d": "Sunfire Comp",
	"image":"quizimages/q8.jpg",
	"answer": "d",
	"hint": ["c", "b"]
   },
   {
	"question": "How many of the original 7 archons are alive?",
	"a": "One",
	"b": "Two",
	"c": "All except Makoto and Rukkhadevata",
	"d": "All of them",
	"image":"quizimages/q9.jpg",
	"answer": "b",
	"hint": ["a", "d"]
   },
   {
	"question": "What is Nahida's third constellation called?",
	"a": "The Shoot of Conscious Attainment",
	"b": "The Seed of Stored Knowledge",
	"c": "The Stem of Manifest Inference",
	"d": "The Fruit of Reason's Culmination",
	"image":"quizimages/q10.jpg",
	"answer": "c",
	"hint": ["a", "b"]
   }
 ];
 
 
 if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('/sw.js');
  }


 function loadQuestion() {
     
    // close light box for first question
    if (currentQuestion == 0) {
       closeLightBox();
    }
     
    // load the image
    let img = document.getElementById("image");
    img.src = questions[currentQuestion].image;
    
    // load the question and answers
    document.getElementById("question").innerHTML = questions[currentQuestion].question;
    document.getElementById("a").innerHTML = "A. " + questions[currentQuestion].a;
    document.getElementById("b").innerHTML = "B. " + questions[currentQuestion].b;
    document.getElementById("c").innerHTML = "C. " + questions[currentQuestion].c;
    document.getElementById("d").innerHTML = "D. " + questions[currentQuestion].d;
	document.getElementById("a").style.visibility = "visible";
	document.getElementById("b").style.visibility = "visible";
	document.getElementById("c").style.visibility = "visible";
	document.getElementById("d").style.visibility = "visible";
 } // loadQuestion
 
 
 function markIt(ans) {
    let message = "";
    
    if (ans == questions[currentQuestion].answer) {
        
       // add 1 to score
       score++;
       
       // display score 
       document.getElementById("score").innerHTML = score + " / " + questions.length;
       
       message = "Correct!!!! Your score is " + score + " / " + questions.length;
    } else {
       message = "Incorrect :< Your score is " + score + " / " + questions.length; 
	   document.getElementById("score").innerHTML = score + " / " + questions.length;
    } // else
        
   
    
    // move to the next question
    currentQuestion++;
    if (currentQuestion >= questions.length) {
       // create a special message
       if(score == 10){
			message = score + " / " + questions.length + ", You got it all correct! Good job!";
	   }else if(score > 8){
			message = score + " / " + questions.length + ", Close, but great job!";
	   }else if(score > 4){
			message = score + " / " + questions.length + ", Good try, maybe better luck next time.";
	   }else{
			message = score + " / " + questions.length + ", Maybe Genshin isn't the game for you.";
	   }
	   document.getElementById("a").onclick = null;
	   document.getElementById("b").onclick = null;
	   document.getElementById("c").onclick = null;
	   document.getElementById("d").onclick = null;
	   document.getElementById("fiftyfiftysection").onclick = null;
    } else {
       loadQuestion();
    }
    
    // show the lightbox
    document.getElementById("lightbox").style.display = "block";
    document.getElementById("message").innerHTML = message;
  
 }  // markIt
 
 function closeLightBox() {
    document.getElementById("lightbox").style.display = "none";
 } // closeLightbox


function use5050(){
	document.getElementById("fiftyfiftysection").style.display = "none";
	let x = questions[currentQuestion].hint[0];
	let y = questions[currentQuestion].hint[1];
	document.getElementById(x).style.visibility = "hidden";
	document.getElementById(y).style.visibility = "hidden";
}