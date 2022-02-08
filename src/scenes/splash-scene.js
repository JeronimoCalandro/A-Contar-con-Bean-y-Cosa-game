class SplashScene extends Phaser.Scene {
    constructor() {
        super("SplashScene")
    }

    create()
    {
        this.add.image(gWidth/2, gHeight/2, "splash-scene-bgsplash")
        this.bean=this.add.image(gWidth*0.20, gHeight*0.73+1000, "splash-scene-bean")
        this.cosa=this.add.image(gWidth*0.80, gHeight*0.73+1000, "splash-scene-cosa")
        this.splash=this.sound.add("splash", {loop:true})
        this.aContar=this.sound.add("aContar", {loop:false})
        this.sound.stopAll()
        this.splash.volume=1
        this.buttons=this.sound.add("buttons", {loop:false})
        if(gSound==1){
            if(gMusic==1){
                this.splash.play()    
                this.splash.volume=0.5
            }
            this.aContar.play()      
        }

        gLastScene="SplashScene"
        
        this.tweens.add({
            targets: this.title=this.add.image(gWidth/2, gHeight * 0.25-1000, "splash-scene-title"),
            duration: 120,
            repeat: -1,
            repeatDelay: 500,
            ease: "Circ",
            yoyo: 1,
            scale: 1.10
        })

        this.btnPlay = new Button(this, gWidth/2, gHeight * 0.75+1000 , "buttons-play", {
            onClick: ()=> {
                if(gSound==1){
                    this.buttons.play()
                }
                this.splash.volume=0.0999999
                //this.sound.muteAll()
                this.scene.start("LevelsScene")
                
            }
        })

        this.btnMusic = new Button(this, gWidth*0.90, gHeight * 0.07-1000, "buttons-music-splash", {
            onClick: ()=> {
                gMusic=gMusic*-1
                if(gSound==1){
                    this.buttons.play()
                }
            }
        })
        
        this.btnSound = new Button(this, gWidth*0.95, gHeight * 0.07-1000, "buttons-sound-splash", {
            onClick: ()=> {
                gSound=gSound*-1
                if(gSound==1){
                    this.buttons.play()
                }
            }
        })

        this.tweens.add({
            targets: this.title,
            y: "+= 1000",
            ease: "Back",
            delay: 300,
            duration: 600
        })

        this.tweens.add({
            targets: [this.btnPlay],
            y: "-= 1000",
            ease: "Back",
            delay: 300,
            duration: 600
        })
        this.tweens.add({
            targets: [this.bean],
            y: "-= 1000",
            ease: "Back",
            delay: 500,
            duration: 600
        })
        this.tweens.add({
            targets: [this.cosa],
            y: "-= 1000",
            ease: "Back",
            delay: 700,
            duration: 600
        })

        this.tweens.add({
            targets: [this.btnMusic],
            y: "+= 1000",
            ease: "Back",
            delay: 800,
            duration: 600
        })

        this.tweens.add({
            targets: [this.btnSound],
            y: "+= 1000",
            ease: "Back",
            delay: 900,
            duration: 600
        })



        // -- flash --
        this.tweens.add({
            targets: this.add.rectangle(0, 0, gWidth, gHeight, 0xffffff, 1).setOrigin(0, 0),
            alpha: 0,
            duration: 200,
            delay: 100
        })
    }

    update(){
        if(gMusic==1 && gSound==1){
            game.sound.mute=false
        }
        else{
            game.sound.mute=true
        }
    }
}