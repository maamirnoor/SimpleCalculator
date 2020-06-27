function getNumber(num){
    var result = document.getElementById("result");
    result.value += num;
}
function clearInput(){
    var resultClear = document.getElementById("result");
    result.value = "";
}
function getResult(){
    var result = document.getElementById("result");
    if(result.value === ""){
        result.value = "0";
    }
    else{
        result.value =eval(result.value);
    }
}