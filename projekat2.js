
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("lista").innerHTML = localStorage.getItem("autosave");
});


function dodajTask() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("task").value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
   
    

    if (inputValue === '') {
        alert("You must write task!");
    } else {
        document.getElementById("lista").appendChild(li);
    }

    document.getElementById("task").focus();
    document.getElementById("task").value = "";

    let span = document.createElement("span");
    let tekst = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(tekst);
    li.appendChild(span);

    let close = document.getElementsByClassName("close");
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            let result = confirm("Want to delete?");
            if (result) {
                let div = this.parentElement;
                div.style.display = "none";
            }
           
        }
        
    }
   

    let listaSave = document.getElementById("lista").innerHTML;
    localStorage.setItem("autosave", listaSave);

}

function filtriranje() {
    let upit = document.getElementById("filter").value;
    let myList = document.getElementById("lista");

    myList.querySelectorAll("li").forEach(function (item) {

        if (!item.innerText.toUpperCase().includes(upit.toUpperCase()))
            item.remove();
    });
 
    input = document.getElementById("filter");
    filter = input.value.toUpperCase();
    ul = document.getElementById("lista");
  
    for (i = 0; i < ul.length; i++) {
       
        a = ul[i].getElementsByTagName("lista")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
        ul[i].style.display = "";
        } else {
            ul[i].style.display = "none";
        }
    }

}

function removeTasks() {
    x = document.getElementById("lista");
    x.parentNode.removeChild(x);
    localStorage.clear();

}


