const x=document.querySelectorAll('.button')
const body=document.querySelector('body');


x.forEach((num)=>
                
            num.addEventListener('mouseover', (e)=>{   //  e.target.id used to get id of target of enevt listner at that time
            
                body.style.backgroundColor=e.target.id;
            
        }
            )
)