document.addEventListener('DOMContentLoaded',()=>{

   
    const questions = [
        {
          question: "What is the capital of France?",
          choices: ["Berlin", "Madrid", "Paris", "Rome"],
          answer: "Paris",
        },
        {
          question: "Which programming language is known as the backbone of web development?",
          choices: ["Python", "JavaScript", "C++", "Java"],
          answer: "JavaScript",
        },
        {
          question: "What is the largest planet in our solar system?",
          choices: ["Earth", "Mars", "Jupiter", "Saturn"],
          answer: "Jupiter",
        },
        {
          question: "Who wrote the play 'Romeo and Juliet'?",
          choices: ["William Shakespeare", "Charles Dickens", "Mark Twain", "J.K. Rowling"],
          answer: "William Shakespeare",
        },
        {
          question: "What is the chemical symbol for water?",
          choices: ["O2", "H2O", "CO2", "H2"],
          answer: "H2O",
        },
        {
          question: "In which year did the Titanic sink?",
          choices: ["1910", "1912", "1914", "1916"],
          answer: "1912",
        },
        {
          question: "What is the smallest prime number?",
          choices: ["1", "2", "3", "5"],
          answer: "2",
        },
        {
          question: "Which is the longest river in the world?",
          choices: ["Amazon", "Nile", "Yangtze", "Mississippi"],
          answer: "Nile",
        },
        {
          question: "Which element has the atomic number 1?",
          choices: ["Hydrogen", "Helium", "Oxygen", "Carbon"],
          answer: "Hydrogen",
        },
        {
          question: "Who is known as the father of computers?",
          choices: ["Alan Turing", "Charles Babbage", "Tim Berners-Lee", "Steve Jobs"],
          answer: "Charles Babbage",
        },
      ];
      

     const startbtn = document.getElementById('start-btn');

     const questioncontainer = document.getElementById('question-container');
     const questiontext = document.getElementById('question-text');
     const choiceslist = document.getElementById('choices-list');
     const nextbtn = document.getElementById('next-btn');

     const resultcontainer = document.getElementById('result-container');
     const yourscore = document.getElementById('your-score');
    
     const restartbtn = document.getElementById('restart-btn');


let curidx = 0 ;
let score =0

startbtn.addEventListener('click',startquiz);
nextbtn.addEventListener('click',()=>{
  curidx++;
  if(curidx<questions.length){
    showquestion();
  }else{
    showresult();
  }
})

restartbtn.addEventListener('click',()=>{
  score=0;
  curidx=0;
  resultcontainer.classList.add('hidden');
  questioncontainer.classList.add('hidden');
  startquiz();

})
      
function startquiz(){
  startbtn.classList.add('hidden');
  resultcontainer.classList.add('hidden')
questioncontainer.classList.remove('hidden');
showquestion();

}

function showquestion(){
  nextbtn.classList.add('hidden');
  questiontext.textContent = questions[curidx].question;
  choiceslist.innerHTML="";
  questions[curidx].choices.forEach(choice=>{
    const li = document.createElement('li');
    li.textContent=choice;
    choiceslist.appendChild(li);
    li.addEventListener('click',()=>selectans(li));
  })
 
function selectans(li){
    if(li.textContent===questions[curidx].answer){
             li.style.backgroundColor="green";
             score++;
             nextbtn.classList.remove('hidden');
    }else{
      li.style.backgroundColor="red";
      nextbtn.classList.remove('hidden');
    }
}
  
  
}

function showresult(){
questioncontainer.classList.add('hidden');
resultcontainer.classList.remove('hidden');
yourscore.textContent=`${score} out of ${questions.length}`
}

  
  
})



  