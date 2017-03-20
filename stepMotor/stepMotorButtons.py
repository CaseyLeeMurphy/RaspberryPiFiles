import RPi.GPIO as GPIO
import time
import os

#adjust for where your switch is connected
clockwisePin = 22
counterClockwisePin = 40
GPIO.setmode(GPIO.BOARD)
GPIO.setup(clockwisePin,GPIO.IN)
GPIO.setup(counterClockwisePin, GPIO.IN)

while True:
    if (GPIO.input(clockwisePin)):
        os.system("python ./clockwise.py")
    elif (GPIO.input(counterClockwisePin)):
        os.system("python ./counterClockwise.py")
