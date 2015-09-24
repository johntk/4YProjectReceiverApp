var TNSeconds = (function () {
    function TNSeconds() {
        this.game = new Phaser.Game(1025, 873, Phaser.AUTO, 'content', { preload: this.preload, create: this.create });
    }
    TNSeconds.prototype.preload = function () {
        this.game.load.image('logo', 'run.png');
    };
    TNSeconds.prototype.create = function () {
        var logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
        logo.anchor.setTo(0.5, 0.5);
        //logo.scale.setTo(0.2, 0.2);
    };
    return TNSeconds;
})();
window.onload = function () {
    var game = new TNSeconds();
};
//# sourceMappingURL=app.js.map