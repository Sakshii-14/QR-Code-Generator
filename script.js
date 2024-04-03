let text = document.querySelector("#urlinput");

let btn = document.querySelector("#submitbtn");
btn.addEventListener("click",()=> text.value!=='' && generateQR());

function generateQR() {

    console.log(text.value);
    document.querySelector(".box1").classList.add("hidden");
    document.querySelector("#qrbox").classList.replace("hidden","block");    
    var qr = new QRious({
        element: document.getElementById("qrcode"),
        value: `${text.value}`, 
        size: 200 
    });

}

let download=document.querySelector("#download");
download.addEventListener("click",downloadqr);

let share=document.querySelector("#share");
share.addEventListener("click",downloadqr);

function downloadqr(){
    let canvas=document.querySelector("canvas");
    console.log(this.name);
    let link=document.querySelector('#qrlink');
    link.href=canvas.toDataURL('image/jpeg');
    if(this.name==='share')
    {
        navigator.clipboard.writeText(canvas.toDataURL('image/jpeg'));
        alert("QR copied to clipboard");
    }
    else
    {
        link.download='qr_code.jpeg';
    }
    
}


