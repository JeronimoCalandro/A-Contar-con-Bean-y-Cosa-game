class Level5Scene extends Phaser.Scene {
    constructor() {
        super("Level5Scene")
    }

    create(){
        this.add.image(gWidth/2, gHeight/2, "level5-scene-bg")
        this.cosa=this.add.image(gWidth*0.25-1000, gHeight*0.80, "level5-scene-cosa")
        this.texto=this.add.image(gWidth/2, gHeight*0.10-1000, "level5-scene-texto")
        this.libreta=this.add.image(gWidth*0.10, gHeight*0.20-1000, "level5-scene-libreta")
        this.uno=this.add.image(gWidth*0.402, gHeight*0.678, "level5-scene-1").setVisible(false)
        this.dos=this.add.image(gWidth*0.498, gHeight*0.678, "level5-scene-2").setVisible(false)
        this.tres=this.add.image(gWidth*0.556, gHeight*0.419, "level5-scene-3").setVisible(false)
        this.cuatro=this.add.image(gWidth*0.622, gHeight*0.676, "level5-scene-4").setVisible(false)
        this.cinco=this.add.image(gWidth*0.70, gHeight*0.669, "level5-scene-5").setVisible(false)
        this.b1=this.add.image(gWidth*0.422, gHeight *0.57, "level5-scene-negro").setInteractive().setAlpha(0.0000001)
        this.b2=this.add.image(gWidth*0.508, gHeight *0.55, "level5-scene-negro").setInteractive().setAlpha(0.0000001)
        this.b3=this.add.image(gWidth*0.556, gHeight *0.31, "level5-scene-negro").setInteractive().setAlpha(0.0000001)
        this.b4=this.add.image(gWidth*0.612, gHeight *0.55, "level5-scene-negro").setInteractive().setAlpha(0.0000001)
        this.b5=this.add.image(gWidth*0.69, gHeight *0.55, "level5-scene-negro").setInteractive().setAlpha(0.0000001)
        this.c1=this.add.image(gWidth*0.422, gHeight *0.57, "level5-scene-c1").setVisible(false)
        this.c2=this.add.image(gWidth*0.508, gHeight *0.56, "level5-scene-c2").setVisible(false)
        this.c3=this.add.image(gWidth*0.556, gHeight *0.315, "level5-scene-c3").setVisible(false)
        this.c4=this.add.image(gWidth*0.612, gHeight *0.555, "level5-scene-c4").setVisible(false)
        this.c5=this.add.image(gWidth*0.68, gHeight *0.55, "level5-scene-c5").setVisible(false)
        this.aux1=0
        this.aux2=0
        this.aux3=0
        this.aux4=0
        this.aux5=0
        this.block1=0
        this.block2=0
        this.block3=0
        this.block4=0
        this.block5=0
        this.aux=0
        this.num1=this.sound.add("1", {loop:false})
        this.num2=this.sound.add("2", {loop:false})
        this.num3=this.sound.add("3", {loop:false})
        this.num4=this.sound.add("4", {loop:false})
        gLastScene="Level5Scene"
        this.buttons=this.sound.add("buttons", {loop:false})
        this.toco=this.sound.add("toco", {loop:false})
        this.number=this.sound.add("5", {loop:false})
        this.ingame=this.sound.add("ingame5", {loop:false})
        this.popup=this.sound.add("popup", {loop:false})
        this.toco.volume=-0.3
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

        this.b1.on("pointerdown", ()=> {
            this.uno.setVisible(true)
            this.c1.setVisible(true)
            if(this.aux1==0){
                this.aux++
                this.aux1=1
            }
            this.ingame.pause()
        })
        this.b2.on("pointerdown", ()=> {
            this.dos.setVisible(true)
            this.c2.setVisible(true)
            if(this.aux2==0){
                this.aux++
                this.aux2=1
            }
            this.ingame.pause()
        })
        this.b3.on("pointerdown", ()=> {
            this.tres.setVisible(true)
            this.c3.setVisible(true)
            if(this.aux3==0){
                this.aux++
                this.aux3=1
            }
            this.ingame.pause()
        })
        this.b4.on("pointerdown", ()=> {
            this.cuatro.setVisible(true)
            this.c4.setVisible(true)
            if(this.aux4==0){
                this.aux++
                this.aux4=1
            }
            this.ingame.pause()
        })
        this.b5.on("pointerdown", ()=> {
            this.cinco.setVisible(true)
            this.c5.setVisible(true)
            if(this.aux5==0){
                this.aux++
                this.aux5=1
            }
            this.ingame.pause()
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
            targets: this.bean,
            x: "+= 1000",
            ease: "Back",
            delay: 400,
            duration: 600
        })
        this.tweens.add({
            targets: this.cosa,
            x: "+= 1000",
            ease: "Back",
            delay: 500,
            duration: 600
        })

    }

    update(){

        this.b1.on("pointerdown", ()=> {
            this.uno.setVisible(true)
            if(this.aux1==0){
                this.aux++
                this.aux1=1
            }
            if(gSound==1){
                this.toco.play()
            }
            this.ingame.pause()
        })
        this.b2.on("pointerdown", ()=> {
            this.dos.setVisible(true)
            if(this.aux2==0){
                this.aux++
                this.aux2=1
            }
            if(gSound==1){
                this.toco.play()
            }
            this.ingame.pause()
        })
        this.b3.on("pointerdown", ()=> {
            this.tres.setVisible(true)
            if(this.aux3==0){
                this.aux++
                this.aux3=1
            }
            if(gSound==1){
                this.toco.play()
            }
            this.ingame.pause()
        })
        this.b4.on("pointerdown", ()=> {
            this.cuatro.setVisible(true)
            if(this.aux4==0){
                this.aux++
                this.aux4=1
            }
            if(gSound==1){
                this.toco.play()
            }
        })
        this.b5.on("pointerdown", ()=> {
            this.cinco.setVisible(true)
            if(this.aux5==0){
                this.aux++
                this.aux5=1
            }
            if(gSound==1){
                this.toco.play()
            }
            this.ingame.pause()
        })

        console.log(this.aux)

        if(gSound==1){
            if(this.block1==0){
                if(this.aux==1){
                    this.num1.play()
                    this.block1=1
                }
            }
            else if(this.block2==0){
                if(this.aux==2){
                    this.num2.play()
                    this.block2=1
                }
            }
            else if(this.block3==0){
                if(this.aux==3){
                    this.num3.play()
                    this.block3=1
                }
            }
            else if(this.block4==0){
                if(this.aux==4){
                    this.num4.play()
                    this.block4=1
                }
            }
            else if(this.block5==0){
                if(this.aux==5){
                    this.number.play()
                    this.block5=1
                }
            }
        }

        if(this.aux1==1 && this.aux2==1 && this.aux3==1 && this.aux4==1 && this.aux5==1){
            this.tweens.add({
                targets: this.libreta,
                y: "+= 1000",
                ease: "Back",
                duration: 600
            })
            this.timer1 = this.time.addEvent({
                delay: 1000,
                callback: () => {
                    this.Popup()
                }
            })
            this.timer1 = this.time.addEvent({
                delay: 3500,
                callback: () => {
                    this.Number()
                }
            })
            this.timer1 = this.time.addEvent({
                delay: 4500,
                loop: false,
                callback: () => {
                    this.Finish();
                }
            })
            this.aux1=0
        }

        if(gMusic==1){
            game.sound.mute=false
        }
        else{
            game.sound.mute=true
        }
    }

    Finish(){
        this.scene.pause()
        this.scene.launch("VictoryScene")
    }
    Popup(){
        if(gSound==1){
            this.popup.play()
        }
    }
    Number(){
        if(gSound==1){
            this.number.play()
        }
    }
}