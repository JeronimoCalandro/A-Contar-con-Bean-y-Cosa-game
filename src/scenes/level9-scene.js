class Level9Scene extends Phaser.Scene {
    constructor() {
        super("Level9Scene")
    }

    create(){
        this.add.image(gWidth/2, gHeight/2, "level9-scene-bg")
        this.bean=this.add.image(gWidth*0.80+1000, gHeight*0.67, "level9-scene-bean")
        this.texto=this.add.image(gWidth/2, gHeight*0.10-1000, "level9-scene-texto")
        this.libreta=this.add.image(gWidth*0.10, gHeight*0.20-1000, "level9-scene-libreta")
        this.s1=this.add.image(gWidth*0.203, gHeight*0.576, "level9-scene-1").setAlpha(0.5).setInteractive()
        this.s2=this.add.image(gWidth*0.32, gHeight*0.398, "level9-scene-2").setAlpha(0.5).setInteractive()
        this.s3=this.add.image(gWidth*0.40, gHeight*0.54, "level9-scene-3").setAlpha(0.5).setInteractive()
        this.s4=this.add.image(gWidth*0.42, gHeight*0.628, "level9-scene-4").setAlpha(0.5).setInteractive()
        this.s5=this.add.image(gWidth*0.63, gHeight*0.67, "level9-scene-5").setAlpha(0.5).setInteractive()
        this.s6=this.add.image(gWidth*0.65, gHeight*0.568, "level9-scene-6").setAlpha(0.5).setInteractive()
        this.s7=this.add.image(gWidth*0.68, gHeight*0.53, "level9-scene-7").setAlpha(0.5).setInteractive()
        this.s8=this.add.image(gWidth*0.90, gHeight*0.95, "level9-scene-8").setAlpha(0.5).setInteractive()
        this.s9=this.add.image(gWidth*0.96, gHeight*0.403, "level9-scene-9").setAlpha(0.5).setInteractive()
        this.aux=0
        this.aux1=0
        this.aux2=0
        this.aux3=0
        this.aux4=0
        this.aux5=0
        this.aux6=0
        this.aux7=0
        this.aux8=0
        this.aux9=0
        this.block1=0
        this.block2=0
        this.block3=0
        this.block4=0
        this.block5=0
        this.block6=0
        this.block7=0
        this.block8=0
        this.block9=0
        this.aux=0
        this.aux15=0
        this.num1=this.sound.add("1", {loop:false})
        this.num2=this.sound.add("2", {loop:false})
        this.num3=this.sound.add("3", {loop:false})
        this.num4=this.sound.add("4", {loop:false})
        this.num5=this.sound.add("5", {loop:false})
        this.num6=this.sound.add("6", {loop:false})
        this.num7=this.sound.add("7", {loop:false})
        this.num8=this.sound.add("8", {loop:false})
        gLastScene="Level9Scene"
        this.buttons=this.sound.add("buttons", {loop:false})
        this.toco=this.sound.add("toco", {loop:false})
        this.number=this.sound.add("9", {loop:false})
        this.ingame=this.sound.add("ingame9", {loop:false})
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
            x: "-= 1000",
            ease: "Back",
            delay: 400,
            duration: 600
        })
    }

    update(){

        this.s1.on("pointerdown", ()=> {
            this.tweens.add({
                targets: this.s1,
                duration: 170,
                repeat: 0,
                ease: "Circ",
                yoyo: 1,
                scale: 1.3
            }) 
            this.s1.setAlpha(1)
            if(this.aux1==0){
                this.aux++
                this.aux1=1
            }
            if(gSound==1){
                this.toco.play()
            }
            this.ingame.pause()
        })
        this.s2.on("pointerdown", ()=> {
            this.tweens.add({
                targets: this.s2,
                duration: 170,
                repeat: 0,
                ease: "Circ",
                yoyo: 1,
                scale: 1.3
            }) 
            this.s2.setAlpha(1)
            if(this.aux2==0){
                this.aux++
                this.aux2=1
            }
            if(gSound==1){
                this.toco.play()
            }
            this.ingame.pause()
        })
        this.s3.on("pointerdown", ()=> {
            this.tweens.add({
                targets: this.s3,
                duration: 170,
                repeat: 0,
                ease: "Circ",
                yoyo: 1,
                scale: 1.3
            }) 
            this.s3.setAlpha(1)
            if(this.aux3==0){
                this.aux++
                this.aux3=1
            }
            if(gSound==1){
                this.toco.play()
            }
            this.ingame.pause()
        })
        this.s4.on("pointerdown", ()=> {
            this.tweens.add({
                targets: this.s4,
                duration: 170,
                repeat: 0,
                ease: "Circ",
                yoyo: 1,
                scale: 1.3
            }) 
            this.s4.setAlpha(1)
            if(this.aux4==0){
                this.aux++
                this.aux4=1
            }
            if(gSound==1){
                this.toco.play()
            }
            this.ingame.pause()
        })
        this.s5.on("pointerdown", ()=> {
            this.tweens.add({
                targets: this.s5,
                duration: 170,
                repeat: 0,
                ease: "Circ",
                yoyo: 1,
                scale: 1.3
            }) 
            this.s5.setAlpha(1)
            if(this.aux5==0){
                this.aux++
                this.aux5=1
            }
            if(gSound==1){
                this.toco.play()
            }
            this.ingame.pause()
        })
        this.s6.on("pointerdown", ()=> {
            this.tweens.add({
                targets: this.s6,
                duration: 170,
                repeat: 0,
                ease: "Circ",
                yoyo: 1,
                scale: 1.3
            }) 
            this.s6.setAlpha(1)
            if(this.aux6==0){
                this.aux++
                this.aux6=1
            }
            if(gSound==1){
                this.toco.play()
            }
            this.ingame.pause()
        })
        this.s7.on("pointerdown", ()=> {
            this.tweens.add({
                targets: this.s7,
                duration: 170,
                repeat: 0,
                ease: "Circ",
                yoyo: 1,
                scale: 1.3
            }) 
            this.s7.setAlpha(1)
            if(this.aux7==0){
                this.aux++
                this.aux7=1
            }
            if(gSound==1){
                this.toco.play()
            }
            this.ingame.pause()
        })
        this.s8.on("pointerdown", ()=> {
            this.tweens.add({
                targets: this.s8,
                duration: 170,
                repeat: 0,
                ease: "Circ",
                yoyo: 1,
                scale: 1.3
            }) 
            this.s8.setAlpha(1)
            if(this.aux8==0){
                this.aux++
                this.aux8=1
            }
            if(gSound==1){
                this.toco.play()
            }
            this.ingame.pause()
        })
        this.s9.on("pointerdown", ()=> {
            this.tweens.add({
                targets: this.s9,
                duration: 170,
                repeat: 0,
                ease: "Circ",
                yoyo: 1,
                scale: 1.3
            }) 
            this.s9.setAlpha(1)
            if(this.aux9==0){
                this.aux++
                this.aux9=1
            }
            if(gSound==1){
                this.toco.play()
            }
            this.ingame.pause()
        })

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
                    this.num5.play()
                    this.block5=1
                }
            }
            else if(this.block6==0){
                if(this.aux==6){
                    this.num6.play()
                    this.block6=1
                }
            }
            else if(this.block7==0){
                if(this.aux==7){
                    this.num7.play()
                    this.block7=1
                }
            }
            else if(this.block8==0){
                if(this.aux==8){
                    this.num8.play()
                    this.block8=1
                }
            }
            else if(this.block9==0){
                if(this.aux==9){
                    this.number.play()
                    this.block9=1
                }
            }
        }

        console.log(this.aux1, this.aux2, this.aux3, this.aux4, this.aux5, this.aux6, this.aux7, this.aux8, this.aux9)

        if(this.aux1==1 && this.aux2==1 && this.aux3==1 && this.aux4==1 && this.aux5==1 && this.aux6==1 && this.aux7==1 && this.aux8==1 && this.aux9==1){
            if(this.aux15==0){
                this.tweens.add({
                    targets: this.libreta,
                    y: "+= 1000",
                    ease: "Back",
                    delay: 200,
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
                this.aux15=1
            }
            
            this.timer1 = this.time.addEvent({
                delay: 5500,
                loop: false,
                callback: () => {
                    this.Back();
                }
            })
        }

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