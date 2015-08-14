var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Plane Class ++++++++++++++++++++++++++++++++++++++
    var Plane = (function (_super) {
        __extends(Plane, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        function Plane(imageString) {
            _super.call(this, imageString);
            this.sound = "engine";
            this.x = 110;
            createjs.Sound.play(this.sound, { "loop": -1 });
        }
        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        Plane.prototype.update = function () {
            this.y = stage.mouseY; // position plane under mouse
            var random = Math.floor(Math.random() * 2 + 1);
            if (random == 1)
                plane.image = car3.image;
            else
                plane.image = car2.image;
        };
        return Plane;
    })(objects.GameObject);
    objects.Plane = Plane;
})(objects || (objects = {}));
//# sourceMappingURL=plane.js.map