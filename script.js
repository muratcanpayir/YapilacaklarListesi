var text = document.getElementById("task"); 
var ekle = document.getElementById("liveToastBtn"); 
var liste = document.getElementById("list"); 
var li = document.querySelectorAll("li"); 
window.onload = loadItems; 
 
for (var i = 0; i < 5; i++) { 
    const a = document.createElement("a"); 
    a.classList = "float-right delete-item btn btn-outline-dark"; 
    a.innerHTML = "x"; 
    li[i].appendChild(a); 
} 
ekle.onclick = addList; 
function addList(e) { 
    if (text.value == "") { 
        $('#liveToast1').toast('show') 
    } 
    else { 
        var lis = document.createElement("li"); 
        lis.appendChild(document.createTextNode(text.value)); 
        const b = document.createElement("a"); 
        b.classList = "float-right delete-item btn btn-outline-dark "; 
        b.innerHTML = "x"; 
        lis.appendChild(b); 
        liste.appendChild(lis); 
        $('#liveToast').toast('show') 
        var items = localStorage.getItem("items"); 
        if (items == null) { 
            items = []; 
        } 
        else { 
            items = JSON.parse(items); 
        } 
        items.push(text.value); 
        items = localStorage.setItem("items", JSON.stringify(items)); 
        text.value = ""; 
        e.preventDefault(); 
    } 
} 
function loadItems(){ 
    var items=localStorage.getItem("items"); 
    if(items){ 
        items=JSON.parse(items); 
        for( var i=0; i<items.length; i++){ 
            var lis = document.createElement("li"); 
        lis.appendChild(document.createTextNode(items[i])); 
        const b = document.createElement("a"); 
        b.classList = "float-right delete-item btn btn-outline-dark "; 
        b.innerHTML = "x"; 
        lis.appendChild(b); 
        liste.appendChild(lis); 
 
        } 
    } 
} 
liste.onclick = deleteItem; 
function deleteItem(e) { 
    var items =localStorage.getItem("items"); 
    if(items){ 
        items=JSON.parse(items); 
        for(var i=0; i<items.length; i++){ 
            if(e.target.parentElement.textContent==items[i]+"x"){ 
                items.splice(i,1); 
            } 
        } 
        localStorage.setItem("items",JSON.stringify(items)); 
    } 
    if (e.target.innerHTML == "x") { 
        e.target.parentElement.remove(); 
    } 
    e.preventDefault(); 
} 
liste.addEventListener("click", check); 
function check(e) { 
    if (e.target.tagName = "li") { 
        e.target.classList = "checked"; 
    } 
}