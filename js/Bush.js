class Bush {
    constructor(x,y,size, grassElement) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.img = document.createElement("img");
        this.img.src = "images/bush.png";
        self = this;

        console.log("hello");

        this.renderBush();

       
        };

        handleMousePressed(mouseX, mouseY) {
            console.log("mouse click");
            console.log(this);

            this.img.style.left = mouseX + "px";
            this.img.style.top = mouseY + "px";
        }
    renderBush() {
        
        this.img.classList.add("bush");
        this.img.style.left = this.x + "px";
        this.img.style.top = (this.y -280 - this.size/2) + "px";
        this.img.style.width = this.size+"px";
        this.img.style.height = this.size+"px";
        document.getElementsByClassName("grass")[0].appendChild(this.img);
    };
}
