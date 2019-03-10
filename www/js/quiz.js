
    //Create Array with questions and solutions
    var allQuestions = [{

        question: "In Article I, Which Section say's that every student shall observe the laws of the land?",
        choices: ["Section I", "Section II", "Section III", "Section IV"],
        correctAnswer: 0
      },

      {
        question: "Each student must wear his/her _______ in Campus and must present this to the Security Guards when entering the University or campus he/she enrolled. ",
        choices: ["Headset", "ID card", "Earings"],
        correctAnswer: 1
      },

      {
        question: "If a student loses his/her ID card, he/she should apply for a new one accompanied by an what?",
        choices: ["Affidavit of loss", "Affidavite of loss", "Affidavit of win"],
        correctAnswer: 0
      },

      {
        question: "In Article II, each semester shall consist of at least how many weeks of Class work in the summer session shall be equivalent to class work of one semester?",
        choices: ["18", "21"],
        correctAnswer: 0
      },

      {
        question: "Temporary Enrolment. Temporary enrolment shall be granted to every student-transferee and new students for a period of one how many semestral term in cases where submitted admission requirements are incomplete.?",
        choices: ["2", "4", "1", "3"],
        correctAnswer: 2
      },

      {
        question: "Foreign Students must meet all the prescribed ___________ of the University and the course applied for.",
        choices: ["Admission test", "Admission fee", "Admission requirements"],
        correctAnswer: 2
      },

      {
        question: "In Artcle III, full tuition waiver and a stipend of Php 1,500 for Valedictorian from recognized public or private secondary institutions for the first semester with GPA of not lower than ____, provided they come from graduating class of at least fifty (50) students ",
        choices: ["85", "86", "87"],
        correctAnswer: 0
      },

      {
        question: "Sports and other related Activities, the cash incentives for regional level (Individual First Place)",
        choices: ["P1,000", "P5,000", "3,000", "P2,000"],
        correctAnswer: 3
      },

      {
        question: "What Section in Artivle IV says that 'It is the responsibility of the Coordinator of Student Services to supervise and regulate the establishment, operation and activities of duly recognized student organization in cooperation with and/or through the campus student council, for the purpose of providing guidelines for the attainment of their goals and objectives as embodied in the constitution and by-laws.",
        choices: ["Section 1", "Section 2", "Section 3", "Section 4"],
        correctAnswer: 1
      },

      {
        question: "What FSG stand for?",
        choices: ["Federation of School Government", "Federation of Student Group", "Federation of Student Government"],
        correctAnswer: 0
      },

      {
        question: "What SSC stand for?",
        choices: ["Supreme Student Cools", "Supreme Student Councils", "School Student Councils", "Super Student Councils"],
        correctAnswer: 0
      },

      {
        question: "In Article V, What section says that 'The selected editor-in-chief aside from being the top notcher in the Editorial Board Examination must also have at least one year experience in the student publication.",
        choices: ["Section 3", "Section 2", "Section 1"],
        correctAnswer: 0
      },

      {
        question: "All the other members of the editorial board need not have prior experience from the publications. Passing the Editorial Board Examination shall be the only requirement.",
        choices: ["Section 2", "Section 4", "Section 6"],
        correctAnswer: 1
      },

      {
        question: "The Editorial Board and staff shall publish two or three issues in an academic year which may include any of the following: literary folio, magazine, newsletter, broadsheet and tabloid. Flash issues will also be published when deemed necessary.",
        choices: ["Section 7", "Section 9", "Section 6", "Section 8"],
        correctAnswer: 0
      },

      {
        question: "Article VI, This service provides students with information they need for proper adjustment and decision-making.",
        choices: ["Information Services", "Information record", "Information data", "Information statement"],
        correctAnswer: 0
      }
    ];

//Function to start the quiz
function startQuiz(){
    
    var i;
    var j;
    var k;
    for(i=0; i<allQuestions.length; i++){
        document.getElementById("questions").innerHTML +='<form id="question">Q'+(i+1)+': '+ allQuestions[i].question;
        
        for(j=0; j<allQuestions[i].choices.length; j++){
        	document.forms[i].innerHTML += '</div><div class="answer"><input name="q1" value="'+ allQuestions[i].choices[j] +'" id="value4" type="checkbox" />' + allQuestions[i].choices[j] + '<br/>';
         }
     document.getElementById("questions").innerHTML +='</form><br/><br/>';
    }
    
    document.getElementById("questions").innerHTML += '<button onclick="solveQuiz()"" class="button button-fill">Solve Quiz</button>';
    

}

function solveQuiz(){
  var x;
  var txt = ' ';
  var i = 0;
  var correct = 0; 
  for(i = 0; i < document.forms.length;i++) { 
    x = document.forms[i]; 
    for(j = 0; j<x.length; j++){
      if(x[j].checked) { 
        correctAnswer = allQuestions[i].correctAnswer;
        if(x[j].value == allQuestions[i].choices[correctAnswer]){
          correct += 1;
        }
      }
   }
 }

 document.getElementById("questions").innerHTML += 'Correct answers:'+ correct;
} 
