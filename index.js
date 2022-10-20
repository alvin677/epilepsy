let ctx;
let colors = ["orange", "purple", "red", "white"];

window.addEventListener('load', ()=> {
    let win = document.getElementById('win');
    ctx = win.getContext('2d');
    
    setInterval(function(){
		ctx.canvas.width = window.innerWidth;
		ctx.canvas.height = window.innerHeight;
		let r = Math.floor(Math.random()*colors.length);
        ctx.fillStyle = colors[r];
        ctx.fillRect(0, 0, win.width, win.height);
    },10);

})