class TNSeconds {

    game: Phaser.Game;

    constructor() {
        this.game = new Phaser.Game(1025, 873, Phaser.AUTO, 'content', { preload: this.preload, create: this.create });
    }

    preload() {
        this.game.load.image('logo', 'run.png');
    }

    create() {
        var logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
        logo.anchor.setTo(0.5, 0.5);
        //logo.scale.setTo(0.2, 0.2);

    }
}

window.onload = () => {
    var game = new TNSeconds();
};