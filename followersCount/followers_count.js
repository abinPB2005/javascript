let count = 0;
function increaseCount() {
    count++;
    displayCount();
    checkCountValue();
}
function checkCountValue() {
    if (count === 10){
        alert("Your instagram post gained 10 followers! congratulations!");
    } else if(count === 20){
        alert("Your instagram post gained 20 followers! keep it up!");
    }
}
function displayCount() {
    document.getElementById('countDisplay').innerHTML=count;
}