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
     const yourtotal = document.getElementById('your-total');
     const restartbtn = document.getElementById('restart-btn');

let currentquestionidx =0;
let score = 0 ;
let total  =0 ;


    startbtn.addEventListener('click', startquiz);
    nextbtn.addEventListener('click',()=>{
        currentquestionidx++;
        if(currentquestionidx<questions.length){
            showquestions();
        }else{
            showresult();
        }
    })
    restartbtn.addEventListener('click',()=>{
        currentquestionidx=0;
        score =0;
        total=0;
        resultcontainer.classList.add('hidden');
        startquiz();
    });


      function startquiz(){
        startbtn.classList.add('hidden')
        resultcontainer.classList.add('hidden');
        questioncontainer.classList.remove('hidden');

        showquestions();
      }
      function showquestions(){
           nextbtn.classList.add('hidden');
           questiontext.textContent = questions[currentquestionidx].question;

           choiceslist.innerHTML=""// clear previous choices


           questions[currentquestionidx].choices.forEach(choice=>{
const li = document.createElement('li');
li.textContent = choice;
li.addEventListener('click',()=>selectans(li));
choiceslist.appendChild(li);
 
})

      
      }

      function selectans(choice){
const correctans = questions[currentquestionidx].answer;
if(correctans==choice.textContent){
    score++;
    total+=10;
  choice.style.backgroundColor="green"
}else{
    choice.style.backgroundColor="red"
    total-=5;
}
nextbtn.classList.remove('hidden')
      }


      function showresult(){
        questioncontainer.classList.add('hidden');
        resultcontainer.classList.remove('hidden');
        yourscore.textContent=`${score} out if ${questions.length}`;
        yourtotal.textContent =`${total} out if ${(questions.length)*10}`;
        
      }

})