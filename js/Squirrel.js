class Squirrel {
    constructor(x,y,size,furColor) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.furColor = furColor;

        this.squirrelBodyDiv = document.createElement('div');

        this.textSmiley = ':)';
        this.moveX = 1;
        this.moveY = 1;
        
        
    }
    renderSquirrel() {
        let self = this;
        window.requestAnimationFrame(function(){
            self.animateSquirrels()
            console.log("go")
        });
        
        this.squirrelBodyDiv.classList.add('squirrel-body');
        this.squirrelBodyDiv.style.width = this.size + 'px'
        this.squirrelBodyDiv.style.height = this.size + 'px'
        this.squirrelBodyDiv.style.backgroundColor = this.furColor;
        this.squirrelBodyDiv.style.left = this.x+"px";
        this.squirrelBodyDiv.style.top = this.y+"px";
        this.squirrelBodyDiv.innerHTML += '<p>【≽ܫ≼】totally a squirrel</p>';

        //add squirrels to DOM
        document.getElementsByClassName('grass')[0].appendChild(this.squirrelBodyDiv);
    }

    animateSquirrels(){

        console.log("here")

        let self = this;
        let d = this.squirrelBodyDiv;
        let left = parseInt(d.style.left) + this.moveX;
        let top = parseInt(d.style.top) + this.moveY;

        
        if (left <= 0 || left >= 1890 - 20) {
            this.moveX *= -1;
        }
        if (top <= 0 || top >= 645 - 20) {
            this.moveY *= -1;
        }
        
        d.style.left = left + 'px';
        d.style.top = top + 'px';
        window.requestAnimationFrame(function(){
            self.animateSquirrels()
        });

    }
}