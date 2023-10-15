const button = document.querySelector('.button')
const inputDate = document.querySelector('input[type = date]')

button.addEventListener('click', event=>{
   const result = document.querySelectorAll('h2');
   if(event.target.type == 'reset') {
      inputDate.value = '';
      for(let x of result) {
         x.innerHTML = "...";
      }
   } else if (event.target.type == 'submit') {
      if(inputDate.value == '') return alert('Enter Your Input')

      const dateNow = new Date();
      const dateOfBirth = new Date(inputDate.value)
      dateNow.setMonth(dateNow.getMonth()+1)
      dateOfBirth.setMonth(dateOfBirth.getMonth()+1)

      function getDays(){
         if(dateNow.getDate() < dateOfBirth.getDate()) {
            dateNow.setMonth(dateNow.getMonth()-1);
            const result = dateNow.getDate() + 30;
            return result - dateOfBirth.getDate(); 
         }
         return dateNow.getDate() - dateOfBirth.getDate() 
      }

      function getMonth(){
         if(dateNow.getMonth() < dateOfBirth.getMonth()){
            dateNow.setFullYear(dateNow.getFullYear()-1);
            const result = dateNow.getMonth() + 12;
            return result - dateOfBirth.getMonth();
         }

         return dateNow.getMonth()-dateOfBirth.getMonth();
      }

      function getYears() {
         return dateNow.getFullYear() - dateOfBirth.getFullYear()
      }

      const day = [getDays(), getMonth(), getYears()]
      for(let x = 0; x < result.length; x++) {
         result[x].innerHTML = day.reverse()[x];
      }
   }
   event.preventDefault();
})

document.querySelector('footer span').innerHTML = new Date().getFullYear();