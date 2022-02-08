class Level7Scene extends Phaser.Scene {
    constructor() {
        super("Level7Scene")
    }

    create(){
        let thisScene=this
        this.add.image(gWidth/2, gHeight/2, "level7-scene-bg")
        this.cosa=this.add.image(gWidth*0.85+1000, gHeight*0.70, "level7-scene-cosa")
        this.texto=this.add.image(gWidth/2, gHeight*0.10-1000, "level7-scene-texto")
        this.libreta=this.add.image(gWidth*0.10, gHeight*0.20-1000, "level7-scene-libreta")
        this.siete=this.physics.add.image(gWidth*0.35, gHeight*0.54, "level7-scene-7")
        this.obj1=this.physics.add.image(gWidth*0.66, gHeight*0.37, "level7-scene-obj1").setInteractive()
        this.obj2=this.physics.add.image(gWidth*0.72, gHeight*0.31, "level7-scene-obj2").setInteractive()
        this.obj3=this.physics.add.image(gWidth*0.72, gHeight*0.40, "level7-scene-obj3").setInteractive()
        this.obj4=this.physics.add.image(gWidth*0.74, gHeight*0.50, "level7-scene-obj4").setInteractive()
        this.obj5=this.physics.add.image(gWidth*0.65, gHeight*0.56, "level7-scene-obj5").setInteractive()
        this.obj6=this.physics.add.image(gWidth*0.73, gHeight*0.60, "level7-scene-obj6").setInteractive()
        this.obj7=this.physics.add.image(gWidth*0.69, gHeight*0.64, "level7-scene-obj7").setInteractive()
        this.isClicking=false
        this.aux=0
        this.aux1=0
        this.aux2=0
        this.aux3=0
        this.aux4=0
        this.aux5=0
        this.aux6=0
        this.aux7=0
        gLastScene="Level7Scene"
        this.buttons=this.sound.add("buttons", {loop:false})
        this.toco=this.sound.add("toco", {loop:false})
        this.number=this.sound.add("7", {loop:false})
        this.ingame=this.sound.add("ingame7", {loop:false})
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
            targets: this.cosa,
            x: "-= 1000",
            ease: "Back",
            delay: 400,
            duration: 600
        })

        this.input.setDraggable([ this.obj1, this.obj2, this.obj4, this.obj3, this.obj5, this.obj6, this.obj7 ]);

        this.input.on('dragstart', function (pointer, gameObject) {

        })

        this.input.on('drag', function (pointer, gameObject, dragX, dragY) {

            gameObject.x = dragX
            gameObject.y = dragY
 
        })

        this.input.on('dragend', function (pointer, gameObject) {
      
        })

        this.input.on("pointerup", function(pointer){
            thisScene.isClicking=false
        })
        this.input.on("pointerdown", function(pointer){
            thisScene.isClicking=true
        })

        this.physics.add.overlap(this.siete, [this.obj1, this.obj2, this.obj3, this.obj4, this.obj5, this.obj6, this.obj7], function(siete, obj){
            
            if(thisScene.isClicking==false){
                if(obj==thisScene.obj1){
                    if(thisScene.aux1==0){
                        thisScene.tweens.add({
                            targets: obj,
                            duration: 120,
                            repeat: 0,
                            ease: "Circ",
                            yoyo: 1,
                            scale: 1.30
                        }) 
                        thisScene.aux1=1
                        if(gSound==1){
                            thisScene.toco.play()
                        }
                    }
                }  
                if(obj==thisScene.obj2){
                    if(thisScene.aux2==0){
                        thisScene.tweens.add({
                            targets: obj,
                            duration: 120,
                            repeat: 0,
                            ease: "Circ",
                            yoyo: 1,
                            scale: 1.30
                        }) 
                        thisScene.aux2=1
                        if(gSound==1){
                            thisScene.toco.play()
                        }
                    }
                } 
                if(obj==thisScene.obj3){
                    if(thisScene.aux3==0){
                        thisScene.tweens.add({
                            targets: obj,
                            duration: 120,
                            repeat: 0,
                            ease: "Circ",
                            yoyo: 1,
                            scale: 1.30
                        }) 
                        thisScene.aux3=1
                        if(gSound==1){
                            thisScene.toco.play()
                        }
                    }
                } 
                if(obj==thisScene.obj4){
                    if(thisScene.aux4==0){
                        thisScene.tweens.add({
                            targets: obj,
                            duration: 120,
                            repeat: 0,
                            ease: "Circ",
                            yoyo: 1,
                            scale: 1.30
                        }) 
                        thisScene.aux4=1
                        if(gSound==1){
                            thisScene.toco.play()
                        }
                    }
                } 
                if(obj==thisScene.obj5){
                    if(thisScene.aux5==0){
                        thisScene.tweens.add({
                            targets: obj,
                            duration: 120,
                            repeat: 0,
                            ease: "Circ",
                            yoyo: 1,
                            scale: 1.30
                        }) 
                        thisScene.aux5=1
                        if(gSound==1){
                            thisScene.toco.play()
                        }
                    }
                } 
                if(obj==thisScene.obj6){
                    if(thisScene.aux6==0){
                        thisScene.tweens.add({
                            targets: obj,
                            duration: 120,
                            repeat: 0,
                            ease: "Circ",
                            yoyo: 1,
                            scale: 1.30
                        }) 
                        thisScene.aux6=1
                        if(gSound==1){
                            thisScene.toco.play()
                        }
                    }
                } 
                if(obj==thisScene.obj7){
                    if(thisScene.aux7==0){
                        thisScene.tweens.add({
                            targets: obj,
                            duration: 120,
                            repeat: 0,
                            ease: "Circ",
                            yoyo: 1,
                            scale: 1.30
                        }) 
                        thisScene.aux7=1
                        if(gSound==1){
                            thisScene.toco.play()
                        }
                    }
                } 
            }           
        })
    }

    update(){
        if(this.aux1==1 && this.aux2==1 && this.aux3==1 && this.aux4==1 && this.aux5==1 && this.aux6==1 && this.aux7==1){
            if(this.aux==0){
                this.tweens.add({
                    targets: this.libreta,
                    y: "+= 1000",
                    ease: "Back",
                    delay: 200,
                    duration: 600
                })
                if(gSound==1){
                    this.popup.play()
                }
                this.timer1 = this.time.addEvent({
                    delay: 2500,
                    callback: () => {
                        this.Number()
                    }
                })
                this.aux=1;
            }
            
            this.timer1 = this.time.addEvent({
                delay: 3500,
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
    Number(){
        if(gSound==1){
            this.number.play()
        }
    }
}