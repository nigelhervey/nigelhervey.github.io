//change 5 to the total number of questions
var total=10
var question=new Array()
for (i=1;i<=total+1;i++){
temp="choice"+i+"=new Array()"
eval(temp)
}
var solution=new Array()

/*Below lists the phrases that will be randomly displayed if the user correctly answers the question. You may extend or shorten this list as desired*/
var compliments=new Array()
compliments[0]="Look at those neural pathways lighting up!"
compliments[1]="Phoneme-nal thinker!"
compliments[2]="Everyone needs to hear how smart you are!"
compliments[3]="Your comprehension is un-comprehensible!"
compliments[4]="Your background knowledge is showing, and it is impressive!"
compliments[5]="You are just plain great!"
compliments[6]="Phoneme-nal phenom!"
compliments[7]="Talk about automaticity!"
compliments[8]="You are the root of all the right answers!"
compliments[9]="You have got a direct neural pathway to the right answer!"
compliments[10]="You just tracked that question down without missing a single beat!"


/*Below lists the questions, its choices, and finally, the solution to each question. Follow the exact format below when editing the questions. You may have as many questions as needed. Check doc at http://javascriptkit.com/script/script2/comboquiz.htm for more info
*/

question[1]="Approximately how long ago did humans first develop writing?"
choice1[1]="500 years ago"
choice1[2]="5,000 years ago"
choice1[3]="20,000 years ago"
choice1[4]="100,000 years ago"

question[2]="Which of these abilities is the human brain naturally prepared to develop?"
choice2[1]="Reading written words"
choice2[2]="Spelling words"
choice2[3]="Understanding spoken language"
choice2[4]="Recognizing punctuation"

question[3]="What happens in the brain when someone learns to read?"
choice3[1]="The brain grows an entirely new region"
choice3[2]="Existing brain networks adopt to recognize written language"
choice3[3]="The brain stops relying on spoken language"
choice3[4]="Reading activates only the visual system"

question[4]="Which of these inventions appeared first in human history?"
choice4[1]="The alphabet"
choice4[2]="The printing press"
choice4[3]="Writing systems"
choice4[4]="Paper books"

question[5]="What is surprising about the way your eyes move while reading?"
choice5[1]="They move smoothly across every sentence"
choice5[2]="They remain completely still"
choice5[3]="They make quick jumps separated by brief pauses"
choice5[4]="They process only one letter at a time"

question[6]="Which statement about reading around the world is true?"
choice6[1]="Every writing system represents individual sounds"
choice6[2]="All languages are equally easy to learn and read"
choice6[3]="Writing systems can represents different units of language"
choice6[4]="All languages use alphabets"

question[7]="Why is reading considered a relatively recent human invention?"
choice7[1]="Humans only recently developed intelligence"
choice7[2]="Written language emerged much later than spoken language"
choice7[3]="Ancient humans could not communicate"
choice7[4]="The brain was unable to recognize symbols until recently"

question[8]="What is the approximate number of speech sounds (phonemes) commonly identified in American English?"
choice8[1]="26"
choice8[2]="44"
choice8[3]="100"
choice8[4]="200"

question[9]="What is the name of the brain region commonly associated with rapid visual recognition of written words?"
choice9[1]="The hippocampus"
choice9[2]="The cerebellum"
choice9[3]="The visual word form area"
choice9[4]="The amygdala"

question[10]="What would most likely happen if a person had never been taught to read but had normal spoken language abilities?"
choice10[1]="They would automatically learn to read as they aged"
choice10[2]="They could understand spoken language without being able to read"
choice10[3]="They would be unable to understand complex ideas"
choice10[4]="They would be unable to recognize pictures"

solution[1]="b"
solution[2]="c"
solution[3]="b"
solution[4]="c"
solution[5]="c"
solution[6]="c"
solution[7]="b"
solution[8]="b"
solution[9]="c"
solution[10]="b"
