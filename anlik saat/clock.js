let user = prompt("Hoşgeldiniz ! Lütfen adınızı giriniz")

let userName = document.querySelector("#myName")
userName.innerHTML = user 
let myClock = document.querySelector("#myClock")

function timeShow() {
    const days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]
    let date = new Date()
    let day = days[date.getDay()]
    let now = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " " + day
    myClock.innerHTML = now
}

timeShow()
setInterval(timeShow, 1000)
