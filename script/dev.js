const taskdone= document.getElementById('taskDone');
const bgcolor= document.getElementById('bgColor');
const tasknotdone= document.getElementById('taskNotDone');
const btncomp= document.getElementsByClassName('btn-comp');
const activity= document.getElementById('Activity');
const history = document.getElementById('History');

let taskNotDone= 6;
let taskDone=23;


for(let i=0; i<btncomp.length; i++){
  btncomp[i].addEventListener('click',function()
    {
      if (btncomp[i].classList.contains('opacity-50'))
        
      return;
      alert("Board Updated Successfully")
      

      btncomp[i].classList.add('opacity-50','cursor-not-allowed');
      btncomp[i].disabled = true;

      taskNotDone--;
      taskDone++;

      tasknotdone.innerHTML= taskNotDone;
      taskdone.innerHTML= taskDone;

      const task = btncomp[i].parentElement.parentElement.querySelector("p.font-medium.text-2xl").innerHTML;
    const time = new Date().toLocaleString();
    activity.innerHTML += `<p>${task} completed at ${time}</p><br>`;
    
  })

}
history.addEventListener('click',function(){
  activity.innerHTML=""
})