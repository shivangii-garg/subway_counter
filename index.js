let count = document.getElementById("counter");
    console.log(count)
    let person = 0;
function increment() {
    person++
    count.innerHTML= person;
}

let save = () => {
   let prevEntries = document.getElementById("prevEntries");
   prevEntries.innerHTML = prevEntries.innerHTML + person + " - "
   person = 0;
    count.innerHTML= person;
}