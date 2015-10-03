var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="phaser.d.ts"/>
var TNSeconds;
(function (TNSeconds) {
    var MainMenu = (function (_super) {
        __extends(MainMenu, _super);
        function MainMenu() {
            _super.apply(this, arguments);
        }
        MainMenu.prototype.create = function () {
            var image1 = this.game.cache.getImage("title");
            this.background = this.add.sprite(this.game.width / 2 - image1.width / 2, this.game.height / 2 - image1.height / 2, 'title');
            this.background.alpha = 0;
            var image2 = this.game.cache.getImage("logo");
            this.logo = this.add.sprite(this.world.centerX, -300, 'logo');
            this.logo.anchor.setTo(0.5, 0.5);
            this.add.tween(this.background).to({ alpha: 1 }, 2000, Phaser.Easing.Bounce.InOut, true);
            this.add.tween(this.logo).to({ y: this.world.centerX - 200 }, 2000, Phaser.Easing.Elastic.Out, true, 2000);
            this.input.onDown.addOnce(this.fadeOut, this);
        };
        MainMenu.prototype.fadeOut = function () {
            this.add.tween(this.background).to({ alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
            var tween = this.add.tween(this.logo).to({ y: 800 }, 2000, Phaser.Easing.Linear.None, true);
            tween.onComplete.add(this.startGame, this);
        };
        MainMenu.prototype.startGame = function () {
            this.game.state.start('Board', true, false);
        };
        return MainMenu;
    })(Phaser.State);
    TNSeconds.MainMenu = MainMenu;
})(TNSeconds || (TNSeconds = {}));
//# sourceMappingURL=MainMenu.js.map