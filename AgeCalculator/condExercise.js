var age = Number( prompt("what is your age?"));

if( age < 0){
    alert("Error message");
}
 if (age > 0 && age < 21 ){
    alert("you are a minor");
}
if (age === 21){
    alert("Happy 21st birthday!");
}

