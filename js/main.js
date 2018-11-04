function batteryCharge() {
    let battery = document.getElementById('battery');
    //battery begin full
    battery.innerHTML = '&#Xf240';
    setTimeout(function () {
        battery.innerHTML = '&#xf244';
    }, 1000)
    setTimeout(function () {
        battery.innerHTML = '&#xf243';
    }, 2000)


    setTimeout(function () {
        battery.innerHTML = '&#xf242';
    }, 3000);

    setTimeout(function () {
        battery.innerHTML = '&#xf241';
    }, 4000);



}
//animation call
batteryCharge();
//animation interval every 2 seconds
setInterval(batteryCharge, 5000);