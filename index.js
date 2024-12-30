let arr = [2,4,6,7,9,10,12,13];
let count = 0;
for(let i=0;i<=arr.length;i++){
  if(i%2==0){
    count++
  }
}
console.log(count)
let str = "racecare";
let bag = "";
function checkPalindrome(){
    for(let i=arr.length-1;i<=0;i++){
       if(bag==str){
         return true
       }else{
        return false
       }
    }
}