function drawName(){
     const name = document.getElementById('nameInput').value;
     const font = document.getElementById('fontSelector').value;
     const canvas = document.getElementById('nameCanvas');
     const zim = canvas.getContext('2d');
     document.fonts.ready.then(() => {
          zim.clearRect(0,0,canvas.clientWidth,canvas.height);
          zim.font = `50px ${font}`;
          zim.fillStyle = 'black';
          zim.textAlign = 'center';
          zim.fillText(name,canvas.width / 2,canvas.height / 2 + 15);
     });
}
document.getElementById('fontSelector').addEventListener('change',() => {
     document.fonts.load(`50px ${document.getElementById('fontSelector').value}`).then(drawName);
});
document.getElementById('nameInput').addEventListener('input',() => {
     document.fonts.load(`50px ${document.getElementById('fontSelector').value}`).then(drawName);
});
function downloadImage(){
     const canvas = document.getElementById('nameCanvas');
     const a = document.createElement('a');
     a.href = canvas.toDataURL('image/png');
     a.download = 'handwritten-name.png';
     a.click();
};
document.getElementsByTagName('button')[0].addEventListener('click',downloadImage);