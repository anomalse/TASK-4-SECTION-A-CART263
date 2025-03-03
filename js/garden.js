window.onload = function (){
// Our garden
let garden = {

    /*TEAM A - BEES*/
    bees: [], // Array to store bees
    numBees: 5 , // Number of bees to create,
     // array for squirrels 
     squirrels: [],
     //amount of squirrels in the garden
     numSquirrels: 5,

  //an array containing the bushes
     bushes: [],
     //an array containing the birds
     birds: [],

    // An array to store the individual flowers
    flowers: [],
    // How many flowers in the garden
    numFlowers: 20,

  /* new flowers */ 
    flowerE: [],
    // Number of flowers
    numFlowerE: 25,
    /*grass object */
    grass: {
      // The color of the grass (background)
      grassColor: {
        r: 120,
        g: 180,
        b: 120,
      },
      //the grass element
      grassDiv: document.createElement("div"),
    },
 
    /*sky object */
    sky: {
      // The color of the sky (background)
      skyColor: {
        r: 83,
        g: 154,
        b: 240,
      },
      //the sky element
      skyDiv: document.createElement("div"),
    },

     //the wire object
     wire: {
      wireColor: {
        r: 0,
        g: 0,
        b: 0,
      },
      //the wire element
      wireDiv: document.createElement("div"),
    }
  };
  // new  sun instancce
  let sun =  new Sun(10,10,{r: 240, g: 206,b: 83})

  function createAndRenderTheGarden() {
    /* note how we use dot notation....*/
    //sky
    garden.sky.skyDiv.classList.add("sky");
    garden.sky.skyDiv.style.background = `rgb(${garden.sky.skyColor.r},${garden.sky.skyColor.g},${garden.sky.skyColor.b})`;
    document.getElementsByTagName("main")[0].appendChild(garden.sky.skyDiv);
    //sun
    sun.renderSun();


      //wire
      garden.wire.wireDiv.classList.add("wire");
      garden.wire.wireDiv.style.background = `rgb(${garden.wire.wireColor.r},${garden.wire.wireColor.g},${garden.wire.wireColor.b})`;
      document.querySelector(".sky").appendChild(garden.wire.wireDiv);
      console.log(garden.wire.wireDiv);

    //grass
    garden.grass.grassDiv.classList.add("grass");
    garden.grass.grassDiv.style.background = `rgb(${garden.grass.grassColor.r},${garden.grass.grassColor.g},${garden.grass.grassColor.b})`;
    document.getElementsByTagName("main")[0].appendChild(garden.grass.grassDiv);

    //create some flowers
    for (let i = 0; i < garden.numFlowers; i++) {
        // Create variables for our arguments for clarity
        let x = Math.random() * (window.innerWidth);
        let y = Math.random() * 120;
        let size = Math.random() * 30 + 10;
        let stemLength = Math.random() * 50 + 20;
        let petalColor = {
          r: parseInt(Math.random() * 155) + 100,
          g: parseInt(Math.random() * 155) + 100,
          b: parseInt(Math.random() * 155) + 100,
        };
  
        // Create a new flower using the arguments
        let flower = new Flower(x, y, size, stemLength, petalColor);
        // Add the flower to the array of flowers
        garden.flowers.push(flower);
      }

      for (let i = 0; i < garden.numFlowers; i++) {
        // Add the flower to the array of flowers
        garden.flowers[i].renderFlower();
      }



    // create Flower E
    for (let i = 0; i < garden.numFlowerE; i++) {
      // Create variables for our arguments for clarity
      let x = Math.random() * window.innerWidth;
      let y = Math.random() * 120;
      let size = Math.random() * 30 + 10;
      let stemLength = Math.random() * 50 + 20;
      let petalColor = {
        r: parseInt(Math.random() * 155) + 100,
        g: parseInt(Math.random() * 155) + 100,
        b: parseInt(Math.random() * 155) + 100,
      };

      // Create a new flower using the arguments
      let flowerE = new Flower_E(x, y, size, stemLength, petalColor);
      // Add the flower to the array of flowers
      garden.flowerE.push(flowerE);
    }

    for (let i = 0; i < garden.numFlowerE; i++) {
      // Render the flower
      garden.flowerE[i].renderFlower_E();
    }

    //create some squirrels
    for (let i = 0; i<garden.numSquirrels; i++){
      //variables
      let x = Math.random() * (window.innerWidth);
      let y = Math.random() * 120;
      let size = Math.random() * 20 + 40;
      let squirrelShades = [
        '#858585',
        '#858585',
        '#858585',
        '#5e4831',
        '#ab9680',
        '#3f4d47'
      ]
      let shadesNumber = Math.floor(Math.random()*(squirrelShades.length+1));
      let squirrel = new Squirrel(x,y,size,(squirrelShades[shadesNumber]));

      garden.squirrels.push(squirrel);
    }

    for (let i = 0; i<garden.numSquirrels; i++){
      garden.squirrels[i].renderSquirrel();
    }

      //TEAM A - BEES
      for (let i = 0; i < garden.numBees; i++) {
        let x = Math.random() * window.innerWidth;
        let y = Math.random() * (window.innerHeight / 2); // Keep in sky area
        let beeColor = {
          r: 255,
          g: 215,
          b: 0
        };
  
        let bee = new Bee(x, y, beeColor);
        garden.bees.push(bee);
        bee.renderBee();
        bee.animateBee();
      }
  }
  createAndRenderTheGarden();


garden.grass.grassDiv.addEventListener("click", function (event) {
  //call the handleKeyDown method of class
  // self.handleMousePressed(self.x, self.y);
  console.log(event.clientX, event.clientY);
  let size = Math.random() * 300 + 10;
  
  // Create a new flower using the arguments
  let bush = new Bush(event.clientX, event.clientY, size);
  // Add the flower to the array of flowers
  garden.bushes.push(bush);
});

  window.addEventListener("keydown", function handleKeyDown(event) {
  //call the handleKeyDown method of class
  sun.handleKeyDownInSUn(event);

  //if is enter --
  if (event.code === "Enter") {
    console.log("Enter key pressed");

    //create some birds

    // Create variables for our arguments for clarity
    let x = Math.random() * (window.innerWidth);

    // Create a new flower using the arguments
    let bird = new Bird(x);
    // Add the flower to the array of flowers
    garden.birds.push(bird);

  }

  if (event.key === " ") {
    console.log("you press space bar");
    addWeed();

  }

});


//-----------------------//
  //weed 
  let weeds = [];
  let WeedSize = 150;

  //create some weeds 
  for (let i = 0; i < 5; i++) {
    let weed = new Weed(Math.random() * (window.innerWidth), Math.random() * 120, WeedSize);
    weeds.push(weed);
    console.log(weed);
  }

  // window.addEventListener('keydown', function (event) {
  //   if (event.key === " ") {
  //     console.log("you press space bar");
  //     addWeed();

  //   }
  // })

  function addWeed() {
    let newWeed = new Weed(Math.random() * (window.innerWidth), Math.random() * 120, WeedSize);
    weeds.push(newWeed);

  }

}

  

/**TEAM A -- BEES
 * 1/ Create a  file to hold a  Bee Class (i.e. Bee.js)
 * 2/ Create the Bee Class : a constructor which takes a position, size and color as parameters
 * 3/ Create a renderBee() method -> which essentially creates a HTML element(s) - could be
 * an image element :) or an svg .... representing a Bee... (see Sun or Flower for inspiration)
 * 4/ Create an animateBee()method in the Bee class - which will make a given Bee move around the garden - use the requestAnimationFrame() 
 * 5/ In garden.js add 5 new Bees to the garden (in an array) - 
 * all different sizes and colors and in different positions and then call the animateBee() method on all the Bees
 * 
*/

/**TEAM B -- SQUIRRELS
 * 1/ Create a  file to hold a  Squirrel Class (i.e. Squirrel.js)
 * 2/ Create the Squirrel Class : a constructor which takes a position, size and color as parameters
 * 3/ Create a renderSquirrel() method -> which essentially creates a HTML element(s) - could be
 * an image element :) or an svg .... representing a Squirrel... (see Sun or Flower for inspiration)
 * 4/ Create an animateSquirrel() method in the Squirrel class - which will make a given Squirrel move around the garden - use the requestAnimationFrame() 
 * 5/ In garden.js add 5 new Squirrels to the garden (in an array) - 
 * all different sizes and colors and in different positions and then call the animateSquirrel() method on all the Squirrels
 * 
*/

/** TEAM C -- BUSH
 * 1/ Create a  file to hold a  Bush Class (i.e. Bush.js)
 * 2/ Create the Bush Class : a constructor which takes a position, size and color as parameters
 * 3/ Create a renderBush() method -> which essentially creates a HTML element(s) - could be
 * an image element :) or an svg .... representing a Bush... (see Sun or Flower for inspiration)
 * 4/ add an mouse click event listener to the grass in the garden - such that wherever the mouse is clicked a bush will be added at that position 
 * 5/ In garden.js add initially one new bush (in an array) - 
 * 6/ Ensure that new bushes can be added to the garden
 * 
*/

/** TEAM D -- WEEDS
 * 1/ Create a  file to hold a  Weed Class (i.e. Weed.js)
 * 2/ Create the Weed Class : a constructor which takes a position, size and color as parameters
 * 3/ Create a renderWeed() method -> which essentially creates a HTML element(s) - could be
 * an image element :) or an svg .... representing a Weeds... (see Sun or Flower for inspiration)
 * 4/ Add a key event listener (in garden.js) such that when the SPACE bar is pressed - a new weed will be added to the garden.
 * 5/ In garden.js add initially  a couple of weeds (in an array) - 
 * 6/ Ensure that new weeds can be added to the garden.
 * 
*/


/** TEAM E -- ADD A DIFFERENT FLOWER CLASS
 * 1/ Create a  file to hold a  new Flower Class (i.e. Flower_E.js)
 * 2/ Create the Flower_E Class : a constructor which takes a position, size and color as parameters
 * 3/ Create a renderFlower_E() method -> which essentially creates a HTML element(s) - could be
 * an image element :) or an svg .... representing a new style of Flower... (see Sun or Flower for inspiration)
 * 4/ Add a mouse click event listener to each FlowerE  - such that when you click on it  - it switches color ... (everytime you click it should change color)
 * 5 / In garden.js add 25 new FlowerE objects to the garden (in an array) - different colors (make them quite small) -
 * 
*/

/** TEAM F -- Birds
 * 1/ Create a  file to hold a  Bird Class (i.e. Bird.js)
 * 2/ Create the Bird Class : a constructor which takes a position, size and color as parameters
 * 3/ Create a Bird() method -> which essentially creates a HTML element(s) - could be
 * an image element :) or an svg .... representing a Weeds... (see Sun or Flower for inspiration)
 * 4/ Add a key event listener (in garden.js) such that when the the return Key is pressed - a new bird will be added to the garden.
 * 5/ Create an animateBird() method in the Bird class - which will make a given Bird move around the sky - use the requestAnimationFrame() 
 * 6/ In garden.js add an empty array for the birds
 * 
 * 
*/

