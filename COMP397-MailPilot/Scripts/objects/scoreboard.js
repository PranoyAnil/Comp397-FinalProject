var objects;
(function (objects) {
    var ScoreBoard = (function () {
        // CONSTRUCTOR +++++++++++++++++++
        function ScoreBoard() {
            // PUBLIC PROPERTIES
            this.score = 0;
            this.lives = 5;
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
        ScoreBoard.prototype.update = function () {
            this.livesLabel.text = "Lives:" + this.lives;
            this.scoreLabel.text = "Score:" + this.score;
            if (scoreboard.score >= 300 && scoreboard.score < 700) {
                this.levellabel.text = "Level 2";
            }
            if (scoreboard.score >= 700) {
                this.levellabel.text = "Level 3";
            }
        };
        return ScoreBoard;
    })();
    objects.ScoreBoard = ScoreBoard;
})(objects || (objects = {}));
//# sourceMappingURL=scoreboard.js.map