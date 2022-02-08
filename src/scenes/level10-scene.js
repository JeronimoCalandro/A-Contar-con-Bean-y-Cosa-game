class Level10Scene extends Phaser.Scene {
    constructor() {
        super("Level10Scene")
    }

    create(){
        this.add.image(gWidth/2, gHeight/2, "level10-scene-bg")
        this.suelo=this.physics.add.image(gWidth/2, gHeight*1.43, "level10-scene-bg").setRotation(135)

        this.physics.world.setBoundsCollision(true,true,true,true)
        this.l1=this.physics.add.image(gWidth*0.23, gHeight*0.90, "level10-scene-1").setVelocity(0).setInteractive().setSize(100,50, 0,50)
        this.l2=this.physics.add.image(gWidth*0.37, gHeight*0.70, "level10-scene-2").setVelocity(0).setInteractive().setSize(100,50, 0,50)
        this.l3=this.physics.add.image(gWidth*0.50, gHeight*0.90, "level10-scene-3").setVelocity(0).setInteractive().setSize(100,50, 0,50)
        this.l6=this.physics.add.image(gWidth*0.70, gHeight*0.34, "level10-scene-6").setVelocity(0).setInteractive().setSize(50,50, 0,50)
        this.l4=this.physics.add.image(gWidth*0.63, gHeight*0.35, "level10-scene-4").setVelocity(0).setInteractive().setSize(50,50, 0,50)
        this.l5=this.physics.add.image(gWidth*0.65, gHeight*0.30, "level10-scene-5").setVelocity(0).setInteractive().setSize(50,50, 0,50)
        this.l7=this.physics.add.image(gWidth*0.73, gHeight*0.76, "level10-scene-7").setVelocity(0).setInteractive().setSize(50,50, 0,50)
        this.l8=this.physics.add.image(gWidth*0.76, gHeight*0.72, "level10-scene-8").setVelocity(0).setInteractive().setSize(50,50, 0,50)
        this.l9=this.physics.add.image(gWidth*0.83, gHeight*0.83, "level10-scene-9").setVelocity(0).setInteractive().setSize(50,50, 0,50)
        this.l10=this.physics.add.image(gWidth*0.93, gHeight*0.37, "level10-scene-10").setVelocity(0).setInteractive().setSize(50,50, 0,50)
        this.l1.setCollideWorldBounds(true)
        this.l2.setCollideWorldBounds(true)
        this.l3.setCollideWorldBounds(true)
        this.l4.setCollideWorldBounds(true)
        this.l5.setCollideWorldBounds(true)
        this.l6.setCollideWorldBounds(true)
        this.l7.setCollideWorldBounds(true)
        this.l8.setCollideWorldBounds(true)
        this.l9.setCollideWorldBounds(true)
        this.l10.setCollideWorldBounds(true)

        const layer1 = this.add.layer()

        this.cosa=this.add.image(gWidth*0.20-1000, gHeight*0.67, "level10-scene-cosa")
        this.texto=this.add.image(gWidth/2, gHeight*0.10-1000, "level10-scene-texto")
        this.libreta=this.add.image(gWidth*0.10, gHeight*0.20-1000, "level10-scene-libreta")
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
        this.aux10=0
        this.auxiliar=0
        this.block1=0
        this.block2=0
        this.block3=0
        this.block4=0
        this.block5=0
        this.block6=0
        this.block7=0
        this.block8=0
        this.block9=0
        this.block10=0

        this.num1=this.sound.add("1", {loop:false})
        this.num2=this.sound.add("2", {loop:false})
        this.num3=this.sound.add("3", {loop:false})
        this.num4=this.sound.add("4", {loop:false})
        this.num5=this.sound.add("5", {loop:false})
        this.num6=this.sound.add("6", {loop:false})
        this.num7=this.sound.add("7", {loop:false})
        this.num8=this.sound.add("8", {loop:false})
        this.num9=this.sound.add("9", {loop:false})
        let thisScene=this
        gLastScene="Level10Scene"
        this.buttons=this.sound.add("buttons", {loop:false})
        this.toco=this.sound.add("toco", {loop:false})
        this.number=this.sound.add("10", {loop:false})
        this.ingame=this.sound.add("ingame10", {loop:false})
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
            x: "+= 1000",
            ease: "Back",
            delay: 400,
            duration: 600
        })


        this.input.setDraggable([this.l1, this.l2, this.l3, this.l4, this.l5, this.l6, this.l7, this.l8, this.l9, this.l10])

        this.input.on('dragstart', function (pointer, gameObject) {
            gameObject.setVelocity(0)
            layer1.add(gameObject)
            if(gSound==1){
                thisScene.toco.play()
                if(gameObject==thisScene.l1){
                    if(thisScene.block1==0){
                        thisScene.auxiliar++
                        thisScene.block1=1
                    }
                }
                if(gameObject==thisScene.l2){
                    if(thisScene.block2==0){
                        thisScene.auxiliar++
                        thisScene.block2=1
                    }
                }
                if(gameObject==thisScene.l3){
                    if(thisScene.block3==0){
                        thisScene.auxiliar++
                        thisScene.block3=1
                    }
                }
                if(gameObject==thisScene.l4){
                    if(thisScene.block4==0){
                        thisScene.auxiliar++
                        thisScene.block4=1
                    }
                }
                if(gameObject==thisScene.l5){
                    if(thisScene.block5==0){
                        thisScene.auxiliar++
                        thisScene.block5=1
                    }
                }
                if(gameObject==thisScene.l6){
                    if(thisScene.block6==0){
                        thisScene.auxiliar++
                        thisScene.block6=1
                    }
                }
                if(gameObject==thisScene.l7){
                    if(thisScene.block7==0){
                        thisScene.auxiliar++
                        thisScene.block7=1
                    }
                }
                if(gameObject==thisScene.l8){
                    if(thisScene.block8==0){
                        thisScene.auxiliar++
                        thisScene.block8=1
                    }
                }
                if(gameObject==thisScene.l9){
                    if(thisScene.block9==0){
                        thisScene.auxiliar++
                        thisScene.block9=1
                    }
                }
                if(gameObject==thisScene.l10){
                    if(thisScene.block10==0){
                        thisScene.auxiliar++
                        thisScene.block10=1
                    }
                }
            }
        })

        this.input.on('drag', function (pointer, gameObject, dragX, dragY) {

            gameObject.x = dragX
            gameObject.y = dragY
            gameObject.setVelocity(0)
        })

        this.input.on('dragend', function (pointer, gameObject) {
            gameObject.setVelocity(0,500)
            if(thisScene.auxiliar==1){
                thisScene.num1.play()
            }
            if(thisScene.auxiliar==2){
                thisScene.num2.play()
            }
            if(thisScene.auxiliar==3){
                thisScene.num3.play()
            }
            if(thisScene.auxiliar==4){
                thisScene.num4.play()
            }
            if(thisScene.auxiliar==5){
                thisScene.num5.play()
            }
            if(thisScene.auxiliar==6){
                thisScene.num6.play()
            }
            if(thisScene.auxiliar==7){
                thisScene.num7.play()
            }
            if(thisScene.auxiliar==8){
                thisScene.num8.play()
            }
            if(thisScene.auxiliar==9){
                thisScene.num9.play()
            }
            if(thisScene.auxiliar==10){
                thisScene.number.play()
            }
            
        })
        ///var canDrag = this.physics.world.add.Group()

        /*this.physics.add.image(100, 100, 'level10-scene-1', null, { chamfer: 16 }).setBounce(0.9)//.setCollisionGroup(canDrag)

        this.physics.add.mouseSpring({ length: 1, stiffness: 0.6 })*/

        this.physics.add.overlap([this.suelo, this.l1, this.l2, this.l3, this.l4, this.l5, this.l6, this.l7, this.l8, this.l9, this.l10], [this.suelo, this.l1, this.l2, this.l3, this.l4, this.l5, this.l6, this.l7, this.l8, this.l9, this.l10], function(book, obj){
            if(obj==thisScene.l1){
                thisScene.aux1=1
                thisScene.l1.setTexture("level10-scene-l1")
                
                
            }
            if(obj==thisScene.l2){
                thisScene.aux2=1
                thisScene.l2.setTexture("level10-scene-l2")
                
            }
            if(obj==thisScene.l3){
                thisScene.aux3=1
                thisScene.l3.setTexture("level10-scene-l3")
                
            }
            if(obj==thisScene.l4){
                thisScene.aux4=1
                thisScene.l4.setTexture("level10-scene-l4")
                
            }
            if(obj==thisScene.l5){
                thisScene.aux5=1
                thisScene.l5.setTexture("level10-scene-l5")
                
            }
            if(obj==thisScene.l6){
                thisScene.aux6=1
                thisScene.l6.setTexture("level10-scene-l6")
                
            }
            if(obj==thisScene.l7){
                thisScene.aux7=1
                thisScene.l7.setTexture("level10-scene-l7")
                
            }
            if(obj==thisScene.l8){
                thisScene.aux8=1
                thisScene.l8.setTexture("level10-scene-l8")
                
            }
            if(obj==thisScene.l9){
                thisScene.aux9=1
                thisScene.l9.setTexture("level10-scene-l9")
                
            }
            if(obj==thisScene.l10){
                thisScene.aux10=1
                thisScene.l10.setTexture("level10-scene-l10")
                 
            }
            book.setVelocity(0)
            obj.setVelocity(0)   
        })
    }

    update(){
        console.log(this.auxiliar)
        if(this.aux1==1 && this.aux2==1 && this.aux3==1 && this.aux4==1 && this.aux5==1 && this.aux6==1 && this.aux7==1 && this.aux8==1 && this.aux9==1 && this.aux10==1){
            if(this.aux==0){
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
                this.aux=1;
            }
            
            this.timer1 = this.time.addEvent({
                delay: 4500,
                loop: false,
                callback: () => {
                    this.Back();
                }
            })
        }

        if(this.aux1==1){

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