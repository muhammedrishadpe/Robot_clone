const robot = document.querySelector('.robot')

//the robot move when you click it. 

//declare a variable
let number = 0

function moveRobot() {
    number += 50
    console.log(number)
    robot.style.left = number + 'px'
}
robot.addEventListener('click', moveRobot)
