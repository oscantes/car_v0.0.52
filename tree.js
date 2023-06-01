class Tree {
  constructor(x) {
    this.x = x;
    this.speed = 0;
    this.rot_speed = 0;
    this.rot_acc = 0;
    this.rot_friction = 0;
  }

  show() {

    imageMode(CORNER);
    image(tree_image, this.x, height - tree_image.height);
    //load more than one objects like trees, clouds etc.
  }

  move() {
    this.speed = this.rot_speed * 0.34;
    this.x = this.x + this.speed;
    if (keyIsDown(UP_ARROW) & cars[0].gear === "A") {
      this.rot_acc = -0.28;
    }
    if (keyIsDown(UP_ARROW) & cars[0].gear === "Z") {
      this.rot_acc = 0.14;
    }
    if (keyIsDown(DOWN_ARROW)) {
      if (this.rot_speed < 0) {
        this.rot_speed += 0.65;
      } 
      else if (this.rot_speed > 0) {
        this.rot_speed -= 0.65;
      }
      else {
        this.rot_speed = 0;
      }
    }
    if ((keyIsDown(DOWN_ARROW) == 0) & (keyIsDown(UP_ARROW) == 0)) {
      this.rot_acc = 0;
    }


    this.rot_friction = this.rot_speed * 0.003;
    this.rot_speed = this.rot_speed + this.rot_acc - this.rot_friction;
  }

}
