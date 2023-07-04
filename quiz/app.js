

const questions =[{
    'que': 'which of the following is a markup language?',
    'a': 'HTML',
    'b': 'css',
    'c': 'javaScript',
    'd': 'PHP',
    'correct':'a'
},
{  
    
        'que': 'which of the following is a markup language?',
        'a': 'HTML',
        'b': 'css',
        'c': 'javaScript',
        'd': 'PHP',
        'correct':'a'
    },
    {  
    
        'que': 'which of the following is a markup language?',
        'a': 'HTML',
        'b': 'css',
        'c': 'javaScript',
        'd': 'PHP',
        'correct':'a'
    },
    {  
    
        'que': 'which of the following is a markup language?',
        'a': 'HTML',
        'b': 'css',
        'c': 'javaScript',
        'd': 'PHP',
        'correct':'a'
    },
    {  
    
        'que': 'which of the following is a markup language?',
        'a': 'HTML',
        'b': 'css',
        'c': 'javaScript',
        'd': 'PHP',
        'correct':'a'
    },
    {  
    
        'que': 'which of the following is a markup language?',
        'a': 'HTML',
        'b': 'css',
        'c': 'javaScript',
        'd': 'PHP',
        'correct':'a'
    },

]
let index =0;
let total =questions.length;
let right =0,
    wrong =0;
const quesBox = document.getElementById("quesBox")
const optionInputs = document.querySelectorAll('.options')
const loadQuestion =() => {
    if(index ===total){
        return endQuiz()

    }
    rest()
    const data = questions[index]
    console.log(data)
    quesBox.innerText = `${index+1} ${data.que}`;
    optionInputs[0].nextElementSibling.innerText= data.a;
    optionInputs[1].nextElementSibling.innerText= data.b;
    optionInputs[2].nextElementSibling.innerText= data.c;
    optionInputs[3].nextElementSibling.innerText= data.d;
}
const submitQuiz =()=>{
    const data =questions[index];
    const ans = getAnswer()
    
    if(ans ==data.correct){
        right++;
    }else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}
const getAnswer =()=>{
    let answer;
    optionInputs.forEach(
        (input) =>{
            if(input.checked){
                answer = input.value;
            }
        }
    )
    return answer;
}
const rest =()=>{
    optionInputs.forEach(
        (input) =>{
           
            input.checked = false
        }
    )
}
    const endQuiz =() =>{
        document.getElementById("box").innerHTML =`
        <div style="text-align:center">
        <h3> Thankyou</h3>
        <h2>${right}/${total} are correct</h2>
        </div>
        `
    
    const ratingInputs = document.querySelectorAll('.rating input');

        ratingInputs.forEach((input) => {
            input.addEventListener('change', handleRatingChange);
        });

        function handleRatingChange(event) {
            const selectedRating = event.target.value;
            console.log('Selected rating:', selectedRating);
            // Perform any additional actions with the rating value
        }
    }

loadQuestion();