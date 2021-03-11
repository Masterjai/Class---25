var ball;
var position, database;
function setup(){
    database = firebase.database();
    var dataStuff = database.ref("ball/position");
    dataStuff.on("value",reading,errer);
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-2,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(2,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-2);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+2);
    }
    drawSprites();
}
function reading(data){
    position = data.val();
    ball.x = position.x;
    ball.y = position.y;
}
function errer(){
    console.log("error");
}
function writePosition(x,y){
    database.ref("ball/position").set({x:ball.x + x,
    y:ball.y + y })
}
