let btn=document.getElementById('my-btn');
btn.addEventListener("click",function(){
    window.alert("Record added successfully");
})
let dlt=document.getElementsByClassName('my-delete');
for(let i=0;i<dlt.length;i++){
dlt[i].addEventListener("click",function(){
    window.alert("Record deleted successfully");
})
}
