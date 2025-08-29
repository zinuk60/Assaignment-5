const accessLoveIcon=document.getElementsByClassName("fa-regular")
const accessHeartCount=document.getElementById("heart-count")
let heartCount=parseInt(accessHeartCount.innerText)
for(let i=0;i<accessLoveIcon.length;i++){
    
    accessLoveIcon[i].addEventListener('click',function(){
         heartCount++
         accessHeartCount.innerText=heartCount
    })
}