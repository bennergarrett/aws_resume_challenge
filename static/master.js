

function counter() {
  let obj;
  
  fetch('https://penx8v1wwj.execute-api.us-east-1.amazonaws.com/Production')
    .then(res => res.json())
    .then(data => obj = data)
    .then(() => {
      console.log(obj)
      let content = document.getElementById('counter');
      let content2 = document.getElementById('counter2');
      let newString = document.createTextNode(obj)
      content.appendChild(newString); //loads onto page
      content2.appendChild(newString); //loads onto page


    })
   
}

window.onload = counter; //runs on window load