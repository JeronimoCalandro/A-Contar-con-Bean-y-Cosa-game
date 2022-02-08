class BootScene extends Phaser.Scene {
    constructor() {
        super("BootScene")
    }
    preload() {
        this.load.image("preload-scene-bg", "assets/preload-scene/bg.png")
        this.load.image("preload-scene-title", "assets/splash-scene/title.png")
        this.load.image("ui-fillbar-top", "assets/preload-scene/fillbar-top.png")
        this.load.image("ui-fillbar-bottom", "assets/preload-scene/fillbar-bottom.png")
        this.load.audio("splash", gameConfig.assetsPath + "sounds/splash.mp3")
    }
    create() {
        this.scene.start("PreloadScene")
    }
}


class PreloadScene extends Phaser.Scene {
    constructor() {
        super('PreloadScene')
    }

    preload() {
        let bg = this.add.image(gWidth/2, gHeight, "preload-scene-bg")
        let title = this.add.image(gWidth/2, gHeight *0.25, "preload-scene-title").setScale(0.80,0.80)
        this.splash=this.sound.add("splash", {loop:true})
        this.splash.play()
        this.splash.volume=0.5
        this.tweens.add({
            targets: title,
            duration: 120,
            repeat: -1,
            repeatDelay: 2000,
            ease: "Circ",
            yoyo: 1,
            scale: 1
        })
         
        bg.setOrigin(0.5, 1)
        ScaleImageToWidth(bg, gWidth)

        // --- load bar ---
        let bar = new FillBar(this, gWidth/2, gHeight*0.75, gWidth*2, 600, 0)

        this.load.on("progress", (p) => {
            bar.update(p, 1)
        })
        this.load.on("complete", ()=> {
            this.time.delayedCall(200, ()=> {
                this.scene.start("SplashScene")
            })
        })


        // === SPRITE SHEETS ===

        this.load.spritesheet("cosaSS", gameConfig.assetsPath + "level6-scene/cosaSS.png", {
            frameWidth: 700,
            frameHeight: 800
        })
        this.load.spritesheet("beanSS", gameConfig.assetsPath + "level3-scene/beanSS.png", {
            frameWidth: 700,
            frameHeight: 900
        })


        // === SOUNDS ===

        this.load.audio("buttons", gameConfig.assetsPath + "sounds/buttons.mp3")
        this.load.audio("win", gameConfig.assetsPath + "sounds/win.mp3")
        this.load.audio("toco", gameConfig.assetsPath + "sounds/toco.mp3")
        //this.load.audio("splash", gameConfig.assetsPath + "sounds/splash.mp3")
        this.load.audio("aContar", gameConfig.assetsPath + "sounds/aContar.mp3")
        this.load.audio("1", gameConfig.assetsPath + "sounds/1.mp3")
        this.load.audio("2", gameConfig.assetsPath + "sounds/2.mp3")
        this.load.audio("3", gameConfig.assetsPath + "sounds/3.mp3")
        this.load.audio("4", gameConfig.assetsPath + "sounds/4.mp3")
        this.load.audio("5", gameConfig.assetsPath + "sounds/5.mp3")
        this.load.audio("6", gameConfig.assetsPath + "sounds/6.mp3")
        this.load.audio("7", gameConfig.assetsPath + "sounds/7.mp3")
        this.load.audio("8", gameConfig.assetsPath + "sounds/8.mp3")
        this.load.audio("9", gameConfig.assetsPath + "sounds/9.mp3")
        this.load.audio("10", gameConfig.assetsPath + "sounds/10.mp3")
        this.load.audio("lose", gameConfig.assetsPath + "sounds/lose.mp3")
        this.load.audio("ingame1", gameConfig.assetsPath + "sounds/ingame1.mp3")
        this.load.audio("ingame2", gameConfig.assetsPath + "sounds/ingame2.mp3")
        this.load.audio("ingame3", gameConfig.assetsPath + "sounds/ingame3.mp3")
        this.load.audio("ingame3-1", gameConfig.assetsPath + "sounds/ingame3-1.mp3")
        this.load.audio("ingame4", gameConfig.assetsPath + "sounds/ingame4.mp3")
        this.load.audio("ingame5", gameConfig.assetsPath + "sounds/ingame5.mp3")
        this.load.audio("ingame6", gameConfig.assetsPath + "sounds/ingame6.mp3")
        this.load.audio("ingame6-1", gameConfig.assetsPath + "sounds/ingame6-1.mp3")
        this.load.audio("ingame7", gameConfig.assetsPath + "sounds/ingame7.mp3")
        this.load.audio("ingame8", gameConfig.assetsPath + "sounds/ingame8.mp3")
        this.load.audio("ingame9", gameConfig.assetsPath + "sounds/ingame9.mp3")
        this.load.audio("ingame10", gameConfig.assetsPath + "sounds/ingame10.mp3")
        this.load.audio("eresUnArtista", gameConfig.assetsPath + "sounds/eresUnArtista.mp3")
        this.load.audio("esoEs", gameConfig.assetsPath + "sounds/esoEs.mp3")
        this.load.audio("hazContadoBien", gameConfig.assetsPath + "sounds/hazContadoBien.mp3")
        this.load.audio("losNumerosTeAman", gameConfig.assetsPath + "sounds/losNumerosTeAman.mp3")
        this.load.audio("popup", gameConfig.assetsPath + "sounds/popup.mp3")
        

        // === UI ===
        this.loadElements([
            
        ], "ui", "image")

         // === BUTTONS ===
        this.loadElements([
            "play",
            "pause",
            "sound",
            "music",
            "home",
            "help",
            "close",
            "back",
            "sound-pause",
            "music-pause",
            "play-pause",
            "home-defeat",
            "left",
            "rigth",
            "restart",
            "sound-splash",
            "music-splash"
        ], "buttons", "image")


        // === SPLASH SCENE ===
        this.loadElements([
            "bgsplash",
            "title",
            "bean",
            "cosa",
        ], "splash-scene", "image")
            
        // === PAUSE SCENE ===
        this.loadElements([
            "pause",
            "bg-pause",
            "fail"
        ], "pause-scene", "image")

        // === HELP SCENE ===
        this.loadElements([
            "help",
            "help1",
            "help2",
            "help3",
            
        ], "help-scene", "image")

        // === VICTORY SCENE ===
        this.loadElements([
            "victory",
            "victory2",
            "victory3",
            "victory4",
            "victory5",
            "bean",
            "bg",
        ], "victory-scene", "image")

        // === LEVEL 1 SCENE ===
        this.loadElements([
            "bg",
            "cosa",
            "1",
            "2",
            "7",
            "libreta",
            "texto",
        ], "level1-scene", "image")

        // === LEVEL 2 SCENE ===
        this.loadElements([
            "bg",
            "bean",
            "1",
            "2",
            "7",
            "libreta",
            "texto",
        ], "level2-scene", "image")

        // === LEVEL 3 SCENE ===
        this.loadElements([
            "bg",
            "bean",
            "libreta",
            "texto",
            "bg2",
            "texto2",
            "bean2",
            "brush",
            "b1",
            "b2",
            "b3",
            "atril",
            "3",
            "arriba",
            "medio",
            "abajo",
            "hilo",
            "lapiz",
            "caldera",
            "gota",
            "atril",
        ], "level3-scene", "image")

        // === LEVEL 4 SCENE ===
        this.loadElements([
            "bg",
            "bean",
            "1",
            "2",
            "3",
            "4",
            "libreta",
            "texto",
            "cuatro"
        ], "level4-scene", "image")

        // === LEVEL 5 SCENE ===
        this.loadElements([
            "bg",
            "bean",
            "cosa",
            "1",
            "2",
            "3",
            "4",
            "5",
            "c1",
            "c2",
            "c3",
            "c4",
            "c5",
            "libreta",
            "texto",
            "negro",
        ], "level5-scene", "image")

        // === LEVEL 6 SCENE ===
        this.loadElements([
            "bg",
            "cosa",
            "libreta",
            "texto",
            "texto2",
            "bg2",
            "cosa2",
            "seis",
            "b1",
            "b2",
            "b3",
            "b4",
            "b5",
            "b6",
            "purple",
            "blue",
            "yellow",
            "red",
            "orange",
            "green",
            "A",
            "B",
            "C",
            "D",
            "E",
            "F",
            "obj",
            "gota1",
            "gota2",
            "gota3",
            "gota4",
            "gota5",
            "gota6",
            "gota7",
        ], "level6-scene", "image")

        // === LEVEL 7 SCENE ===
        this.loadElements([
            "bg",
            "cosa",
            "libreta",
            "texto",
            "7",
            "obj1",
            "obj2",
            "obj3",
            "obj4",
            "obj5",
            "obj6",
            "obj7",
            
        ], "level7-scene", "image")

        // === LEVEL 8 SCENE ===
        this.loadElements([
            "bg",
            "cosa",
            "libreta",
            "texto",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9"
        ], "level8-scene", "image")

        // === LEVEL 9 SCENE ===
        this.loadElements([
            "bg",
            "bean",
            "libreta",
            "texto",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            
        ], "level9-scene", "image")

        // === LEVEL 10 SCENE ===
        this.loadElements([
            "bg",
            "cosa",
            "libreta",
            "texto",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "l1",
            "l2",
            "l3",
            "l4",
            "l5",
            "l6",
            "l7",
            "l8",
            "l9",
            "l10",
        ], "level10-scene", "image")
        

        // === LEVELS SCENE ===
         this.loadElements([
            "bg",
            "123",
            "456",
            "78910"
        ], "levels-scene", "image")
    }

    loadElements(array, folder, type) {
        for (let elem of array) {
            switch(type) {
                case "image": {
                    this.load.image(folder + "-" + elem, gameConfig.assetsPath + folder + "/" + elem + ".png")
                    break
                }
            }
        }
    }
}


