

function counter() {
  let obj;
  
  fetch('https://db7qhpf6o5.execute-api.us-east-1.amazonaws.com/Prod/{proxy+}')
    .then(res => res.json())
    .then(data => obj = data)
    .then(() => {
      console.log(obj.message)
      let content = document.getElementById('counter');
      let content2 = document.getElementById('counter2');
      let newString = document.createTextNode(obj.message)
      let newString2 = document.createTextNode(obj.message)

      content.appendChild(newString); //loads onto page
      content2.appendChild(newString2); //loads onto page


    })
   
}

window.onload = counter; //runs on window load