class VictoryScene extends Phaser.Scene {
    constructor() {
        super("VictoryScene")
    }

    create(){
        this.bg=this.add.image(gWidth/2, gHeight/2, "victory-scene-bg")
        this.victory2=this.add.image(gWidth/2, gHeight/2-1000, "victory-scene-victory2")
        this.victory3=this.add.image(gWidth/2, gHeight/2-1000, "victory-scene-victory3")
        this.victory4=this.add.image(gWidth/2, gHeight/2-1000, "victory-scene-victory4")
        this.victory5=this.add.image(gWidth/2, gHeight/2-1000, "victory-scene-victory5")
        this.bean=this.add.image(gWidth*0.80, gHeight*0.60+1000, "victory-scene-bean")
        this.win=this.sound.add("win", {loop:false})
        this.buttons=this.sound.add("buttons", {loop:false})
        this.dos=this.sound.add("hazContadoBien", {loop:false})
        this.tres=this.sound.add("losNumerosTeAman", {loop:false})
        this.cuatro=this.sound.add("eresUnArtista", {loop:false})
        this.cinco=this.sound.add("esoEs", {loop:false})
        this.aux=Phaser.Math.Between(2,5)
        if(gSound==1){
            this.win.volume=0.1
            this.win.play()
            if(this.aux==2){
                this.dos.play()
            }
            else if(this.aux==3){
                this.tres.play()
            }
            else if(this.aux==4){
                this.cuatro.play()
            }
            else if(this.aux==5){
                this.cinco.play()
                //this.dos.play()
            }
        }

        this.tweens.add({
            targets: this.bean,
            y: "-= 1000",
            ease: "Powe3",
            duration: 300
        })

        this.btnPlay = new Button(this, gWidth*0.60, gHeight * 0.60-1000, "buttons-play-pause", {
            onClick: ()=> {
                this.tweens.add({
                    targets: [this.btnPlay, this.victory2, this.victory3, this.victory4, this.victory5, this.btnHome, this.btnRestart],
                    y: "-= 1000",
                    ease: "Back",
                    duration: 600
                })
                this.tweens.add({
                    targets: this.bean,
                    y: "+= 1000",
                    ease: "Back",
                    duration: 300
                })
                this.timer1 = this.time.addEvent({
                    delay: 300,
                    loop: false,
                    callback: () => {
                        this.Back();
                    }
                })
                if(gSound==1){
                    this.buttons.play()
                }
                this.win.stop()
            }
        })

        this.btnHome = new Button(this, gWidth*0.50, gHeight * 0.60-1000, "buttons-home", {
            onClick: ()=> {
                this.scene.stop()
                this.scene.start("SplashScene")
                if(gSound==1){
                    this.buttons.play()
                }
            }
        })

        this.btnRestart = new Button(this, gWidth*0.40, gHeight * 0.60-1000, "buttons-restart", {
            onClick: ()=> {
                this.scene.stop()
                this.scene.start(gLastScene)
                if(gSound==1){
                    this.buttons.play()
                }
            }
        })
        
        this.tweens.add({
            targets: [this.btnPlay, this.btnHome, this.btnRestart],
            y: "+= 1000",
            ease: "Back",
            duration: 600
        })
    
        if(this.aux==2){
            this.tweens.add({
                targets: this.victory2,
                y: "+= 1000",
                ease: "Back",
                duration: 600
            })
        }
        else if(this.aux==3){
            this.tweens.add({
                targets: this.victory3,
                y: "+= 1000",
                ease: "Back",
                duration: 600
            })
        }
        else if(this.aux==4){
            this.tweens.add({
                targets: this.victory4,
                y: "+= 1000",
                ease: "Back",
                duration: 600
            })
        }
        else {
            this.tweens.add({
                targets: this.victory5,
                y: "+= 1000",
                ease: "Back",
                duration: 600
            })
        }
    }

    Back(){
        this.scene.stop()
        if(gLastScene=="Level1Scene"){
            this.scene.start("Level2Scene")
        }
        else if(gLastScene=="Level2Scene"){
            this.scene.start("Level3Scene")
        }
        else if(gLastScene=="Level3Scene"){
            this.scene.start("LevelsScene")
        }
        else if(gLastScene=="Level4Scene"){
            this.scene.start("Level5Scene")
        }
        else if(gLastScene=="Level5Scene"){
            this.scene.start("Level6Scene")
        }
        else if(gLastScene=="Level6Scene"){
            this.scene.start("LevelsScene")
        }
        else if(gLastScene=="Level7Scene"){
            this.scene.start("Level8Scene")
        }
        else if(gLastScene=="Level8Scene"){
            this.scene.start("Level9Scene")
        }
        else if(gLastScene=="Level9Scene"){
            this.scene.start("Level10Scene")
        }
        else if(gLastScene=="Level10Scene"){
            this.scene.start("LevelsScene")
        }
    }
}