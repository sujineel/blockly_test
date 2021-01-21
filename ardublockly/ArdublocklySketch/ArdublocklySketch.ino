// Ardublockly generated sketch
#include <Stepper.h>
#include <Servo.h>

int MyStepper[2] = {1, 2};

Stepper stepper_MyStepper(360, 1, 2);
Servo myServo3;

void setup() {
  stepper_MyStepper.setSpeed(90);
  myServo3.attach(3);
}

void loop() {
  myServo3.write(90);

}