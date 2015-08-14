module objects {
    // Cloud Class ++++++++++++++++++++++++++++++++++++++
    export class Cloud extends objects.GameObject {

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        constructor(imageString: string) {
            super(imageString);

            this.name = "cloud";
            this.sound = "thunder";
            this.dx = 6;
            this.reset();
        }
        
        // PRIVATE METHODS ++++++++++++++++++++++++++++++
        private checkBounds(): void {

            // check if opposition has left screen
           /* if (this.x > 800 + this.width) {
                this.reset();
            }  */

            if (this.x < 0 - this.width) {
                this.reset();
            }
        }


        public reset(): void {
            this.y = Math.floor(Math.random() * 480); // start opposition at random location
            this.x = 640; // start opposition police car off stage
           /* this.dx = Math.floor(Math.random() * 3) + 5;
            this.dy = Math.floor(Math.random() * 5) - 2;
            */
        }


        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        public update(): void {

            //this.y += this.dy; // moves opposition across the stage
            this.x -= this.dx; // drifts police cars right and left
            this.checkBounds();

        }
    }
}  