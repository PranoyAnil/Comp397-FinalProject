module objects {
    export class ScoreBoard {
        // PUBLIC PROPERTIES
        public score: number = 0;
        public lives: number = 5;

        private scoreLabel: createjs.Text;
        private livesLabel: createjs.Text;
        private levellabel: createjs.Text;

        // CONSTRUCTOR +++++++++++++++++++
        constructor() {
            this.livesLabel = new createjs.Text("Lives:", "40px Consolas", "#FFFF00");
            this.scoreLabel = new createjs.Text("Score:", "40px Consolas", "#FFFF00");
            this.levellabel = new createjs.Text("Level 1", "40px Consolas", "#FFFF00");
            this.scoreLabel.x = 400;
            this.levellabel.x = 200;
            stage.addChild(this.livesLabel);
            stage.addChild(this.scoreLabel);
            stage.addChild(this.levellabel);
        }

        // PUBLIC METHODS +++++++++++++++++
        public update() {
            this.livesLabel.text = "Lives:" + this.lives;
            this.scoreLabel.text = "Score:" + this.score;
            if (scoreboard.score >= 300 && scoreboard.score < 700)
            {
                this.levellabel.text = "Level 2" ;
            }
            if (scoreboard.score >= 700) {
                this.levellabel.text = "Level 3" ;
            }
        }
    }
} 