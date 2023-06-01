//fixed acceleration of tires

let tree_image;
let f_wheel_image;
let r_wheel_image;
let trees = [];
let obstacles = [];
let cars = [];


function preload() {
  car_image = loadImage("/addons/bravo_body.png");
  cloud1_image = loadImage("/addons/cloud1.png");
  cloud2_image = loadImage("/addons/cloud2.png");
  tree_image = loadImage("/addons/tree.png");
  f_wheel_image = loadImage("/addons/bravo_front_wheel.png");
  r_wheel_image = loadImage("/addons/bravo_rear_wheel.png");
}

function setup() {
  //frameRate(25);

  createCanvas(1300, 400);
  trees.push(new Tree(678));
  obstacles.push(new Obstacle());
  cars.push(new Car(width / 2 - 250));

  for (var o of obstacles) {
    o.array();
  }

}

function draw() {
  background(240);

  //sorting is too important, this one works flawlessly but when show comes
  //after move, it sucks, learn the logic behind

  for (var t of trees) {
    t.show();
    t.move();
  }

  // for (var o of obstacles) {
  //   o.show();

  //   //eğer bir sonraki line'ın h değeri 0 ise yada öyle bir line bulamadıysa, ön tekerin y'sini sabit bıraksın önceki neyse olsun
  //   //yani burad
  // }

  for (var c of cars) {
    c.rotate();
    c.show();
    c.move();
    c.HUD();
  }

  
  if ((cars[0].fwx <= trees[0].x + 8) && (cars[0].fwx >= trees[0].x - 8)) {
    console.log(obstacles[0].h);
    
    suspension();
  }


}

function suspension() {
  if (cars[0].fwy > cars[0].fwy_olmasigereken) {

    cars[0].fwy = cars[0].fwy - 1;
  }

}


function keyPressed() {
  if (keyCode === 65) {
    cars[0].gear = "A";
  }
  else if (keyCode === 90) {
    cars[0].gear = "Z";
  }
  else if (keyCode === 78) {
    cars[0].gear = "N";
  }
}