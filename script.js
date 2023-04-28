/* const showBtns=document.querySelectorAll(".show");
const answers=document.querySelectorAll(".answer");
let isShow=false;
let i=0;
for(i;i<showBtns.length -1;i++){
    for(i;i<answers.length-1;i++){
        showBtns[i].addEventListener("click",()=>{
            if(isShow=false){
                answers[i].style.display="none"
                showBtns[i].innerHtml='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/></svg>'
                isShow=true
            }
            else{
                answers[i].style.display="inline-block"
                showBtns[i].innerHtml='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/> </svg>'
                isShow=false
        
            }
        })
    }
    }
 */



/*  function show(){
    answers.forEach(answer=>{
        if(isShow=false){
            answer.style.display="none"
            btn.innerHtml='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/></svg>'
            isShow=true
        }
        else{
            answer.style.display="inline-block"
            btn.innerHtml='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/> </svg>'
            isShow=false
    
        }
    })

 *//* 
}

showBtns.forEach(btn=>btn.addEventListener("click",show))  */