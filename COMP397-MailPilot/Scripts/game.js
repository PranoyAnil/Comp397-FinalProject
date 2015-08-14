/// <reference path="typings/stats/stats.d.ts" />
/// <reference path="typings/easeljs/easeljs.d.ts" />
/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />
/// <reference path="utility/utility.ts" />
/// <reference path="objects/gameobject.ts" />
/// <reference path="objects/ocean.ts" />
/// <reference path="objects/plane.ts" />
/// <reference path="objects/island.ts" />
/// <reference path="objects/cloud.ts" />
/// <reference path="objects/spike.ts" />
/// <reference path="objects/scoreboard.ts" />
/// <reference path="managers/collision.ts" />
// Author : Sachet panchal
// Student ID 300819205 
// Game Framework Variables
var canvas = document.getElementById("canvas");
var stage;
var stats;
var assets;
var manifest = [
    { id: "ocean", src: "assets/images/Road3.gif" },
    { id: "plane", src: "assets/images/3715863.png" },
    { id: "car2", src: "assets/images/3715863.png" },
    { id: "car3", src: "assets/images/car2.png" },
    { id: "police2", src: "assets/images/policeTwo.png" },
    { id: "police3", src: "assets/images/policeThree.png" },
    { id: "home", src: "assets/images/homebutton.png" },
    { id: "island", src: "assets/images/3715865.png" },
    { id: "startbutton", src: "assets/images/button-play.png" },
    { id: "instructionbutton", src: "assets/images/instruct.png" },
    { id: "backbutton", src: "assets/images/backbutton.png" },
    { id: "cloud", src: "assets/images/police3715871.png" },
    { id: "spike", src: "assets/images/spikes2.png" },
    { id: "yay", src: "assets/audio/Mario-coin-sound.mp3" },
    { id: "thunder", src: "assets/audio/Car Screech And Crash-SoundBible.com-1414562045.mp3" },
    { id: "engine", src: "assets/audio/smw_blargg_no_echo.wav" },
    { id: "soundtrack", src: "assets/audio/Police Chase In City _ Sound Effect _ (mp3cut.net).mp3" }
];
// Game Variables
var ocean;
var plane;
var car2;
var car3;
var policeCar2;
var policeCar3;
var car3;
var island;
var clouds = [];
var spikes = [];
var spike;
var startbutton;
var instructions;
var home;
var instructions2;
var scoreboard;
var backbutton;
var instructionbutton;
// Game Managers
var collision;
var temp = 0;
// Preloader Function
function preload() {
    assets = new createjs.LoadQueue();
    assets.installPlugin(createjs.Sound);
    // event listener triggers when assets are completely loaded
    assets.on("complete", init, this);
    assets.loadManifest(manifest);
    //Setup statistics object
    setupStats();
}
// Callback function that initializes game objects
function init() {
    stage = new createjs.Stage(canvas); // reference to the stage
    stage.enableMouseOver(20);
    createjs.Ticker.setFPS(60); // framerate 60 fps for the game
    // event listener triggers 60 times every second
    BeginningScreen();
    createjs.Ticker.on("tick", gameLoop);
    // calling main game function
    main();
}
// function to setup stat counting
function setupStats() {
    stats = new Stats();
    stats.setMode(0); // set to fps
    // align bottom-right
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '650px';
    stats.domElement.style.top = '10px';
    document.body.appendChild(stats.domElement);
}
// Callback function that creates our Main Game Loop - refreshed 60 fps
function gameLoop() {
    stats.begin(); // Begin measuring
    ocean.update();
    if (temp == 1) {
        plane.update();
        island.update();
        if (scoreboard.lives < 0) {
            stage.removeAllChildren();
            gameoverScreen();
        }
        if (scoreboard.score > 0 && scoreboard.score < 300) {
            for (var cloud = 0; cloud < 1; cloud++) {
                var c1 = collision.check(clouds[cloud]);
                if (c1 == 1) {
                    clouds[cloud].reset();
                }
                /* var random = Math.floor(Math.random() * 2 + 1);
                 if (random == 1)
                     clouds[cloud].image = policeCar2.image;
                 else
                     clouds[cloud].image = policeCar3.image;
                 */
                clouds[cloud].update();
            }
        }
        if (scoreboard.score >= 300 && scoreboard.score < 700) {
            for (var cloud = 0; cloud < 2; cloud++) {
                if (cloud == 0) {
                    var a = clouds[cloud].y;
                }
                if (cloud == 1) {
                    var b = clouds[cloud].y;
                }
                var c = check(clouds[cloud], a, b);
                if (c == 1) {
                    clouds[cloud].reset();
                }
                clouds[cloud].update();
                var c1 = collision.check(clouds[cloud]);
                if (c1 == 1) {
                    clouds[cloud].reset();
                }
            }
        }
        if (scoreboard.score >= 800) {
            for (var cloud = 0; cloud < 2; cloud++) {
                if (cloud == 0) {
                    var a = clouds[cloud].y;
                }
                if (cloud == 1) {
                    var b = clouds[cloud].y;
                }
                var c = check(clouds[cloud], a, b);
                if (c == 1) {
                    clouds[cloud].reset();
                }
                clouds[cloud].update();
                collision.check(clouds[cloud]);
                var c1 = collision.check(clouds[cloud]);
                if (c1 == 1) {
                    clouds[cloud].reset();
                }
            }
            for (var spike = 0; spike < 2; spike++) {
                if (spike == 0) {
                    var a = spikes[spike].y;
                }
                if (spike == 1) {
                    var b = spikes[spike].y;
                }
                var c = check(spikes[spike], a, b);
                if (c == 1) {
                    spikes[spike].reset();
                }
                spikes[spike].update();
                var c1 = collision.check(spikes[spike]);
                if (c1 == 1) {
                    spikes[spike].reset();
                }
            }
        }
        //else {
        //    for (var cloud = 0; cloud < 2; cloud++) {
        //        clouds[cloud] = new objects.Cloud(assets.getResult("cloud"));
        //        stage.addChild(clouds[cloud]);
        //    }
        //}
        //    if (scoreboard.score >= 300) {
        //        for (var cloud = 0; cloud < 3; cloud++) {
        //            clouds[cloud] = new objects.Cloud(assets.getResult("cloud"));
        //            stage.addChild(clouds[cloud]);
        //            //alert("updated");
        //            clouds[cloud].update();
        //            //collision.check(clouds[cloud]);
        //        }
        //}
        if (scoreboard.score == 300) {
            level2();
            scoreboard.score = 400;
        }
        if (scoreboard.score == 600) {
            level3();
            scoreboard.score = 700;
        }
        //if (temp == 1) {
        collision.check(island);
        //}
        //if (temp == 1) {
        scoreboard.update();
    }
    stage.update();
    stats.end(); // end measuring
}
function check(gameObject, a, b) {
    var p1 = new createjs.Point();
    var p2 = new createjs.Point();
    p1.y = a;
    p2.y = b;
    if (utility.distance(p1, p2) < ((plane.height * 0.4) + (gameObject.height * 0.4))) {
        return 1;
    }
    return 0;
}
function checkscore() {
    if (scoreboard.score >= 300) {
        for (var cloud = 0; cloud < 2; cloud++) {
            clouds[cloud] = new objects.Cloud(assets.getResult("cloud"));
            stage.addChild(clouds[cloud]);
        }
    }
}
function BeginningScreen() {
    stage.removeChild(island);
    stage.removeChild(plane);
    ocean = new objects.Ocean(assets.getResult("ocean"));
    stage.addChild(ocean);
    startbutton = new createjs.Bitmap(assets.getResult("startbutton"));
    startbutton.x = 180;
    startbutton.y = 300;
    stage.addChild(startbutton);
    startbutton.on("click", startbuttonClicked);
    instructionbutton = new createjs.Bitmap(assets.getResult("instructionbutton"));
    instructionbutton.x = 180;
    instructionbutton.y = 80;
    stage.addChild(instructionbutton);
    instructionbutton.on("click", instructionScreen);
    instructions = new createjs.Text(" Police Chase ", "bold 20px Arial", "#ffffff");
    instructions.x = 32;
    instructions.y = 100;
    stage.addChild(instructions);
}
function instructionScreen() {
    stage.removeChild(island);
    stage.removeChild(plane);
    ocean = new objects.Ocean(assets.getResult("ocean"));
    stage.addChild(ocean);
    backbutton = new createjs.Bitmap(assets.getResult("backbutton"));
    backbutton.x = 180;
    backbutton.y = 300;
    stage.addChild(backbutton);
    backbutton.on("click", BeginningScreen);
    instructions = new createjs.Text("Move the car up or down to avoid police cars and \n other obstacles from catching you. ", "bold 20px Arial", "#ffffff");
    instructions2 = new createjs.Text("Collect Fuel pumps to score points. ", "bold 20px Arial", "#ffffff");
    instructions.x = 32;
    instructions.y = 100;
    stage.addChild(instructions);
    instructions2.x = 50;
    instructions2.y = 140;
    stage.addChild(instructions2);
}
function gameoverScreen() {
    temp = 0;
    ocean = new objects.Ocean(assets.getResult("ocean"));
    stage.addChild(ocean);
    instructions = new createjs.Text("Sorry Game Over!!", "bold 20px Arial", "#F0F8FF");
    instructions.x = 155;
    instructions.y = 60;
    stage.addChild(instructions);
    instructions2 = new createjs.Text("Your Final Score:" + scoreboard.score, "bold 20px Arial", "#F0F8FF");
    instructions2.x = 155;
    instructions2.y = 100;
    stage.addChild(instructions2);
    home = new createjs.Bitmap(assets.getResult("home"));
    home.x = 180;
    home.y = 200;
    stage.addChild(home);
    home.on("click", BeginningScreen);
}
function level2() {
    stage.removeAllChildren();
    ocean = new objects.Ocean(assets.getResult("ocean"));
    stage.addChild(ocean);
    //add island object to stage
    island = new objects.Island(assets.getResult("island"));
    stage.addChild(island);
    // add plane object to stage
    plane = new objects.Plane(assets.getResult("plane"));
    stage.addChild(plane);
    if (scoreboard.score == 700) {
        for (var spike = 0; spike < 2; spike++) {
            spikes[spike] = new objects.Cloud(assets.getResult("spike"));
            stage.addChild(spikes[spike]);
        }
    }
    //add 1 cloud objects to stage
    for (var cloud = 0; cloud < 2; cloud++) {
        clouds[cloud] = new objects.Cloud(assets.getResult("cloud"));
        stage.addChild(clouds[cloud]);
    }
    //add scoreboard
    scoreboard = new objects.ScoreBoard();
    //scoreboard.score = 400;
    //add collision manager
    collision = new managers.Collision();
}
function level3() {
    stage.removeAllChildren();
    ocean = new objects.Ocean(assets.getResult("ocean"));
    stage.addChild(ocean);
    //add island object to stage
    island = new objects.Island(assets.getResult("island"));
    stage.addChild(island);
    // add plane object to stage
    plane = new objects.Plane(assets.getResult("plane"));
    stage.addChild(plane);
    for (var spike = 0; spike < 2; spike++) {
        spikes[spike] = new objects.Cloud(assets.getResult("spike"));
        stage.addChild(spikes[spike]);
    }
    //add 2 cloud objects to stage
    for (var cloud = 0; cloud < 2; cloud++) {
        clouds[cloud] = new objects.Cloud(assets.getResult("cloud"));
        stage.addChild(clouds[cloud]);
    }
    //add scoreboard
    scoreboard = new objects.ScoreBoard();
    //scoreboard.score = 400;
    //add collision manager
    collision = new managers.Collision();
}
function startbuttonClicked() {
    temp = 1;
    stage.removeAllChildren();
    ocean = new objects.Ocean(assets.getResult("ocean"));
    stage.addChild(ocean);
    //add island object to stage
    island = new objects.Island(assets.getResult("island"));
    stage.addChild(island);
    // add plane object to stage
    plane = new objects.Plane(assets.getResult("plane"));
    stage.addChild(plane);
    //add 1 cloud objects to stage
    if (scoreboard.score < 300) {
        //alert("300");
        for (var cloud = 0; cloud < 1; cloud++) {
            clouds[cloud] = new objects.Cloud(assets.getResult("cloud"));
            stage.addChild(clouds[cloud]);
        }
    }
    else {
        //alert("500");
        for (var cloud = 0; cloud < 2; cloud++) {
            clouds[cloud] = new objects.Cloud(assets.getResult("cloud"));
            stage.addChild(clouds[cloud]);
        }
    }
    //add scoreboard
    scoreboard = new objects.ScoreBoard();
    //add collision manager
    collision = new managers.Collision();
}
// Our Main Game Function
function main() {
    //add ocean object to stage
    ocean = new objects.Ocean(assets.getResult("ocean"));
    stage.addChild(ocean);
    //add island object to stage
    island = new objects.Island(assets.getResult("island"));
    stage.addChild(island);
    // add plane object to stage
    plane = new objects.Plane(assets.getResult("plane"));
    //stage.addChild(plane);
    car2 = new objects.Plane(assets.getResult("car2"));
    car3 = new objects.Plane(assets.getResult("car3"));
    // add 3 cloud objects to stage
    for (var cloud = 0; cloud < 3; cloud++) {
        clouds[cloud] = new objects.Cloud(assets.getResult("cloud"));
        stage.addChild(clouds[cloud]);
        clouds[cloud].reset();
    }
    //this.sound = "soundtrack";
    //createjs.Sound.play(this.sound, { "loop": -1 });
    //add scoreboard
    scoreboard = new objects.ScoreBoard();
    //add collision manager
    collision = new managers.Collision();
    //remove all objects from screen.
    stage.removeAllChildren();
    //Starting the screen
    BeginningScreen();
}
//# sourceMappingURL=game.js.map