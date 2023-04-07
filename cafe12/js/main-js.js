window.onload = function (){
    // 디지털 시계
    setInterval(setWatch,1000);
    function setWatch(){
        const date = new Date();
        let now = date.toLocaleTimeString();
        document.getElementById("demo").innerHTML = now;
    }
    // 배경 이미지 change
    let picture = ["./images/header1.jpg", "./images/header2.jpg", "./images/header3.jpg"];
    let imgIdx=0;
    showPicture();
    function showPicture(){
        let img = document.getElementById("pic");
        img.src = picture[imgIdx];
        imgIdx++;
        if(imgIdx===picture.length){
            imgIdx=0;
        }
        setTimeout(showPicture,2000);
    }
}