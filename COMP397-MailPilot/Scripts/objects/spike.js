var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Island Class ++++++++++++++++++++++++++++++++++++++
    var Spike = (function (_super) {
        __extends(Spike, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        function Spike(imageString) {
            _super.call(this, imageString);
            this.name = "spike";
            this.sound = "yay";
            this.dx = 5;
            this.reset();
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++++
        Spike.prototype.checkBounds = function () {
            // check if island has left screen
            if (this.x < 0 - this.width) {
                this.reset();
            }
        };
        Spike.prototype.reset = function () {
            this.y = Math.floor(Math.random() * 660); // start island at random location
            this.x = 480; // start island off stage
        };
        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        Spike.prototype.update = function () {
            this.x -= this.dx; // moves road right to left the stage
            this.checkBounds();
        };
        return Spike;
    })(objects.GameObject);
    objects.Spike = Spike;
})(objects || (objects = {}));
//# sourceMappingURL=spike.js.map