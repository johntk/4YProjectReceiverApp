var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="phaser.d.ts"/>
/// <reference path="Team1.ts"/>
/// <reference path="Team2.ts"/>
var TNSeconds;
(function (TNSeconds) {
    var Board = (function (_super) {
        __extends(Board, _super);
        function Board() {
            _super.apply(this, arguments);
        }
        Board.prototype.create = function () {
            var image = this.game.cache.getImage("board");
            this.physics.startSystem(Phaser.Physics.ARCADE);
            this.background = this.add.sprite(this.game.width / 2 - image.width / 2, this.game.height / 2 - image.height / 2, 'board');
            this.music = this.add.audio('music', 1, false);
            this.music.play();
            this.team1 = new TNSeconds.Team1(this.game, 130, 332);
        };
        return Board;
    })(Phaser.State);
    TNSeconds.Board = Board;
})(TNSeconds || (TNSeconds = {}));
//# sourceMappingURL=Board.js.map