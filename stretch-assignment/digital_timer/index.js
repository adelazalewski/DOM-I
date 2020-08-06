let timer = setInterval(doTheCount, 10);
const digits = document.querySelectorAll('.digit');
digits[1].textContent = "0";
digits[3].textContent = "0";
digits[4].textContent = "0";
function doTheCount(){
for(let i=0; i <=10; i++){
    if(digits[0] === 1){
        digits[0, 1, 2, 3, 4].style.color = "red";
        //clearInterval(timer);
    }
    
}
}
digits[4].style.color = "red";