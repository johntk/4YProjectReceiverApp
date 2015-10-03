/// <reference path="phaser.d.ts"/>
module TNSeconds {

    export class Preloader extends Phaser.State {

        preloadBar: Phaser.Sprite;

        preload() {
            var image = <Phaser.Image>this.game.cache.getImage("preloadBar");
            this.preloadBar = this.game.add.sprite(this.game.width / 2 - image.width / 2, this.game.height / 2 - image.height / 2, 'preloadBar');
            this.load.setPreloadSprite(this.preloadBar);

            this.load.image('title', './assets/title.jpg');
            this.load.image('logo', './assets/logo.png');
            this.load.audio('music', './assets/title.mp3', true);
            this.load.spritesheet('simon', './assets/simon.png', 58, 96, 5);
            this.load.image('board', './assets/bg.png');
        }

        create() {
            var tween = this.add.tween(this.preloadBar).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
            tween.onComplete.add(this.startMainMenu, this);
        }

        startMainMenu() {
            this.game.state.start('MainMenu', true, false);
            //this.game.state.start('Board', true, false);
        }

    }

}