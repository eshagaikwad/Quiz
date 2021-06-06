 var readlinesync = require ('readline-sync');
 var score=0;
 var username= readlinesync.question ('MAY I HAVE YOUR NAME? ' ) ;
 var welcomemessage = (" welcome "+username)
 console.log(welcomemessage)
var quiz = ("HERE'S A QUIZ ON FAMOUS BOLLYWOOD DIALOGUES BY ESHA ");
console.log(quiz)

function play (question,answer){
var useranswer= readlinesync.question(question);
if(useranswer==answer)
{
  console.log("yeahh! you are correct")
  score=score+1;
  console.log("your score is: ", score )
  console.log("_ _ _ _ _ _ _")
}
else{
  console.log(" opps! you are wrong")
  console.log("your score is: ", score )
   console.log("_ _ _ _ _ _ _")
}
}
var question = [ {
  question: "Dosti ka ek usool hai madam – no _____, no thank you ",
   answer: "sorry"
    },{ 
       question: " Babumoshai, zindagi badi honi chahiye, ____ nahi.  "  ,
      answer: "lambi"
},
{question: "Bade bade deshon mein aisi choti-choti baatein hoti rehti hai, _____ ",
answer: "senorita"

},
{question: "Haar kar jeetne wale ko _____ kehte hai ",
 answer: "bazigar"

},
{
  question:"Crime Master Gogo naam hai mera, aankhen nikal ke _____ khelta hun main. ",
  answer: "gotiyan"
} ];
for( var i=0 ; i < question.length ; i++)
{
  var currentquestion= question[i];
  play(currentquestion.question,currentquestion.answer)
 
}
console.log("your final score out of 5 is: ",score)


