//Code for light or dark theme
const element = document.body;
const brandLogo = document.getElementsByClassName("brand-logo");
const listIcon = document.getElementById("list-i");
const modeIcon = document.getElementById("mood-i");
const standingPage = document.getElementById("standing-page");
const homeMainDiv = document.getElementsByClassName("topic-div")
let darkMode = false;

window.addEventListener("DOMContentLoaded", (event) => {
  if (localStorage.getItem("isDarkMode") == "true") {
    forDarkMode();
  } else {
    forLightMode();
  }
});
function modeChanger() {
  try {
    if (darkMode) {
      forLightMode();
    } else {
      forDarkMode();
    }
  } catch (error) {
    
  }
}

function forDarkMode() {
  try {
    element.classList.add("dark-mode");
    brandLogo[0].src = "./images/black log png.png";
    listIcon.style.color = "white";
    modeIcon.style.color = "white";
    standingPage.style.color = "white";
    listDiv.style.boxShadow = "grey 0px 0px 2px";
    contentDiv.style.boxShadow = "grey 0px 0px 2px";
    darkMode = true;
    localStorage.setItem("isDarkMode", true);
  } catch (error) {
    element.classList.add("dark-mode");
    brandLogo[0].src = "./images/black log png.png";
    listIcon.style.color = "white";
    modeIcon.style.color = "white";
    listDiv.style.boxShadow = "grey 0px 0px 2px";
    for (const array of homeMainDiv) {
      array.style.boxShadow = "0 0 2px grey";
    }
    darkMode = true;
    localStorage.setItem("isDarkMode", true);
  }
}

function forLightMode() {
  try {
    element.classList.remove("dark-mode");
    listIcon.style.color = "black";
    modeIcon.style.color = "black";
    brandLogo[0].src = "./images/blue logo png .png";
    standingPage.style.color = "green";
    listDiv.style.boxShadow = "1px 0px 10px grey";
    contentDiv.style.boxShadow = "1px 0px 10px grey";
    darkMode = false;
    localStorage.setItem("isDarkMode", false);
  } catch (error) {
    element.classList.remove("dark-mode");
    listIcon.style.color = "black";
    modeIcon.style.color = "black";
    brandLogo[0].src = "./images/blue logo png .png";
    listDiv.style.boxShadow = "1px 0px 10px grey";
    for (const array of homeMainDiv) {
      array.style.boxShadow = "1px 0px 10px grey";
    }
    darkMode = false;
    localStorage.setItem("isDarkMode", false);
  }
}

const listButton = document.getElementById("list-button");
const listDiv = document.getElementById("list-div");
const contentDiv = document.getElementById("content-div");
let isDivVisible = true;

listButton.addEventListener("click", () => {
  try {
    if (isDivVisible) {
      listDiv.classList.add("hidden");
      isDivVisible = false;
    } else {
      listDiv.classList.remove("hidden");
      isDivVisible = true;
      contentDiv.style.margin = "0px 10px";
    }
  } catch (error) {
  }
});

//Function for check screen with
function checkScreenWidth() {
  try {
    const mainDiv = document.getElementById("main-div");
    const nextPage =document.getElementById('next-page-center')
    if (window.innerWidth <= 850) {
      listDiv.classList.add("hidden"); 
      nextPage.classList.add("hidden"); 
      mainDiv.style.justifyContent = "start";
      contentDiv.style.margin = "0px";
    } else {
      listDiv.classList.remove("hidden");
      nextPage.classList.remove("hidden"); 
      mainDiv.style.justifyContent = "center";
      contentDiv.style.margin = '0px 14px';
    }
  } catch (error) {
    
  }
}

// Initial check when the page loads
checkScreenWidth();

// Listen for window resize events
window.addEventListener("resize", checkScreenWidth);


//function for code copy div
function codeCopyFunction(idName, btnId) {
  try {
    const textToCopy = document.getElementById(idName).innerText;
    const copyButton = document.getElementById(btnId);
    if (navigator.clipboard) {
      navigator.clipboard.writeText(textToCopy).then(() => {
        copyButton.style.backgroundColor = "green";
        copyButton.innerText = "copied";
      });
    }
    setTimeout(() => {
      copyButton.innerText = "copy";
      copyButton.style.backgroundColor = "#001b47";
    }, 10000);
  } catch (error) {
  }
}

//code for Search input
const availableKeyword = [
  "Java Script",
  "React JS",
  "Node JS",
  "Angular JS",
  "Mongo DB",
  "AWS",
  "JAVA",
  "Python",
  "Type Script",

  //nginx keyword
  "Nginx",
  "What is Nginx",
  "Nginx introduction",
  "C10k Problem",
  'What is "C10k problem"',
  "Nginx High Performance",
  "Worker Processes and Worker Connections",
  "Keep-Alive Connections",
  "Event Handling Mechanisms in Nginx",
  "Nginx High Performance",
  "Reverse Proxy",
  "Nginx Caching",
  "Types of Caching",
  "Proxy caching",
  "Nginx Load Balancing",
  "Load Balancing Configuration",
  "Nginx Security Features",
  "What Web Application Firewall",
  "Web Application Firewall in NGINX",
  "WAF in NGINX",
  "Web Application Firewall (WAF) Configuration",
  "Distributed Denial of Service (DDoS)",
  "DDos",
  "DDoS mitigation in NGINX",
  "SSL/TLS Termination",
  "SSL/TLS termination Configuration",
  "URL rewriting",
  "URL Rewriting Configuration",
  "Technologies Support to Nginx",
  "PM2 Commands",
  "PM2",
  "Why Configure Firewall",
  "Firewall Configure Commands",
  "Deploy Node js Project in Nginx",
];

const availableLinks = [
  { "Java Script": "coming-soon.html" },
  { "React JS": "coming-soon.html" },
  { "Node JS": "coming-soon.html" },
  { "Angular JS": "coming-soon.html" },
  { "Mongo DB": "coming-soon.html" },
  { "AWS": "coming-soon.html" },
  { "JAVA": "coming-soon.html" },
  { "Python": "coming-soon.html" },
  { "Type Script": "coming-soon.html" },

  //nginx
  { "Nginx": "Nginx-1-intro.html" },
  { "What is Nginx": "Nginx-1-intro.html" },
  { "Nginx introduction": "Nginx-1-intro.html" },
  { "C10k Problem": "Nginx-2-C10k.html" },
  { 'What is "C10k problem"': "Nginx-2-C10k.html" },
  { "Nginx High Performance": "Nginx-3-High Performance.html" },
  { "Worker Processes and Worker Connections": "Nginx-3-High Performance.html",},
  { "Keep-Alive Connections": "Nginx-3-High Performance.html" },
  { "Event Handling Mechanisms in Nginx": "Nginx-3-High Performance.html" },
  { "Nginx High Performance": "Nginx-3-High Performance.html" },
  { "Reverse Proxy": "Nginx-4-Reverse Proxy.html" },
  { "Nginx Caching": "Nginx-5-caching.html" },
  { "Types of Caching": "Nginx-6-Types-caching.html" },
  { "Proxy caching": "Nginx-7-Proxy caching.html" },
  { "Proxy Caching Configuring": "Nginx-8-Proxy-caching-config" },
  { "Nginx Load Balancing": "Nginx-9-Load-Balancing.html" },
  { "Load Balancing Configuration": "Nginx-10-Load Balancing configuration.html",},
  { "Nginx Security Features": "Nginx-11-Security-Features.html" },
  {"What Web Application Firewall": "Nginx-12-Web-Application-Firewall .html",},
  { "WAF in NGINX": "Nginx-13-WAF-Nginx.html" },
  { "Web Application Firewall in NGINX": "Nginx-13-WAF-Nginx.html" },
  { "Web Application Firewall (WAF) Configuration": "Nginx-14-WAF-Configuration.html",},
  { "DDos": "Nginx-15-DDoS.html" },
  { "Distributed Denial of Service (DDoS)": "Nginx-15-DDoS.html" },
  { "DDoS mitigation in NGINX": "Nginx-16-DDoS-Nginx.html" },
  { "SSL/TLS Termination": "Nginx-17-SSl-TLS-Termination.html" },
  { "SSL/TLS termination Configuration": "Nginx-18-SSL-TLS-Nginx.html" },
  { "URL rewriting": "Nginx-19-URL-Rewriting.html" },
  { "URL Rewriting Configuration": "Nginx-20-URL-Rewriting-Nginx.html" },
  { "Technologies Support to Nginx": "Nginx-21-Technologies-Support-in-Nginx.html",},
  { "PM2": "Nginx-22-PM2.html" },
  { "PM2 Commands": "Nginx-23-PM2-Commands.html" },
  { "Why Configure Firewall": "Nginx-24-Why-Configure-FireWall.html" },
  { "Firewall Configure Commands": "Nginx-25-FireWall-Commands.html" },
  { "Deploy Node js Project in Nginx": "Nginx-26-Deploy-Node-Project.html" },
];

const resultBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function () {
  try {
    let result = [];
    let input = inputBox.value;
    if (input.length) {
      result = availableKeyword.filter((keyword) => {
        return keyword.toLowerCase().includes(input.toLowerCase());
      });
    }
    display(result);
    if (!result.length) {
      resultBox.innerHTML = "";
    }
  } catch (error) {
    
  }
};

function display(result) {
  try {
    const content = result.map((list) => {
      return "<li  onclick = selectInput(this)>" + list + "</li>";
    });
    resultBox.innerHTML = "<ul>" + content.join("") + "</ul>";
  } catch (error) {
    
  }
}

function selectInput(selected) {
  try {
    const target = selected.textContent.trim();
    const foundLink = availableLinks.find((linkObj) => target in linkObj);
    let targetLink = Object.values(foundLink)[0];
    window.location.href = targetLink;
  } catch (error) {
    
  }
}

const smallResultBox = document.getElementById("index-result-box");
const smallInputBox = document.getElementById("small-input-box");

smallInputBox.onkeyup = function () {
  try {
    let result = [];
    let input = smallInputBox.value;
    if (input.length) {
      result = availableKeyword.filter((keyword) => {
        return keyword.toLowerCase().includes(input.toLowerCase());
      });
    }
    indexSearchDisplay(result);
    if (!result.length) {
      smallResultBox.innerHTML = "";
    }
  } catch (error) {
    
  }
};

function indexSearchDisplay(result) {
  try {
    const content = result.map((list) => {
      return "<li onclick = selectInput(this)>" + list + "</li>";
    });
    smallResultBox.innerHTML = "<ul>" + content.join("") + "</ul>";
  } catch (error) {
    
  }
}
