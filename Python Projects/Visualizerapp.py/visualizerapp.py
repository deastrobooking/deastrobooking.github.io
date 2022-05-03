## Turtle Lab 5 Randy Chabot & Benjamin Lewis
## Barebones drawing app Working towards instagram picture 
## app. 


import turtle
import random

tz = turtle.Turtle()
tz.speed(0)
# Renaming turtle object for ease of programming

#Function 1 
# Improvements add user input to arguments controlling size and color that import to func parameters. 
def drawshape1():
   for i in range(30):
     tz.circle(5+i*5)
     tz.left(random)
     tz.forward(10)
     tz.right(random)
   main()

#Function 2
def drawshape2():
    for i in range(100):
     tz.forward(10+i*5)
     tz.left(120)
    main()
    # Reseting Calling Main

#Function 3
def drawshape3():
    
    colors = ['red', 'green', 'brown', 'lightgreen']
    for i in range(600):
        if i % 5 == 0:
            for i in range(3):
                
                tz.pencolor(colors[i]) 
                tz.left(3)
        tz.forward(200)
        tz.left(360/5)
        
    main()       
    # Reseting Calling Main  
#Function 4 
def drawshape4():
    size = 1
    while size < 500:
        tz.forward(size)
        tz.right(1000)
        size = size + 1
    main()

#Main is using decision structure and user inputs to make choices. 
def main():
    print("Select from the following letters to choose an adventure:")
    print("          a = drawshape1")
    print("          b = drawshape2")
    print("          c = drawshape3")
    print("          d = drawshape4")
    print("          q = quit")

    sel = ""

    while sel != "q":
        sel = input("Enter your selection:  ")
        if sel == "a":
            drawshape1()
        elif sel == "b":
            drawshape2()
        elif sel == "c":
            drawshape3()

        elif sel == "d":
            drawshape4()
        elif sel == "q":
            turtle.bye()
        else:
            main()
main()





