const userName = document.getElementById("userName");

function validation(varName){// called Function

    if (varName.value==''|| varName.value==null) {
        onError(varName,"required");
    } else {
        onSuccess(varName);
    }
}

function radiocheckboxValidation(option)
{
    switch (option) {
        case "gender":
            var gen = document.getElementsByName("gender");
            for (var i = 0; i < gen.length; i++) {
                if (gen[i].checked) {
                    document.getElementById("radio").innerText = "";
                    break;
                }
                else {
                    document.getElementById("radio").innerText = "required";
                    document.getElementById("radio").style.color = "red";
                }
            }
            break;
            case "color":
            var col = document.getElementsByName("color");
            for (var i = 0; i < col.length; i++) {
                if (col[i].checked) {
                    document.getElementById("checkbox").innerText = "";
                    break;
                }
                else {
                    document.getElementById("checkbox").innerText = "required";
                    document.getElementById("checkbox").style.color = "red";
                }
            }
            break;
    }
    
}

function onSuccess(inputElement){
    let parent = inputElement.parentElement;
    parent.querySelector("small").innerText = "";
}

function onError(inputElement, message) {

    let parent = inputElement.parentElement;
    parent.querySelector("small").innerText = message;
    parent.querySelector("small").style.color = "red";

}
addEventListener("submit", (event) => {
    event.preventDefault();
   validation(userName);//calling Function
   validation(document.getElementById("email"));//calling Function
   validation(document.getElementById("password"));//calling Function
   validation(document.getElementById("selection"));//calling Function
   radiocheckboxValidation("gender");
   radiocheckboxValidation("color");

})






