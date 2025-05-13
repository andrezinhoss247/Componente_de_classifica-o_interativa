
const btn = [...window.document.querySelectorAll('button.btn')]
const btnEnviar = window.document.getElementById('btnEnviar')

let resultado 

for (const i of btn) {

    
    i.addEventListener("click", function (){

        for(const j of btn){
            j.classList.remove('clicar')
             
        }
        i.classList.add('clicar')
         
         
        resultado = i.innerHTML

          
})

}
btnEnviar.addEventListener("click", function () {

    window.location.href = "../html/obrigado.html"
})




        

    



        
        
   
        
    
   

   


