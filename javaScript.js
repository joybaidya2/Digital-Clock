 function updateClock(){
    const now = new Date();
    let hours = (now.getHours()%12).toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');

    document.getElementById("digitalClock").innerHTML = hours+ ":"+ minutes+ ":"+seconds;
}
setInterval(updateClock, 1000);
updateClock();