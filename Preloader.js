var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="phaser.d.ts"/>
var TNSeconds;
(function (TNSeconds) {
    var Preloader = (function (_super) {
        __extends(Preloader, _super);
        function Preloader() {
            _super.apply(this, arguments);
        }
        Preloader.prototype.preload = function () {
            var image = this.game.cache.getImage("preloadBar");
            this.preloadBar = this.game.add.sprite(this.game.width / 2 - image.width / 2, this.game.height / 2 - image.height / 2, 'preloadBar');
            this.load.setPreloadSprite(this.preloadBar);
            this.load.image('title', './assets/title.jpg');
            this.load.image('logo', './assets/logo.png');
            this.load.audio('music', './assets/title.mp3', true);
            this.load.spritesheet('simon', './assets/simon.png', 58, 96, 5);
            this.load.image('board', './assets/bg.png');
        };
        Preloader.prototype.create = function () {
            var tween = this.add.tween(this.preloadBar).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
            tween.onComplete.add(this.startMainMenu, this);
        };
        Preloader.prototype.startMainMenu = function () {
            this.game.state.start('MainMenu', true, false);
            //this.game.state.start('Board', true, false);
        };
        return Preloader;
    })(Phaser.State);
    TNSeconds.Preloader = Preloader;
})(TNSeconds || (TNSeconds = {}));
//# sourceMappingURL=Preloader.js.map