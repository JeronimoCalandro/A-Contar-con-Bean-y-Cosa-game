class Level3Scene extends Phaser.Scene {
    constructor() {
        super("Level3Scene")
    }

    create(){
        this.add.image(gWidth/2, gHeight/2, "level3-scene-bg")
        this.bg=this.add.image(gWidth/2-4000, gHeight/2, "level3-scene-bg2")
        this.b1=this.add.image(gWidth*0.55, gHeight*0.49, "level3-scene-b1").setAlpha(0.5).setInteractive()
        this.b2=this.add.image(gWidth*0.83, gHeight*0.53, "level3-scene-b2").setAlpha(0.5).setInteractive()
        this.b3=this.add.image(gWidth*0.56, gHeight*0.35, "level3-scene-b3").setAlpha(0.5).setInteractive()
        this.caldera=this.add.image(gWidth*0.48, gHeight*0.33, "level3-scene-caldera")
        this.lapiz=this.add.image(gWidth*0.59, gHeight*0.35, "level3-scene-lapiz")
        this.hilo=this.add.image(gWidth*0.87, gHeight*0.535, "level3-scene-hilo")
        this.bean=this.add.image(gWidth*0.30-1000, gHeight*0.60, "level3-scene-bean")

        this.atril=this.add.image(gWidth*0.35-2000, gHeight*0.60, "level3-scene-atril")
        this.bean2=this.add.image(gWidth*0.63-2000, gHeight*0.60, "level3-scene-bean2")

        this.beanSS = this.physics.add.sprite(gWidth*0.60-2000,gHeight*0.55, "level3-scene-bean2")
        this.anims.create({
            key: 'paint',
            frames: this.anims.generateFrameNumbers('beanSS', { start: 0, end: 15 }),
            frameRate: 10,
            repeat: -1
        })
        this.beanSS.play("paint")

        this.tres=this.physics.add.image(gWidth*0.37-2000, gHeight*0.60, "level3-scene-3")
        this.arriba=this.add.image(gWidth*0.369, gHeight*0.45, "level3-scene-arriba").setVisible(false)
        this.medio=this.add.image(gWidth*0.38, gHeight*0.57, "level3-scene-medio").setVisible(false)
        this.abajo=this.add.image(gWidth*0.37, gHeight*0.718, "level3-scene-abajo").setVisible(false)
        
        this.b4=this.physics.add.image(gWidth*0.70+1000, gHeight*0.90, "level3-scene-b2")
        this.b5=this.physics.add.image(gWidth*0.83+1000, gHeight*0.90, "level3-scene-b1")
        this.b6=this.physics.add.image(gWidth*0.93+1000, gHeight*0.90, "level3-scene-b3")

        this.gota2=this.physics.add.image(gWidth*0.70+1000, gHeight*0.90, "level6-scene-gota5").setInteractive().setAlpha(0.000001)
        this.gota1=this.physics.add.sprite(gWidth*0.83+1000, gHeight*0.90, "level6-scene-gota2").setInteractive().setAlpha(0.000001)
        this.gota3=this.physics.add.image(gWidth*0.93+1000, gHeight*0.90, "level6-scene-gota7").setInteractive().setAlpha(0.000001)

        this.texto=this.add.image(gWidth/2, gHeight*0.10-1000, "level3-scene-texto")
        this.texto2=this.add.image(gWidth/2, gHeight*0.10-1000, "level3-scene-texto2")
        this.libreta=this.add.image(gWidth*0.10, gHeight*0.20-1000, "level3-scene-libreta")
        this.aux=0
        this.aux1=1
        this.aux2=1
        this.aux3=1
        this.block1=0
        this.block2=0
        this.block3=0
        this.auxFinish=0
        gLastScene="Level3Scene"
        this.buttons=this.sound.add("buttons", {loop:false})
        this.toco=this.sound.add("toco", {loop:false})
        this.num1=this.sound.add("1", {loop:false})
        this.num2=this.sound.add("2", {loop:false})
        this.number=this.sound.add("3", {loop:false})
        this.ingame=this.sound.add("ingame3", {loop:false})
        this.ingame1=this.sound.add("ingame3-1", {loop:false})
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
            x: "+= 1000",
            ease: "Back",
            delay: 400,
            duration: 600
        })
    }

    update(){
        console.log(this.aux)

        if(this.aux1==1){
            
            this.b1.on("pointerdown", ()=> {
                this.tweens.add({
                    targets: this.b1,
                    duration: 170,
                    repeat: 0,
                    ease: "Circ",
                    yoyo: 1,
                    scale: 1.3
                }) 
                /*if(gSound==1){
                    this.toco.play()
                    if(this.block1==0){
                        if(this.aux==0){
                            this.num1.play()
                            this.aux++
                            this.block1=1
                        }
                        else if(this.aux==1){
                            this.num2.play()
                            this.aux++
                            this.block1=1
                        }
                    }
                    
                }*/
                this.b1.setAlpha(1)
                if(this.aux1==1){
                    this.aux++
                    this.aux1=0
                }
                this.ingame.pause()
            })
        }
        if(this.aux2==1){
            
            this.b2.on("pointerdown", ()=> {
                this.tweens.add({
                    targets: this.b2,
                    duration: 170,
                    repeat: 0,
                    ease: "Circ",
                    yoyo: 1,
                    scale: 1.3
                }) 
                /*if(gSound==1){
                    this.toco.play()
                    if(this.block2==0){
                        if(this.aux==0){
                            this.num1.play()
                            this.aux++
                            this.block2=1
                        }
                        else if(this.aux==1){
                            this.num2.play()
                            this.aux++
                            this.block2=1
                        }
                    }
                    
                }*/
                this.b2.setAlpha(1)
                if(this.aux2==1){
                    this.aux++
                    this.aux2=0
                }
                this.ingame.pause()
            })
        }
        if(this.aux3==1){
            
            this.b3.on("pointerdown", ()=> {
                this.tweens.add({
                    targets: this.b3,
                    duration: 170,
                    repeat: 0,
                    ease: "Circ",
                    yoyo: 1,
                    scale: 1.3
                }) 
                /*if(gSound==1){
                    this.toco.play()
                    if(this.block3==0){
                        if(this.aux==0){
                            this.num1.play()
                            this.aux++
                            this.block3=1
                        }
                        else if(this.aux==1){
                            this.num2.play()
                            this.aux++
                            this.block3=1
                        }
                    }
                    
                }*/
                this.b3.setAlpha(1)
                if(this.aux3==1){
                    this.aux++
                    this.aux3=0
                }
                this.ingame.pause()
            })
        }
 
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
                    this.number.play()
                    this.block3=1
                }
            }
        }
        
        
        if(this.aux1==0 && this.aux2==0 && this.aux3==0){
            this.tweens.add({
                targets: this.bean,
                x: "-= 3000",
                ease: "Back",
                delay: 400,
                duration: 600
            })
            this.tweens.add({
                targets: this.texto,
                y: "-= 1000",
                ease: "Back",
                delay: 200,
                duration: 500
            })
            this.tweens.add({
                targets: [this.b1, this.b2, this.b3],
                x: "+= 2000",
                ease: "Back",
                duration: 400
            })
            
            
            
            this.timer1 = this.time.addEvent({
                delay: 1000,
                callback: () => {
                    this.Ingame()
                }
            })

            this.timer1 = this.time.addEvent({
                delay: 500,
                loop: false,
                callback: () => {
                    this.Back();
                }
            })
            this.aux1=1
        }
        if(this.arriba.visible==true && this.medio.visible==true && this.abajo.visible==true && this.auxFinish==0){
            console.log("TERMINO")
            this.timer11 = this.time.addEvent({
                delay: 0,
                callback: () => {
                    this.Popup()
                }
            })
            this.tweens.add({
                targets: this.libreta,
                y: "+= 1000",
                ease: "Back",
                delay: 300,
                duration: 600
            })
            this.timer12 = this.time.addEvent({
                delay: 2500,
                callback: () => {
                    this.Number()
                }
            })
            this.timer13 = this.time.addEvent({
                delay: 3500,
                loop: false,
                callback: () => {
                    this.Finish();
                }
            })
            this.auxFinish=1
        }

        if(gMusic==1){
            game.sound.mute=false
        }
        else{
            game.sound.mute=true
        }
    }

    Back(){
        let thisScene=this

        this.tweens.add({
            targets: [this.bg, this.hilo, this.caldera, this.lapiz],
            x: "+= 4000",
            ease: "Powe3",
            delay: 100,
            duration: 600
        })
        this.tweens.add({
            targets: this.texto2,
            y: "+= 1000",
            ease: "Back",
            delay: 200,
            duration: 600
        })
        this.tweens.add({
            targets: [this.beanSS, this.tres, this.atril],
            x: "+= 2000",
            ease: "Back",
            delay: 300,
            duration: 600
        })
        this.tweens.add({
            targets: [this.b4, this.gota1], 
            x: "-= 1000",
            ease: "Back",
            delay: 400,
            duration: 600
        })
        this.tweens.add({
            targets: [this.b5, this.gota2],
            x: "-= 1000",
            ease: "Back",
            delay: 500,
            duration: 600
        })
        this.tweens.add({
            targets: [this.b6, this.gota3],
            x: "-= 1000",
            ease: "Back",
            delay: 600,
            duration: 600
        })
        
        this.input.setDraggable([ this.gota1, this.gota2, this.gota3 ]);

        this.input.on('dragstart', function (pointer, gameObject) {
            gameObject.setAlpha(1)
        })

        this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
            gameObject.x = dragX
            gameObject.y = dragY
        })

        this.input.on('dragend', function (pointer, gameObject) {
            if(gameObject==thisScene.gota2){
                gameObject.x=gWidth*0.70
                gameObject.y=gHeight*0.90
            }
            if(gameObject==thisScene.gota1){
                gameObject.x=gWidth*0.83
                gameObject.y=gHeight*0.90
            }
            if(gameObject==thisScene.gota3){
                gameObject.x=gWidth*0.93
                gameObject.y=gHeight*0.90
            }

            gameObject.setAlpha(0.000001)
        })

        this.physics.add.overlap(this.tres, [this.gota1, this.gota2, this.gota3], function(tres, obj){
            if(obj==thisScene.gota2){
                thisScene.medio.setVisible(true)
            }
            if(obj==thisScene.gota1){
                thisScene.abajo.setVisible(true)
            }
            if(obj==thisScene.gota3){
                thisScene.arriba.setVisible(true)
            }
        })

        
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
    Ingame(){
        if(gSound==1){
            this.ingame1.play()
        }
    }
}