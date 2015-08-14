module objects {
    // Plane Class ++++++++++++++++++++++++++++++++++++++
    export class Plane extends objects.GameObject {
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
       
        constructor(imageString: string) {
            super(imageString);

            this.sound = "engine";
            
            this.x = 110;

            createjs.Sound.play(this.sound, {"loop": -1});
        }

        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        public update(): void {
            this.y = stage.mouseY; // position plane under mouse
            var random = Math.floor(Math.random() * 2 + 1);
            if (random == 1)
                plane.image = car3.image;
            else
                plane.image = car2.image;
        }
    }
} 