let dog,sadDog,happyDog;
let ground
let sun
let sunI
let milk,milkImg
let milk2
let milk3
let milk4
let milk5
let table,tableSt
let feedBtn
let f2
let f3
let f4
let f5
let addBtn
let add2
let add3
let add4
let add5
let moveBox
let moveBox2


let database, position;

//===================================================================================================================================

function preload(){
  sadDog=loadImage("Dog.png");
  happyDog=loadImage("happy dog.png");
  milkImg=loadImage("Milk.png")
  sun = loadImage("Sun.png")

}

function setup() {
  createCanvas(1000,400);
  //=============================================================================================================================
  database = firebase.database();
  //=============================================================================================================================
  ground = createSprite(100, 400, 1900, 200)
  ground.shapeColor = "#84DE02"


  // Dog Position
  let dog=createSprite(850,270,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

 moveBox=createSprite(0,-100,20,20)

  
  let moveBoxPosition = database.ref("Milk2")

  moveBoxPosition.on("value", readPosition2, showErr2)

  


  moveBox2 = createSprite(0, -200, 20, 20)
  let moveBox2Position = database.ref("Milk")
  moveBox2Position.on("value", readPosition, showErr)
  



  sunI = createSprite(690, 50, 150, 150);
  sunI.addImage(sun);
  sunI.scale = 0.15;
  
  

  
  
  table=createSprite(220,80,400,60)
  table.shapeColor ="#B5651D"
  

  
  tableSt=createSprite(60,20,10,60)
  tableSt.shapeColor ="#553000"
  

  tableSt = createSprite(378, 20, 10, 60)
  tableSt.shapeColor = "#553000"
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  milk = createSprite(12005, 80, 20, 20);
  milk.addImage(milkImg)
  milk.scale = 0.08

  

  
  


  

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  milk2 = createSprite(17000, 80, 20, 20);
  milk2.addImage(milkImg)
  milk2.scale = 0.08


  milk3 = createSprite(210006, 80, 20, 20);
  milk3.addImage(milkImg)
  milk3.scale = 0.08

  milk4 = createSprite(26000005, 80, 20, 20);
  milk4.addImage(milkImg)
  milk4.scale = 0.08

  milk5 = createSprite(3100000, 80, 20, 20);
  milk5.addImage(milkImg)
  milk5.scale = 0.08


//========================================================================================================



feedBtn=createButton("Feed The Dog");
feedBtn.position(950,95)
feedBtn.mousePressed(add)

  addBtn = createButton("Add 1 Milk");
  addBtn.position(1100, 95)
  addBtn.mousePressed(feed)

  add2 = createButton("Add 2 Milk");
  add2.position(1100, 125)
  add2.mousePressed(feed2)

  add3 = createButton("Add 3 Milk");
  add3.position(1100, 155)
  add3.mousePressed(feed3)

  add4 = createButton("Add 4 Milk");
  add4.position(1100, 185)
  add4.mousePressed(feed4)

  add5 = createButton("Add 5 Milk");
  add5.position(1100, 215)
  add5.mousePressed(feed5)

  f2=createButton("Feed The Dog")
  f2.position(950,125)
  f2.mousePressed(addFood2)

  f3 = createButton("Feed The Dog")
  f3.position(950, 155)
  f3.mousePressed(addFood3)

  f4 = createButton("Feed The Dog")
  f4.position(950, 185)
  f4.mousePressed(addFood4)

  f5 = createButton("Feed The Dog")
  f5.position(950, 215)
  f5.mousePressed(addFood5)


//===============================================================================================================================

  let input = createInput('').attribute('placeholder', 'Name Of The Dog ');
let inputBtn=createButton("Done")
input.position(980,440)
inputBtn.position(1145,440)

  inputBtn.mousePressed(function () {
    input.hide();
    inputBtn.hide();

    let name = input.value();


    let greeting = createElement('h3');
    greeting.html(name)
    greeting.position(1015, 430)

    //To be used After
    if (greeting.length = 1) {
      greeting.position(1060, 427)
    }

    if (greeting.length = 2) {
      greeting.position(1052, 427)
    }

 if (greeting.length = 3) {
      greeting.position(1044, 427)
    }

    if (greeting.length = 4) {
      greeting.position(1036, 427)
    }

    if (greeting.length = 5) {
      greeting.position(1028, 427)
    }

    if (greeting.length = 6) {
      greeting.position(1020, 427)
      
    }
 
    let dogTable=createSprite(855,378,110,20)
    dogTable.shapeColor="cyan"
    
  })

  //==================================================================================================================================
  
}

function draw() {
  background(" #00B2FF");
 
  drawSprites();

}





  



//=====================================================================================================================
function feed() {
  
   
  
  milk.x=125
  milk.y=80
  dog.addImage(sadDog)
  dog.y=270
  moveBox2.x = moveBox2.x + 1
   writePosition(1,0)
  }

function feed2() {


  milk2.x=170
  milk2.y=80
  dog.addImage(sadDog)
  dog.y = 270
  moveBox2.x = moveBox2.x + 1
  writePosition(1, 0)

}

function feed3() {

  milk3.x = 216
  milk3.y = 80
  dog.addImage(sadDog)
  dog.y = 270
  moveBox2.x = moveBox2.x + 1
  writePosition(1, 0)
  
}

function feed4() {


  milk4.x=265
  milk4.y=80
  dog.addImage(sadDog)
  dog.y = 270
  moveBox2.x = moveBox2.x + 1
  writePosition(1, 0)
}

function feed5() {


  milk5.x = 310
  milk5.y = 80
  dog.addImage(sadDog)
  dog.y = 270
  moveBox2.x=moveBox2.x+1
  writePosition(1, 0)
}


//=================================================================================================================================

function add(){

if(milk.x===125 && milk.y===80){
milk.x=815;
milk.y=330
dog.addImage(happyDog)
dog.y=280
moveBox.x=moveBox.x+1
writePosition2(1,0);

  
}
  
}

function addFood2() {

  if (milk2.x === 170 && milk2.y === 80) {
    milk2.x = 815
    milk2.y = 330
    dog.addImage(happyDog)
    dog.y = 280
    moveBox.x = moveBox.x + 1
    writePosition2(1, 0);
  }
}


function addFood3() {
  if (milk3.x === 216 && milk3.y === 80) {
    milk3.x = 815
    milk3.y = 330
    dog.addImage(happyDog)
    dog.y = 280
    moveBox.x = moveBox.x + 1
    writePosition2(1, 0);
  }
}


function addFood4() {
  if (milk4.x === 265 && milk4.y === 80) {
    milk4.x = 815
    milk4.y = 330
    dog.addImage(happyDog)
    dog.y = 280
    moveBox.x = moveBox.x + 1
    writePosition2(1, 0);
  }
}

function addFood5() {
  if (milk5.x === 310 && milk5.y === 80) {
    milk5.x = 815
    milk5.y = 330
    dog.addImage(happyDog)
    dog.y = 280
    moveBox.x = moveBox.x + 1
    writePosition2(1, 0);
  }
}

































































function writePosition(x, y) {
  database.ref("Milk").set({

    Total_Milk: moveBox.position.x + x,
   
  })


}

function readPosition(data) {

  position = data.val()
  

}

function showErr() {

  console.log("Error!")
}

//=============================================================================================================

function writePosition2(x, y) {
  database.ref("Milk2").set({

    Milk_Over: moveBox2.position.x + x,

  })


}

function readPosition2(data) {

  position = data.val()


}

function showErr2() {

  console.log("Error!")
}








console.log("Script loaded");

// setTimeout function to log "foo" after 2 seconds
setTimeout(() => {
  console.log("virtual");
}, 2000);

// setInterval function to log "bar" every 3 seconds
setInterval(() => {
  console.log("pet");
}, 3000);

// Promise function to resolve after 1 second and log "baz"
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("start");
  }, 1000);
});

myPromise.then((message) => {
  console.log(message);
});

// Implicit type function
function add(a, b) {
  return a + b;
}

console.log(add(5, 10)); // 15

// Explicit type function
/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function multiply(a, b) {
  return a * b;
}

console.log(multiply(5, 10)); // 50

// Inheritance and static functions
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound`);
  }

  static info() {
    console.log("This is an animal class");
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} barks`);
  }

  static info() {
    console.log("This is a dog class");
  }
}

const dog = new Dog("Buddy", "Golden Retriever");
dog.speak(); // Buddy barks
Dog.info(); // This is a dog class







//===========================================================================================================================

/*                                      |-----    |\    |     |\
                                        |         | \   |     |  \
                                        |----     |  \  |     |   |
                                        |         |   \ |     |  / 
                                        |-----    |    \|     |/
*/
                                             
