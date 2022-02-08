class Level4Scene extends Phaser.Scene {
    constructor() {
        super("Level4Scene")
    }

    create(){
        let thisScene=this
        this.add.image(gWidth/2, gHeight/2, "level4-scene-bg")
        this.bean=this.add.image(gWidth*0.15-1000, gHeight*0.70, "level4-scene-bean")
        this.texto=this.add.image(gWidth/2, gHeight*0.10-1000, "level4-scene-texto")
        this.libreta=this.add.image(gWidth*0.10, gHeight*0.20-1000, "level4-scene-libreta")
        this.cuatrobg=this.physics.add.image(gWidth*0.63, gHeight*0.50, "level4-scene-cuatro")
        this.dos=this.physics.add.image(gWidth*0.33, gHeight*0.35, "level4-scene-1").setInteractive()
        this.tres=this.physics.add.image(gWidth*0.26, gHeight*0.50, "level4-scene-2").setInteractive()
        this.cuatro=this.physics.add.image(gWidth*0.35, gHeight*0.53, "level4-scene-3").setInteractive()
        this.uno=this.physics.add.image(gWidth*0.26, gHeight*0.33, "level4-scene-4").setInteractive()
        this.isClicking=false
        this.aux1=1
        this.aux2=1
        this.aux3=1
        this.aux4=1
        this.aux=0
        gLastScene="Level4Scene"
        this.buttons=this.sound.add("buttons", {loop:false})
        this.toco=this.sound.add("toco", {loop:false})
        this.number=this.sound.add("4", {loop:false})
        this.ingame=this.sound.add("ingame4", {loop:false})
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

        this.input.setDraggable([ this.uno, this.dos, this.tres, this.cuatro ]);

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

        this.physics.add.overlap(this.cuatrobg, this.uno, function(cuatro, obj){
            if(thisScene.isClicking==false){
                obj.setPosition(gWidth*0.664, gHeight*0.63) 
                obj.setInteractive(false)  
                if(thisScene.aux1==1){
                    thisScene.tweens.add({
                        targets: obj,
                        duration: 120,
                        repeat: 0,
                        ease: "Circ",
                        yoyo: 1,
                        scale: 1.30
                    }) 
                    thisScene.aux1=0
                    if(gSound==1){
                        thisScene.toco.play()
                    }
                }
            }           
        })
        this.physics.add.overlap(this.cuatrobg, this.dos, function(cuatro, obj){
            if(thisScene.isClicking==false){
                obj.setPosition(gWidth*0.622, gHeight*0.399) 
                obj.setInteractive(false)  
                if(thisScene.aux2==1){
                    thisScene.tweens.add({
                        targets: obj,
                        duration: 120,
                        repeat: 0,
                        ease: "Circ",
                        yoyo: 1,
                        scale: 1.30
                    }) 
                    thisScene.aux2=0
                    if(gSound==1){
                        thisScene.toco.play()
                    }
                }
            }           
        })
        this.physics.add.overlap(this.cuatrobg, this.tres, function(cuatro, obj){
            if(thisScene.isClicking==false){
                obj.setPosition(gWidth*0.616, gHeight*0.535) 
                obj.setInteractive(false)  
                if(thisScene.aux3==1){
                    thisScene.tweens.add({
                        targets: obj,
                        duration: 120,
                        repeat: 0,
                        ease: "Circ",
                        yoyo: 1,
                        scale: 1.30
                    }) 
                    thisScene.aux3=0
                    if(gSound==1){
                        thisScene.toco.play()
                    }
                } 
            }           
        })
        this.physics.add.overlap(this.cuatrobg, this.cuatro, function(cuatro, obj){
            if(thisScene.isClicking==false){
                obj.setPosition(gWidth*0.66, gHeight*0.49) 
                obj.setInteractive(false) 
                if(thisScene.aux4==1){
                    thisScene.tweens.add({
                        targets: obj,
                        duration: 120,
                        repeat: 0,
                        ease: "Circ",
                        yoyo: 1,
                        scale: 1.30
                    }) 
                    thisScene.aux4=0
                    if(gSound==1){
                        thisScene.toco.play()
                    }
                }  
            }           
        })
    }

    update(){
        if(this.uno.x==gWidth*0.664 /*&& this.uno.y==gHeight*0.63*/){
            if(this.dos.x==gWidth*0.622 /*&& this.dos.y==gHeight*0.339*/){
                if(this.tres.x==gWidth*0.616 /*&& this.tres.y==gHeight*0.535*/){
                    if(this.cuatro.x==gWidth*0.66 /*&& this.cuatro.y==gHeight*0.49*/){
                        if(this.aux==0){
                            this.tweens.add({
                                targets: this.libreta,
                                y: "+= 1000",
                                ease: "Back",
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
                            this.aux=1
                        }
                        

                        this.timer1 = this.time.addEvent({
                            delay: 3500,
                            loop: false,
                            callback: () => {
                                this.Back();
                            }
                        })
                    }
                }
            }
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