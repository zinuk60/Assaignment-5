//  code for heart icon

const accessLoveIcon=document.getElementsByClassName("fa-regular")
const accessHeartCount=document.getElementById("heart-count")
let heartCount=parseInt(accessHeartCount.innerText)
for(let i=0;i<accessLoveIcon.length;i++){
    
    accessLoveIcon[i].addEventListener('click',function(){
         heartCount++
         accessHeartCount.innerText=heartCount
    })
}


// code for call button

const accessCallButton=document.getElementsByClassName("call-button")
const accessCoinCount=document.getElementById("coin-count")
let coinCount=parseInt(accessCoinCount.innerText)

for(let i=0;i<accessCallButton.length;i++){
    
    const modifyI=i+1

 
     const accessHistoryItem=document.getElementById("history-item-"+modifyI)

     const accessHistoryTitle=document.getElementById("history-title-"+modifyI)
     const accessHistoryNumber=document.getElementById("history-number-"+modifyI)
     const time=document.getElementById("time-"+modifyI)
     const accessTitle=document.getElementById("title-"+modifyI).innerText
    const accessNumber=document.getElementById("number-"+modifyI).innerText
 

    accessCallButton[i].addEventListener('click',function(){
       
        if(coinCount<=0){
            alert("you have no available coin...you need 20 coin for a call")
            return
        }
        alert("calling "+accessTitle+ " "+accessNumber)
         coinCount-=20
        accessCoinCount.innerText=coinCount
         accessHistoryTitle.innerText=accessTitle
         accessHistoryNumber.innerText=accessNumber
         const now=new Date()
         let hour=now.getHours()
         let minit=now.getMinutes()
         let second=now.getSeconds()
         time.innerText=hour+":"+minit+":"+second

        accessHistoryItem.style.display="flex"
       
    })
}

const accessClear=document.getElementById("clear-button")
accessClear.addEventListener("click",function(){
    for(let i=1;i<10;i++){
        document.getElementById("history-item-"+i).style.display="none"
    }
})

 //code for copy

   const accessCopyCount=document.getElementById("copy-count")
    let copyCount=parseInt(accessCopyCount.innerText)

 
document.addEventListener('DOMContentLoaded', function() {
 
    for(let i=1;i<10;i++){
       
   
  const copyText=document.getElementById("number-"+i)
  const copyButton=document.getElementById("copy-"+i)
    copyButton.addEventListener("click",function(){
     const text = copyText.innerText
      navigator.clipboard.writeText(text)
      alert("copied number "+copyText.innerText) 
      copyCount++ 
       accessCopyCount.innerText=copyCount
  })
}})