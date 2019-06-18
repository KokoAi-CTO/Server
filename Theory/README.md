# Welcome to Cloud Rover Theory!

Hi! **I'm am your Guide for today **Khalid**. Today I well be Guiding on how to Setup the Rover System.  Start by reading the General Overview of how the System works.


## General Overview

The System Framework is Based on Worker Client Server 

First start with the **Server** the Servers Roll is to Mange and Process the data Between Client and Worker.  
 
>**Full System OverView**
![enter image description here](https://lh3.googleusercontent.com/tTmoy7Ed8OS9UAohbonEa4FdJaafClE4Oyy_9nH2b1FX8S4EkKeHftA83CAEDPKU1iKipoCISAnDSw "SystemOverView")
**Server - Rover System**
![enter image description here](https://lh3.googleusercontent.com/IjcPyql4Budtm5R5EZQ_0og0Z3MF6asX9wZqNe05XyqqWB-1D1E_xSB0kGhlmyMTtzWJ0Rp_4is1MA "Server-Rover-Dig")
**Server - Client User System**
![enter image description here](https://lh3.googleusercontent.com/JgWf4GZJxozcMaUhUJuyQf3laxpxLWiXUyaH2rRJ7XCROv7cJvojuC2Gp0bd0tiy2kEGwGrj9lDulw "Server-CL")

## **Robot System🚋**

Input Data Relative to Server:

Raw Data:

-   4 Ultrasonic example : 30 cm
    
-   1 Image Stream example: JPG
    
-   WiFi DP data: 50dp
    
-   WiFi Mac-address: Fx-f4-r4-t4
    
-   Accelerometers data : x-y-z m/s^2
    
-   Time: sec
    

Received Data: from Server:

-   Motor Control: Left Side Wheels
    

-   Speed PWM
    

-   Motor Control: Right Side Wheels
    

-   Speed PWM
    

-   LED : RGB
    
-   Speaker :
    
-   Box Lock/Unlock Servo

![enter image description here](https://lh3.googleusercontent.com/MkF5BhsCiGJ5sz4bzIOI8uth7NSbjKuspcFhgLy0dA3fLVKry5hfxT6JkZdQkRDVwfafS9lbJTpOzQ "SmallRover")
![enter image description here](https://lh3.googleusercontent.com/vd8Prq35JOT-pGs_gyffs-lAyJLXmnXB_UpeJdqSc4CGzcW8ziJtwxb1Ko1FEhUzp6kT88OYCqKhgA)

![enter image description here](https://lh3.googleusercontent.com/vCENYQp59QuEk8ibIx9a4ZvHPkKihxpi2va1d8lh-wtPIE3qv7f14-KgIwi_aXFY5pvIxzHaDid_RA)

## **Server System 🚀**
***Received Data Relative to Clients :***

***JSON Data Rover:***

-   4 Ultrasonic example : 30 cm
    
-   1 Image Stream example: JPG
    
-   WiFi DP data: 50dp
    
-   WiFi Mac-address: Fx-f4-r4-t4
    
-   Accelerometers data : x-y-z m/s^2
    
-   Time: sec
    

***JSON Data Website:***

-   Motor Action - Admin User
    
-   Start Location
    
-   End Location
    
-   Request Rover
    
-   Login Request
    
-   Sign Up Request
    
-   Buy Item Request
    

JSON Data Computer Vision Worker:

-   Object xywh data
    

Processing : Processed by server

Rover Side Server

Data Processing

-   Ultrasonic for each sensor
    

-   add up to 20x /20
    
-   Output: average for 20 cycles
    

-   Image Stream
    

-   Object detection Processed by Computer Vision Worker
    
-   Output: xywh data of Object like Person
    

-   Wifi Data
    

-   Fill in an Array With Room Number to Mac-Address
    
-   Output: Room Number Linked to Mac Address
    

-   Accelerometers data
    

-   Take Integral of Acceleration / time = Velocity
    
-   d = vt
    
-   Output: Distance , Velocity
    

Path Finding

Object avoidance

Safety System

Path Training

Website Side Server

Login

SignUp

Save

  

Output Data: from Server:



***Rover Output:***



-   Motor Control: Left Side Wheels
    

-   Speed PWM
    

-   Motor Control: Right Side Wheels
    

-   Speed PWM
    

-   LED : RGB
    
-   Speaker :
    
-   Box Lock/Unlock Servo
    

User Output:

-   Sensors Live Data
    
-   Cam Live Data
    
-   Robot Location
    
-   Stats

## **User System ☕**
HTML Website

***Pages***

-   Home
    

Sub Sections

Live

Current Users

-   About
    

Description

-   Order Coffee
    

Items

Summon

-   Login
    

User Page

-   Cart
    
-   Agenda
    
-   Summon
    

-   Map
    
-   Live Cam
    
-   Live Sensor
    
-   Time
    
-   Location
    

-   Past Orders
    
-   Settings
    

Admin Page

-   Motor Control
    
-   Live Cam VIew
    
-   Live Sensor Data
    
-   Path Finder
    
-   Map
    

-   Anncoments
    

Posts

-   Live Chat
    

Chat Chat

Games

-   SignUp
    

  
  
  
  

  
  
  
  

Task Left TO DO

  

Hardwear

-Big Rover Cad Model

-Big Rover Wire Semantic

-Build Big Rover

Softwear

Rover

-   Setup SD Card
    
-   Setup Lib
    
-   Set Program Rover Code
    

Server Rover Side

-   Camera Vision API
    

-   Change Protocol
    

-   Ultra Sensor API
    

-   Data Processing
    

-   Wifi API
    

-   Speed Up
    
-   Mac Address Lookup
    

-   Accelmotre API
    
-   Motor API
    
-   Receive API
    
-   Process API
    
-   Map Class
    
-   Path Saver
    
-   AI Class
    
-   Box API
    
-   Speak API
![enter image description here](https://lh3.googleusercontent.com/qPkrmQ0PCZd3qZ_eY_OWT2mamZJUnTBu6KU3j3WblWCyoTzDShQ9-tyxzHI8mSZeGP__MevNkQ9axQ)
## **End Goal**

Features of Robot System

-Call for pick up of textbooks

Lunch the web app.

Login as your Name

Press Request Item Delivery

App Checks if Robot is Available

App pings you nearest location via wifi Access Points.

App Makes Connection to Robot

Robot Checks it nearest location via wifi Access Point.

App Makes Best Route

Robot Makes it way safely to user View Vision and ultraSonic

App Sends Robot Arrives at Door

User Inserts Items in Basket

User Press Confirm

Robot Makes it way to Delivery Location

End User Press Confirm

Robot Returns back to home “Room 201”

-Call for pick up from classroom to classroom

Lunch the web app.

Login as your Name

Press Request a Ride

App Checks if Robot is Available

App pings you nearest location via wifi Access Points.

App Makes Connection to Robot

Robot Checks it nearest location via wifi Access Point.

App Makes Best Route

Robot Makes it way safely to user Via Vision and ultraSonic

App Sends Robot Arrives at Door

User Says were he wants to go

Robot Makes it way to Delivery Location

User Press Confirm

Robot Returns back to home “Room 201”

  
  
  
  
  

-Call for Pick up of tim Horton coffee Cash system

Lunch the web app.

Login as your Name

User PIcks what Coffee they need

Robot Pick your Money

Might Hook up Live Mic
