var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="phaser.d.ts"/>
/// <reference path="Boot.ts"/>
/// <reference path="Preloader.ts"/>
/// <reference path="MainMenu.ts"/>
/// <reference path="Board.ts"/>
var TNSeconds;
(function (TNSeconds) {
    var Game = (function (_super) {
        __extends(Game, _super);
        function Game() {
            // init game
            _super.call(this, window.innerWidth * window.devicePixelRatio - 20, window.innerHeight * window.devicePixelRatio - 20, Phaser.CANVAS, 'content', null);
            this.state.add('Boot', TNSeconds.Boot, false);
            this.state.add('Preloader', TNSeconds.Preloader, false);
            this.state.add('MainMenu', TNSeconds.MainMenu, false);
            this.state.add('Board', TNSeconds.Board, false);
            this.state.start('Boot');
        }
        return Game;
    })(Phaser.Game);
    TNSeconds.Game = Game;
})(TNSeconds || (TNSeconds = {}));
//# sourceMappingURL=Game.js.map