/// <reference path="phaser.d.ts"/>
module TNSeconds {

    export class MainMenu extends Phaser.State {

        background: Phaser.Sprite;
        logo: Phaser.Sprite;

        create() {

            var image1 = <Phaser.Image>this.game.cache.getImage("title");
            this.background = this.add.sprite(this.game.width / 2 - image1.width / 2, this.game.height / 2 - image1.height / 2, 'title');
            this.background.alpha = 0;


            var image2 = <Phaser.Image>this.game.cache.getImage("logo");
            this.logo = this.add.sprite(this.world.centerX, -300, 'logo');
            this.logo.anchor.setTo(0.5, 0.5);

            this.add.tween(this.background).to({ alpha: 1 }, 2000, Phaser.Easing.Bounce.InOut, true);
            this.add.tween(this.logo).to({ y: this.world.centerX -200}, 2000, Phaser.Easing.Elastic.Out, true, 2000);

            this.input.onDown.addOnce(this.fadeOut, this);

        }

        fadeOut() {

            this.add.tween(this.background).to({ alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
            var tween = this.add.tween(this.logo).to({ y: 800 }, 2000, Phaser.Easing.Linear.None, true);

            tween.onComplete.add(this.startGame, this);

        }

        startGame() {

            this.game.state.start('Board', true, false);

        }

    }

}