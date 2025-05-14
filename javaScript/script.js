
// variavel recebe elementos button com class btn 
const btn = [...window.document.querySelectorAll("button.btn")]

//varivael recebe elemento com Id btnEnviar
const btnEnviar = window.document.querySelector("button#btnEnviar")


for (const i of btn) {

    let res = null
    
    i.addEventListener("click", function (){

        //for para varrer e eliminar class clicar
        for(const j of btn){
            j.classList.remove('clicar')
             
        }

        //adicionando class click em um elemento 
        i.classList.add('clicar')
        res = i.textContent
        sessionStorage.setItem('resultado', res)
       
        
})

}


//Envento para direcionar pagina
btnEnviar.addEventListener("click", function () {
   
    window.location.href = "./html/obrigado.html"
    const suaNota = window.document.getElementById('suaNota')
    suaNota.innerHTML = sessionStorage.getItem('resultado')
     


})





        

    



        
        
   
        
    
   

   


