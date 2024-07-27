let imgBox=document.getElementById("imgBox")
let qrimage=document.getElementById("qrImage");
let qrText=document.getElementById("qrText");

let url="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="
function generateQR(){
    if(qrText.value.length>0){
    qrimage.src=url+qrText.value;
    imgBox.classList.add("show-img")
    }
    else{
        qrText.classList.add("error")
        setTimeout(()=>{
            qrText.classList.remove("error")
        },1000)
    }
}