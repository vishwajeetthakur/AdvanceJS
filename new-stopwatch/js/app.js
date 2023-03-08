// const endDate = document.getElementById("end-date").value
// console.log(document.getElementById("end-date").value)

// setInterval(()=>{
//     console.log(document.getElementById("end-date").value)
// },1000)


// var endDate = document.getElementById("end-date").value 
const inputs = document.querySelectorAll("input")

function clock(){
    var endDate = document.getElementById("end-date").value
    console.log(endDate)
    if(endDate==""){
        console.log("empty")
        return
    }
    
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now)/1000 
    if (diff < 0){
        
        return
    }
    let days = Math.floor(diff/(24*60*60)); 
    
    let hours = Math.floor((diff-24*60*60*days)/(60*60)); 

    let minutes = Math.floor((diff-24*60*60*days - 60*60*hours)/60); 
    
    let seconds = Math.floor(diff-24*60*60*days - 60*60*hours - 60*minutes);
    
    console.log(days, hours, minutes, seconds)
    console.log(inputs)
    inputs[1].value = checkTime(days)
    inputs[2].value = checkTime(hours)
    inputs[3].value = checkTime(minutes)
    inputs[4].value = checkTime(seconds)
    
}
function checkTime(i) {
    if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

clock()

setInterval(()=>{clock()},1000)

