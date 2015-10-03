/// <reference path="phaser.d.ts"/>
/// <reference path="Team1.ts"/>
/// <reference path="Team2.ts"/>
module TNSeconds {

    export class Board extends Phaser.State {

        background: Phaser.Sprite;
        music: Phaser.Sound;
        team1: TNSeconds.Team1;

        create() {

            var image = <Phaser.Image>this.game.cache.getImage("board");
            this.physics.startSystem(Phaser.Physics.ARCADE);
            this.background = this.add.sprite(this.game.width / 2 - image.width / 2, this.game.height / 2 - image.height / 2, 'board');
            this.music = this.add.audio('music', 1, false);
            this.music.play();
            this.team1 = new Team1(this.game, 130, 332);

        }

    }

} 