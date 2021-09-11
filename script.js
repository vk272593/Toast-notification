const btn = document.getElementById('btn')
const container = document.getElementById('container')


btn.addEventListener('click',()=>{
    addToastNotification();
})
 function addToastNotification(){
     const notif =document.createElement('div');
     notif.classList.add("toast");
     notif.innerText="Having fun during web development";
     container.appendChild(notif)
    setTimeout(()=>{
      notif.remove();
    },3000)

}