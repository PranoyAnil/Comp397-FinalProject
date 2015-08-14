module managers {
    export class Collision {
        //CONSTRUCTOR +++++++++++++++++++++++++++
        constructor() {
        }

        //PUBLIC METHODS ++++++++++++++++++++++++
        // check the distance between plane and any other game object
        public check(gameObject: objects.GameObject) {
        var p1: createjs.Point = new createjs.Point();
        var p2: createjs.Point = new createjs.Point();

        p1.x = plane.x;
        p1.y = plane.y;

        p2.x = gameObject.x;
        p2.y = gameObject.y;


        if (utility.distance(p1, p2) < ((plane.height * 0.4) + (gameObject.height * 0.4))) {
            if (gameObject.isColliding == false) {
                createjs.Sound.play(gameObject.sound);
                if (gameObject.name == "cloud") {
                  
                    scoreboard.lives--;
                    return 1;    
                }
                if (gameObject.name == "island") {
                    //gameObject.visible = false;
                    island.reset();
                    scoreboard.score += 100;   
                }
            }
            gameObject.isColliding = true;
                
                //clouds[cloud].reset();
            
            if (scoreboard.lives < 0) {

                gameoverScreen(); // game overs when lives equal to 0

            }
        }
        else {
            gameObject.isColliding = false;
            //if (temp == 1)
            //{
            //    stage.addChild(gameObject);
            //    temp = temp + 1;
            //}
        }
    }


    }
} 