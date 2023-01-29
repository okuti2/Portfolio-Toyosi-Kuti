//Contact Form in PHP
const form = document.getElementByClassName(".php-email-form"),
statusTxt = document.getElementByClassName(".button-area");
form.addEventListener("submit", (e)=>{
  e.preventDefault();
  console.log("INSIDE THE EVENT LISTENER")
  statusTxt.innerHTML = "Sending your message..."
  form.classList.add("disabled");
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "/assets/vendor/php-email-form/message.php", true);
  xhr.onload = ()=>{
    if(xhr.readyState == 4 && xhr.status == 200){
      let response = xhr.response;
      if(response.indexOf("required") != -1 || response.indexOf("valid") != -1 || response.indexOf("failed") != -1){
        statusTxt.style.color = "red";
      }else{
        form.reset();
        setTimeout(()=>{
          statusTxt.style.display = "none";
        }, 3000);
      }
      statusTxt.innerText = response;
      form.classList.remove("disabled");
    }
  }
  let formData = new FormData(form);
  xhr.send(formData);
})




// form.onsubmit = (e)=>{
//   console.log("Insode contact form jS");
//   e.preventDefault();
//   statusTxt.style.color = "#0D6EFD";
//   statusTxt.style.display = "block";
//   statusTxt.innerHTML = "Sending your message...";
//   form.classList.add("disabled");

//   let xhr = new XMLHttpRequest();
//   xhr.open("POST", "message.php", true);
//   xhr.onload = ()=>{
//     if(xhr.readyState == 4 && xhr.status == 200){
//       let response = xhr.response;
//       if(response.indexOf("required") != -1 || response.indexOf("valid") != -1 || response.indexOf("failed") != -1){
//         statusTxt.style.color = "red";
//       }else{
//         form.reset();
//         setTimeout(()=>{
//           statusTxt.style.display = "none";
//         }, 3000);
//       }
//       statusTxt.innerText = response;
//       form.classList.remove("disabled");
//     }
//   }
//   let formData = new FormData(form);
//   xhr.send(formData);
// }