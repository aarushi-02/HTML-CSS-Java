let phone = []
function checkdata(){
    var username = document.getElementById("username").value;
    dict = {
        one : 1,
        two : 2,
        three : 3,
        four : 4,
        five : 5,
        six : 6,
        seven : 7,
        eight : 8,
        nine : 9,
        zero : 0
    }
    if(username== "" ||(dict.hasOwnProperty(username) == false) ){
        alert("Please enter valid number word");
        return false;
    }
    else if(dict.hasOwnProperty(username)){
        //alert("Great!");
        phone.push(dict[username])
        //console.log("value:", dict[username])
        console.log('phone:', phone)
        display(phone)
        return true;
    }
    else{
        alert("Something is missing");
        return false;

    }
}
function display(phone){
    console.log("display:", phone)
    let list = document.getElementById("phNum");
    let digits = ""
    phone.forEach((item) =>{
        digits= digits + " "+ item;
        //console.log("digits:", digits)
    });
    list.innerHTML=digits;
}
function sub(){
    //let list = document.getElementById("phNum");
    if ((phone.length)==10){
        alert ("Successfully submitted");
        return true;
    }
    else{
        alert("Enter a valid number")
        return false;
    }
}
function res(){
    document.getElementById("myForm").reset();  
}
setTimeout(function(){
    alert("TIMEOUT!");
    window.location.reload();
 }, 40000);
