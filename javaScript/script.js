const bnt = document.getElementsByClassName('bnt')




    bnt.addEventListener('click',() => {

        for(i of bnt){

            if (!i.classList.contains('nota')){
                i.classList.add('nota')
             }
        }

    
})

  



