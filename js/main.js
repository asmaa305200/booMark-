var nameInput = document.getElementById("name");
var urlInput = document.getElementById("url");
var searchInpt = document.getElementById("search");
var alertt = document.getElementById("alertt");
var nameAlert = document.getElementById("nameAlert");
var urlAlert = document.getElementById("urlAlert");



var websitesArr=[];


// function add(){
//     var websites = {
//         websitename: nameInput.value,
//         websiteurl: urlInput.value,
//     }
//     if (validation(websites)) {
//          websitesArr.push(websites);
//     console.log(websitesArr);
//     clear()
//     display()
//     }
//     else {
//         alert('invalid')
//     }
   
// }
if (localStorage.getItem('sites')) {
    websitesArr = JSON.parse(localStorage.getItem('sites'));
    display(websitesArr)
}
else {
    websitesArr = []; 
}
function add() {
    if (validationSiteName() == true && validationSiteUrl() == true) {
       var websites = {
        websitename: nameInput.value,
        websiteurl: urlInput.value,
    }
    websitesArr.push(websites);
    console.log(websitesArr);
    localStorage.setItem('sites', JSON.stringify(websitesArr));
    clear()
    display(websitesArr)  
    }
    else {
        alertt.classList.remove('d-none')
        alertt.classList.add('d-flex')
    }
    
}
 
function clear() {
    nameInput.value = "";
    urlInput.value = "";
}
    
function display(arr) {
    var box = " ";
    for (i = 0 ; i < arr.length; i++){
        var index = i + 1;
      box +=`<tr> 
            <td>${index}</td>
            <td>${arr [i].websitename}</td>
           <td><button class="btn btn-sm btn-danger" onclick="visitedwebsite(${i})">Visit</button></td>
           <td><button class="btn btn-sm btn-secondary" onclick="deletewebsite(${i})">Delete</button></td>
        </tr> `
    }
    document.getElementById("tbody").innerHTML = box;
}

function deletewebsite(arr) {
    websitesArr.splice(arr, 1)
    display(websitesArr)
}
function search() {
    var term = searchInpt.value;
    var box = '';
    for (i = 0; i < websitesArr.length; i++){
        if (websitesArr[i].websitename.includes(term)) {
             var index = i + 1;
             box +=`<tr> 
            <td>${index}</td>
            <td>${websitesArr [i].websitename}</td>
           <td><button class="btn btn-sm btn-danger" onclick="visitedwebsite(${i})">Visit</button></td>
           <td><button class="btn btn-sm btn-secondary" onclick="deletewebsite(${i})">Delete</button></td>
             </tr> `
        }
         document.getElementById("tbody").innerHTML = box;
    }
}

function deleteAll() {
    var deletedSites = [];
    deletedSites = websitesArr.splice(0);
    display(websitesArr) 
}

function visitedwebsite(y) {
    window.open(websitesArr[y].websiteurl, '_blank');
}

// function validation(websites) {
    
//     var regex = /^[0-9]{1}[A-Z]{3,}/
//     if (regex.test(websites.websitename)) {
     
//         return true
//     }
//     else {
//         return false
//     }
// }

//REALtIME Validation
function validationSiteName() {
    var nameRegex =/^[a-z]{3,5}[0-9]*$/
    var name = nameInput.value;
    if (nameRegex.test(name) == true) {
               nameAlert.classList.add('d-none')
                nameAlert.classList.remove('d-flex')
        return true
    }
    else {
        nameAlert.classList.remove('d-none')
        nameAlert.classList.add('d-flex')
        return false
    }
}
function validationSiteUrl() {
    var UrlRegex = /(?:https?|ftp):\/\/[^\s/$.?#].[^\s]*/;;
    var Url = urlInput.value;
    if (UrlRegex.test(Url) == true) {
               urlAlert.classList.add('d-none')
                urlAlert.classList.remove('d-flex')
        return true
    }
    else {
        urlAlert.classList.remove('d-none')
        urlAlert.classList.add('d-flex')
        return false
    }
}

function closeAll() {
    alertt.classList.add('d-none')
    
}