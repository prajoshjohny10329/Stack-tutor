const availableKeyword = [
    'html',

    'html',
    'html',
    'html',
    'html',

    'html',
    'css',
    'Javascript',
    'Node js',
    'Web development',
    'javascript',
    'What is Nginx'
];

const availableLinks = [
    {'html':"html.html"},
    {'css' :"css.html"},
    {'Javascript':"javascript.html"},
    {'Node js':"node.html"},
    {'Web development':"web-development.html"},
];

const resultBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function(){
    let result = []
    let input = inputBox.value;
    if(input.length){
        result = availableKeyword.filter((keyword)=>{
           return keyword.toLowerCase().includes(input.toLowerCase())
        });
    }
    display(result)
    if(!result.length){
        resultBox.innerHTML = ''
    }
}

function display (result){
    const content = result.map((list)=>{
        return "<li  onclick = selectInput(this)>" + list + "</li>"
    })
    resultBox.innerHTML = "<ul>" + content.join('') + "</ul>"
}

function selectInput(selected){
    const target = selected.textContent.trim();
    const foundLink = availableLinks.find(linkObj => target in linkObj);
    let targetLink = Object.values(foundLink)[0]
    window.location.href = targetLink;
}


const smallResultBox = document.getElementById("index-result-box");
const smallInputBox = document.getElementById("small-input-box");

smallInputBox.onkeyup = function(){
    let result = []
    let input = smallInputBox.value;
    if(input.length){
        result = availableKeyword.filter((keyword)=>{
           return keyword.toLowerCase().includes(input.toLowerCase())
        });
    }
    indexSearchDisplay(result)
    if(!result.length){
        smallResultBox.innerHTML = ''
    }
}

function indexSearchDisplay (result){
    const content = result.map((list)=>{
        return "<li onclick = selectInput(this)>" + list + "</li>"
    })
    smallResultBox.innerHTML = "<ul>" + content.join('') + "</ul>"
}


const listButton = document.getElementById('list-button');
const listDiv = document.getElementById('list-div');
const contentDiv = document.getElementById('content-div')

let isDivVisible = true;

// if (isDivVisible) {
//     listDiv.classList.add('hidden');
//     isDivVisible = false;
//   }

listButton.addEventListener('click', () => {
  if (isDivVisible) {
    listDiv.classList.add('hidden');
    isDivVisible = false;
  } else {
    listDiv.classList.remove('hidden');
    isDivVisible = true;
  }
});

function checkScreenWidth() {
    const mainDiv =document.getElementById('main-div')
    var div = document.querySelector('.hidden-div');
    if (window.innerWidth <= 600) { // Adjust the maximum width as needed
        listDiv.classList.add('hidden');   // Hide the div
        mainDiv.style.justifyContent = 'start'
        contentDiv.style.marginLeft = '0px'

    } else {
        listDiv.classList.remove('hidden');  // Show the div
        mainDiv.style.justifyContent = 'center'
    }
  }
  
  // Initial check when the page loads
  checkScreenWidth();
  
  // Listen for window resize events
  window.addEventListener('resize', checkScreenWidth);

//dark mode
let darkMode = true



function modeChanger() {
    const element = document.body;
    const listButton = document.getElementById('list-button')
    const brandLogo = document.getElementsByClassName('brand-logo');
    const listIcon = document.getElementById('list-i')
    const modeIcon = document.getElementById('mood-change')
    const categoryDIv = document.getElementById('category-div')
    const indexList = document.getElementById('index-list')
    const resultBox = document.getElementById("index-result-box")
    const linkElements = document.querySelectorAll('.index-future-link a');
    const standingPage = document.getElementById('standing-page')
    const listDiv = document.getElementById('list-div')

    
            
        
    if(darkMode){
        element.classList.toggle("dark-mode");
        brandLogo[0].src = './images/black log png.png';
        listButton.style.color = 'white'
        listIcon.style.color = 'white'
        modeIcon.style.color = 'white'
        // standingPage.style.color = 'green'

        listDiv.style.boxShadow = '#480000 -2px 1px 10px'
        contentDiv.style.boxShadow = '#5f0000 1px 0px 10px'

        
        linkElements.forEach(linkElement => {
            linkElement.style.color = 'green'; // Change to the desired color
        });
        darkMode = false
    }else{
        listDiv.style.boxShadow = '1px 0px 10px grey'

        darkMode = true
        location.reload();

    }
    console.log(darkMode);

    
    
 }