var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Cloud Class ++++++++++++++++++++++++++++++++++++++
    var Cloud = (function (_super) {
        __extends(Cloud, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        function Cloud(imageString) {
            _super.call(this, imageString);
            this.name = "cloud";
            this.sound = "thunder";
            this.dx = 6;
            this.reset();
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++++
        Cloud.prototype.checkBounds = function () {
            // check if opposition has left screen
            /* if (this.x > 800 + this.width) {
                 this.reset();
             }  */
            if (this.x < 0 - this.width) {
                this.reset();
            }
        };
        Cloud.prototype.reset = function () {
            this.y = Math.floor(Math.random() * 480); // start opposition at random location
            this.x = 640; // start opposition police car off stage
            /* this.dx = Math.floor(Math.random() * 3) + 5;
             this.dy = Math.floor(Math.random() * 5) - 2;
             */
        };
        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        Cloud.prototype.update = function () {
            //this.y += this.dy; // moves opposition across the stage
            this.x -= this.dx; // drifts police cars right and left
            this.checkBounds();
        };
        return Cloud;
    })(objects.GameObject);
    objects.Cloud = Cloud;
})(objects || (objects = {}));
//# sourceMappingURL=cloud.js.map