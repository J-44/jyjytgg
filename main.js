canvas = document.getElementById('myCanvas');
ctx = canvas.getcontext("2d");
car1_width=120;
car1_height=70;
car1_X=10;
car1_Y=10;
carone_background="1-17264_this-free-icons-png-design-of-racing-stripes.png"
car2_width=120;
car2_height=70;
car2_X=10;
car2_Y=100;
cartwo_background="11-116850_car-computer-icons-auto-racing-download-clipart-car.png"
background_image="racing.jpg";
function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadbackground;
    background_imgTag.src =  canvas_background;

    car_1_imgTag = new Image();
    car_1_imgTag.onload = carbackgroundone;
    car_1_imgTag.src =  carone_background;

    car_2_imgTag = new Image();
    car2__imgTag.onload = carbackgroundtwo;
    car_2_imgTag.src =  cartwo_background;
}
function uploadbackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}
function carbackgroundone(){
    ctx.drawImage(car_1_imgTag,car1_X,car1_y,car1_width,car1_height);
}
function carbackgroundtwo(){
    ctx.drawImage(car_2_imgTag,car2_X,car2_y,car2_width,car2_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e) {
    keyPressed= e.keyCode;
    console.log("Key Pressed");
    if (keyPressed == '38'){
        caroneup();
        console.log("Up key pressed");
    }
    if (keyPressed == '39'){
        caroneright();
        console.log("Right key pressed");
    }
    if (keyPressed == '40'){
        caronedown();
        console.log("Down key pressed");
    }    
    if (keyPressed == '37'){
        caroneleft();
        console.log("Left key pressed");
    }   
    if (keyPressed == '87'){
        cartwoup();
        console.log("W key pressed");
    }
    if (keyPressed == '83'){
        cartwodown();
        console.log("S key pressed");
    }
    if (keyPressed == '65'){
        cartwoleft();
        console.log("A key pressed");
    }    
    if (keyPressed == '68'){
        cartworight();
        console.log("D key pressed");
    }    
}
function  caroneup(){
    if(car1_Y >= 0)
        caron1_Y= car1_Y - 10;
        console.log("X position is"+car1_X+"and position Y"+car1_Y)
        uploadbackground();
        carbackgroundone();
        carbackgroundtwo();
    }
function cartwoup(){
    if(cartw2_Y >= 0)
        car2_Y= car2_Y - 10;
        console.log("X position is"+car2_X+"and position Y"+car2_Y)
        uploadbackground();
        carbackgroundone();
        carbackgroundtwo();
}
function caronedown(){
    if(car1_Y <= 500)
        car1_Y= car1_Y + 10;
        console.log("X position is"+car1_X+"and position Y"+car1_Y)
        uploadbackground();
        carbackgroundone();
        carbackgroundtwo();    
}
function cartwodown(){
    if(car2_Y <= 500)
        car2_Y= car2_Y + 10;
        console.log("X position is"+car2_X+"and position Y"+car2_Y)
        uploadbackground();
        carbackgroundone();
        carbackgroundtwo();
}
function caroneright(){
    if(car1_X <= 700)
        car1_X= car1_X + 10;
        console.log("X position is"+car1_X+"and position Y"+car1_Y)
        uploadbackground();
        carbackgroundone();
        carbackgroundtwo(); 
}
function cartworight(){
    if(car2_X <= 700)
        car2_X= car2_X + 10;
        console.log("X position is"+car2_X+"and position Y"+car2_Y)
        uploadbackground();
        carbackgroundone();
        carbackgroundtwo(); 
}
function caroneleft(){
    if(car1_X >= 0)
        car1_X= car1_X - 10;
        console.log("X position is"+car1_X+"and position Y"+car1_Y)
        uploadbackground();
        carbackgroundone();
        carbackgroundtwo();
}
function cartwoleft(){
    if(car2_X >= 0)
    car2_X= car2_X - 10;
    console.log("X position is"+car2_X+"and position Y"+car2_Y)
    uploadbackground();
    carbackgroundone();
    carbackgroundtwo();
}
if (car1_X==700){
    console.log("Car 1 has win");
    document.getElementById("game_status").innerHTML= "Car 1 has win";
}
if (car2_X==700){
    console.log("Car 2 has win");
    document.getElementById("game_status").innerHTML= "Car 2 has win";
}

























canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
rover_width = 100;
rover_height = 100;
background_image = "mars.jpg";
rover_image = "rover.png";
rover_x = 10;
rover_y = 10;

function add() {
    background_imgTag = new Image();} //defining a variable with a new image background_imgTag.onload = uploadBackground; // setting a function, onloading this variable background_imgTag.src = background_image; // load image rover_imgTag = new Image(); //defining a variable with a new image rover_imgTag.onload = uploadrover; // setting a function, onloading this variable rover_imgTag.src = rover_image; // load image }
    function uploadBackground() {
        ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
    }

    function uploadrover() {
        ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
    }
    window.addEventListener("keydown", my_keydown);

    function my_keydown(e) {
        keyPressed = e.keyCode;
        console.log(keyPressed);
        if (keyPressed == '38') {
            up();
            console.log("up");
        }
        if (keyPressed == '40') {
            down();
            console.log("down");
        }
        if (keyPressed == '37') {
            left();
            console.log("left");
        }
        if (keyPressed == '39') {
            right();
            console.log("right");
        }
    }

    function up() {
        if (rover_y >= 0) {
            rover_y = rover_y - 10;
            console.log("When up arrow is pressed, x = " + rover_x + " | y = " + rover_y);
            uploadBackground();
            uploadrover();
            ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_width,rover_height);
        }
    }

    function down() {
        if (rover_y <= 500) {
            rover_y = rover_y + 10;
            console.log("When down arrow is pressed, x = " + rover_x + " | y = " + rover_y);
            uploadBackground();
            uploadrover();
            ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_width,rover_height);
        }
    }

    function left() {
        if (rover_x >= 0) {
            rover_x = rover_x - 10;
            console.log("When left arrow is pressed, x = " + rover_x + " | y = " + rover_y);
            uploadBackground();
            uploadrover();
            ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_width,rover_height);
        }
    }

    function right() {
        if (rover_x <= 700) {
            rover_x = rover_x + 10;
            console.log("When right arrow is pressed, x = " + rover_x + " | y = " + rover_y);
            uploadBackground();
            uploadrover();
            ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_width,rover_height);
        }
    }

