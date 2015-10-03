/// <reference path="phaser.d.ts"/>
/// <reference path="Boot.ts"/>
/// <reference path="Preloader.ts"/>
/// <reference path="MainMenu.ts"/>
/// <reference path="Board.ts"/>
module TNSeconds {

    export class Game extends Phaser.Game {

        constructor() {
            // init game
            super(window.innerWidth * window.devicePixelRatio - 20, window.innerHeight * window.devicePixelRatio - 20, Phaser.CANVAS, 'content', null);

            this.state.add('Boot', Boot, false);
            this.state.add('Preloader', Preloader, false);
            this.state.add('MainMenu', MainMenu, false);
            this.state.add('Board', Board, false);
            this.state.start('Boot');

        }
    }
}



