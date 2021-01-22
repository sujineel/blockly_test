// Ardublockly generated sketch
<<<<<<< HEAD
#include "DHT.h"
#include <LiquidCrystal_I2C.h>

#define DHTPIN8 8
#define DHTTYPE DHT11
DHT dht8(DHTPIN8 , DHTTYPE);
LiquidCrystal_I2C lcd(0x27, 16, 2);

void setup() {
  dht8.begin();
  lcd.begin();
  lcd.clear();

}

void loop() {
  float humid= dht8.readHumidity();
  float temp= dht8.readTemperature();
  int int_humid = (int)humid;
  int int_temp = (int)temp;
  lcd.setCursor(0,0);
  lcd.print("H: ");
  lcd.setCursor(6,0);
  lcd.print(int_humid);
  lcd.setCursor(0,1);
  lcd.print("T: ");
  lcd.setCursor(6,1);
  lcd.print(int_temp);
=======
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
>>>>>>> master

}