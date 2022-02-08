class Level8Scene extends Phaser.Scene {
    constructor() {
        super("Level8Scene")
    }

    create(){
        this.add.image(gWidth/2, gHeight/2, "level8-scene-bg")
        this.texto=this.add.image(gWidth/2, gHeight*0.10-1000, "level8-scene-texto")
        this.libreta=this.add.image(gWidth*0.10, gHeight*0.20-1000, "level8-scene-libreta")
        this.cosa=this.add.image(gWidth*0.25-1000, gHeight*0.67, "level8-scene-cosa")
        this.buttons=this.sound.add("buttons", {loop:false})
        this.toco=this.sound.add("toco", {loop:false})
        this.number=this.sound.add("8", {loop:false})
        this.ingame=this.sound.add("ingame8", {loop:false})
        this.popup=this.sound.add("popup", {loop:false})
        this.toco.volume=-0.3
        this.aux=0
        gLastScene="Level8Scene"
        if(gSound==1){
            this.ingame.play()
        }

        this.btnMusic = new Button(this, gWidth*0.90, gHeight * 0.07-1000, "buttons-music", {
            onClick: ()=> {
                gMusic=gMusic*-1
                if(gSound==1){
                    this.buttons.play()
                }
            }
        })   
        this.btnPause = new Button(this, gWidth*0.95, gHeight * 0.07-1000, "buttons-pause", {
            onClick: ()=> {
                if(gSound==1){
                    this.buttons.play()
                }
                this.scene.pause()
                this.scene.launch("PauseScene")
            }
        })

        this.btn1 = new Button(this, gWidth*0.60, gHeight * 0.75+1000, "level8-scene-9", {
            onClick: ()=> {
                if(this.aux==0){
                    this.ingame.pause()
                    if(gSound==1){
                        this.toco.play()
                        this.popup.play()
                    }
                    this.timer1 = this.time.addEvent({
                        delay: 2500,
                        callback: () => {
                            this.Number()
                        }
                    })
                    this.tweens.add({
                        targets: this.libreta,
                        y: "+= 1000",
                        ease: "Back",
                        duration: 600
                    })
                    this.timer1 = this.time.addEvent({
                        delay: 3500,
                        loop: false,
                        callback: () => {
                            this.Back()
                        }
                    })
                    this.aux=1
                }
                
            }
        })
        this.btn2 = new Button(this, gWidth*0.75, gHeight * 0.75+1000, "level8-scene-2", {
            onClick: ()=> {
                this.ingame.pause()
                if(this.aux==0){
                    this.scene.pause()
                    this.scene.launch("DefeatScene")
                }
            }
        })
        this.btn7 = new Button(this, gWidth*0.90, gHeight * 0.75+1000, "level8-scene-3", {
            onClick: ()=> {
                this.ingame.pause()
                if(this.aux==0){
                    this.scene.pause()
                    this.scene.launch("DefeatScene")
                }
            }
        })

        
        this.tweens.add({
            targets: this.texto,
            y: "+= 1000",
            ease: "Back",
            delay: 500,
            duration: 600
        })
        this.tweens.add({
            targets: this.btnMusic,
            y: "+= 1000",
            ease: "Back",
            delay: 700,
            duration: 600
        })
        this.tweens.add({
            targets: this.btnPause,
            y: "+= 1000",
            ease: "Back",
            delay: 900,
            duration: 600
        })
        this.tweens.add({
            targets: this.cosa,
            x: "+= 1000",
            ease: "Power3",
            delay: 400,
            duration: 1500
        })

        this.tweens.add({
            targets: this.btn1,
            y: "-= 1000",
            ease: "Back",
            delay: 600,
            duration: 600
        })
        this.tweens.add({
            targets: this.btn2,
            y: "-= 1000",
            ease: "Back",
            delay: 800,
            duration: 600
        })
        this.tweens.add({
            targets: this.btn7,
            y: "-= 1000",
            ease: "Back",
            delay: 1000,
            duration: 600
        })
    }

    update(){
        if(gMusic==1){
            game.sound.mute=false
        }
        else{
            game.sound.mute=true
        }
    }

    Back(){
        this.scene.pause()
        this.scene.launch("VictoryScene")
    }
    
    Number(){
        if(gSound==1){
            this.number.play()
        }
    }
}
