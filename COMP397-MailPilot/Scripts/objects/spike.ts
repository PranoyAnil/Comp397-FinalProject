module objects {
    // Island Class ++++++++++++++++++++++++++++++++++++++
    export class Spike extends objects.GameObject {
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        constructor(imageString: string) {
            super(imageString);

            this.name = "spike";
            this.sound = "yay";
            this.dx = 5;

            this.reset();
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++
        private checkBounds(): void {

            // check if island has left screen
            if (this.x < 0 - this.width) {
                this.reset();
            }
        }


        public reset(): void {
            this.y = Math.floor(Math.random() * 660); // start island at random location
            this.x = 480; // start island off stage
        }


        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        public update(): void {

            this.x -= this.dx; // moves road right to left the stage
            this.checkBounds();
        }
    }
}  