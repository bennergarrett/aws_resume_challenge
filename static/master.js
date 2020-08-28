function counter() {
    let content = document.getElementById('counter');
    let getPart = content.textContent.replace( /[^\d.]/g, '' ); // returns number
    let num = parseInt(getPart); // gets rid of any unecessary parts
    let newVal = num+1; // returns number+1
    let reg = new RegExp(num); // create dynamic regexp
    let newString = content.textContent.replace ( reg, newVal ); // returns original with new number
    content.innerHTML =newString; //loads onto page
    console.log(newString); //logs it as well on console
}


  window.onload = counter; //runs on window load