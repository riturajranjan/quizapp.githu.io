const question = [
    {
        'que': 'Which of the following is a markup language?',
        'a': "HTML",
        'b': "CSS",
        'c': "Java Script",
        'd': "PHP",
        'ans': 'a'
    },
    {
        'que': 'Which attribute is utilised to link the bookmark?',
        'a': "link",
        'b': "href",
        'c': "id",
        'd': "src",
        'ans': 'b'
    },
    {
        'que': 'What is the purpose of an Array object that removes or adds elements from an array?',
        'a': "unshift()",
        'b': "sort()",
        'c': "splice()",
        'd': "toSource()",
        'ans': 'c'
    },
    {
        'que': 'In HTML elements, CSS can be added in how many ways',
        'a': "2",
        'b': "3",
        'c': "4",
        'd': "5",
        'ans': 'b'
    },
    {
        'que': 'Adding the style attributes in HTML elements is regarded to be:',
        'a': "Outline",
        'b': "External",
        'c': "Internal",
        'd': "Inline",
        'ans': 'd'
    }
    ,
    {
        'que': 'A TARGET value that is utilized when a webpage is locked in a frame, is called?',
        'a': "_top",
        'b': "_self",
        'c': "_blank",
        'd': "_parent",
        'ans': 'a'
    }
    ,
    {
        'que': 'During styling, making use of a <style> element in the head section is called',
        'a': "Outline",
        'b': "External",
        'c': "Inline",
        'd': "Internal",
        'ans': 'd'
    }
    ,
    {
        'que': 'Which of the following processes clears the last element from an array and returns that element?',
        'a': "None",
        'b': "get()",
        'c': "pop()",
        'd': "last()",
        'ans': 'c'
    },
    {
        'que': 'Which function of the Number object would show output in exponential format?',
        'a': "toFixed()",
        'b': "toExponential()",
        'c': "toLocaleString()",
        'd': "toPrecision()",
        'ans': 'b'
    },
    {
        'que': 'Which String object functions return the capitalized string while respecting the current locale?',
        'a': "substring()",
        'b': "toUpperCase()",
        'c': "toLocaleUpperCase()",
        'd': "toLocaleUpperCase()",
        'ans': 'd'
    }

];

let index = 0;
let total = question.length;
let right = 0, wrong = 0;
const queBox = document.getElementById("queBox");
const option = document.querySelectorAll(".option");
const loadque = ()=>{
    if(index === total){
       return end();
    }
    reset();
    const data = question[index];
    queBox.innerText = `${index+1}) ${data.que}`;
    option[0].nextElementSibling.innerText = data.a;
    option[1].nextElementSibling.innerText = data.b;
    option[2].nextElementSibling.innerText = data.c;
    option[3].nextElementSibling.innerText = data.d;
    console.log(data);
}

const submit = ()=>{
    const data = question[index];
    const answer = getAnswer();
    if(answer === data.ans){
        right++;

    }else{
        wrong++;
    }
    index++;
    loadque();
    return;
}



const getAnswer = ()=>{
    let answ;
    option.forEach(
        (input)=>{
            if(input.checked){
                answ =  input.value;
                // console.log(input.value);
            }

        }
    )
    return answ;
}

const reset = ()=>{
    option.forEach(
        (input)=>{
            input.checked = false;
        }
    )
}

const end = ()=>{
    document.getElementById("box").innerHTML = `<div style="text-align:center">
    <h1 style="font-family: Sofia, sans-serif; color:green;">Congrats</h1>
    <h3 font-family: Trirong, serif;>Thank You for Submition</h3>
    <h2 font-family: Trirong, serif;>${right}/${total} are Correct</h2></div>

    `
}


loadque();