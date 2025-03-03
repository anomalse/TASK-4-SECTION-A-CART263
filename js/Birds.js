//Sean, Daniel, and Kiana
class Bird {
    constructor(x) {
        // We write instructions to set up a Flower here
        // Position and size information
        this.x = x;
        this.y = 140;
        this.w = 92;
        this.h = 90;
        this.v = 3.5;
        this.aniRef = null;
        this.skyBound = document.querySelector(".sky").getBoundingClientRect();

        // Color information

        this.image = document.createElement("img");
        this.image.src = "images/Bird.png";
        this.renderBird();
    }


    //render method
    renderBird() {
        this.image.classList.add("Bird");
        this.image.style.left = this.x + "px";
        this.image.style.top = this.y + "px";
        this.image.style.width = this.w + "px";
        this.image.style.height = this.h + "px";
        this.image.style.position = "absolute";
        //add to the DOM
        document.querySelector(".sky").appendChild(this.image);
        this.aniRef = window.requestAnimationFrame(() => this.animateBird());
    }

    animateBird() {
        this.y += this.v;
        console.log(this.y)
        if (this.y > this.skyBound.height - this.h || this.y < 0) {
            this.v = -this.v;
        }
        this.image.style.top = this.y + "px";
        this.aniRef = window.requestAnimationFrame(() => this.animateBird());
    }

}