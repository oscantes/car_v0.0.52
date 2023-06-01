class Car {
  constructor(x) {
    this.x = x;
    this.fwx = this.x + 229;
    this.fwy = height - f_wheel_image.height / 2;
    this.fwy_olmasigereken = this.fwy - obstacles[0].h;
    this.rwx = this.x + 48;
    this.rwy = height - r_wheel_image.height / 2;
    this.gear = "N";
    this.speed = 0;
    this.rot_angle = 0;
    this.rot_speed = 0;
    this.rot_acc = 0;
    this.rot_friction = 0;
  }

  show() {
    angleMode(DEGREES);
    imageMode(CORNER);
    image(car_image, this.x, height - car_image.height);
  }

  HUD() {
    noStroke();
    fill(50, 80, 50);
    textSize(20);
    text("Fides: " + cars[0].gear, width - 150, 50);
    text("Sped: " + ceil(-(trees[0].speed*4)), width - 150, 80);

  }

  move() {
    //buradaki rot_speed'ler doğru mu? car move'da neden rot_speed olsun?
    if (keyIsDown(UP_ARROW) & cars[0].gear === "A") {
      this.rot_acc = 0.28;
    }
    if (keyIsDown(UP_ARROW) & cars[0].gear === "Z") {
      this.rot_acc = -0.14;
    }
    if (keyIsDown(DOWN_ARROW)) {
      if (this.rot_speed > 0) {
        this.rot_speed -= 0.65;
      }
      else if (this.rot_speed < 0) {
        this.rot_speed += 0.65;
      }
      else {
        this.rot_speed = 0;
      }
    }
    if ((keyIsDown(DOWN_ARROW) == 0) & (keyIsDown(UP_ARROW) == 0)) {
      this.rot_acc = 0;
    }
  }
  rotate() {
    this.rot_friction = this.rot_speed * 0.003;
    this.rot_speed = this.rot_speed + this.rot_acc - this.rot_friction;
    this.rot_angle = this.rot_angle + this.rot_speed;
    this.rot_angle = this.rot_angle % 360;

    //front wheel
    push();
    translate(this.fwx, this.fwy);
    rotate(this.rot_angle);
    imageMode(CENTER);
    image(f_wheel_image, 0, 0, f_wheel_image.width, f_wheel_image.height);
    pop();

    //rear wheel
    push();
    translate(this.rwx, this.rwy);
    rotate(this.rot_angle);
    imageMode(CENTER);
    image(r_wheel_image, 0, 0, r_wheel_image.width, r_wheel_image.height);
    pop();
  }
}
