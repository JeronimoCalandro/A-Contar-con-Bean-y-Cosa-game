class Level6Scene extends Phaser.Scene {
    constructor() {
        super("Level6Scene")
    }

    create(){
        this.add.image(gWidth/2, gHeight/2, "level6-scene-bg2")
        this.bg=this.add.image(gWidth/2-4000, gHeight/2, "level6-scene-bg2")
        
        this.a=this.add.image(gWidth*0.31 ,gHeight*0.335, "level6-scene-A").setVisible(false)
        this.b=this.add.image(gWidth*0.335 ,gHeight*0.385, "level6-scene-B").setVisible(false)
        this.c=this.add.image(gWidth*0.3451 ,gHeight*0.445, "level6-scene-C").setVisible(false)
        this.d=this.add.image(gWidth*0.355 ,gHeight*0.552, "level6-scene-D").setVisible(false)
        this.e=this.add.image(gWidth*0.366 ,gHeight*0.579, "level6-scene-E").setVisible(false)
        this.f=this.add.image(gWidth*0.38 ,gHeight*0.625, "level6-scene-F").setVisible(false)

        this.seis=this.physics.add.image(gWidth*0.35-4000, gHeight*0.48, "level6-scene-seis")
        this.bean2=this.add.image(gWidth*0.53+2000, gHeight*0.60, "level6-scene-cosa2")

        this.cosaSS = this.physics.add.sprite(gWidth*0.53+2000,gHeight*0.60, "level6-scene-cosa2")
        this.anims.create({
            key: 'paint',
            frames: this.anims.generateFrameNumbers('cosaSS', { start: 0, end: 20 }),
            frameRate: 12,
            repeat: -1
        })
        this.cosaSS.play("paint")
        this.cosaSS.flipX=true

        this.texto=this.add.image(gWidth/2, gHeight*0.10-1000, "level6-scene-texto")
        this.texto2=this.add.image(gWidth/2, gHeight*0.10-1000, "level6-scene-texto2")
        this.libreta=this.add.image(gWidth*0.10, gHeight*0.20-1000, "level6-scene-libreta")
    
        this.b1=this.physics.add.image(gWidth*0.70+1000, gHeight*0.70, "level6-scene-b1").setInteractive()
        this.b2=this.physics.add.image(gWidth*0.82+1000, gHeight*0.70, "level6-scene-b2").setInteractive()
        this.b3=this.physics.add.image(gWidth*0.94+1000, gHeight*0.70, "level6-scene-b3").setInteractive()
        this.b4=this.physics.add.image(gWidth*0.76+1000, gHeight*0.80, "level6-scene-b4").setInteractive()
        this.b5=this.physics.add.image(gWidth*0.88+1000, gHeight*0.80, "level6-scene-b5").setInteractive()
        this.b6=this.physics.add.image(gWidth*0.82+1000, gHeight*0.90, "level6-scene-b6").setInteractive()

        this.gota1=this.physics.add.image(gWidth*0.70+1000, gHeight*0.70, "level6-scene-gota2").setInteractive().setAlpha(0.000001)
        this.gota2=this.physics.add.image(gWidth*0.82+1000, gHeight*0.70, "level6-scene-gota3").setInteractive().setAlpha(0.000001)
        this.gota3=this.physics.add.image(gWidth*0.94+1000, gHeight*0.70, "level6-scene-gota1").setInteractive().setAlpha(0.000001)
        this.gota4=this.physics.add.image(gWidth*0.76+1000, gHeight*0.80, "level6-scene-gota5").setInteractive().setAlpha(0.000001)
        this.gota5=this.physics.add.image(gWidth*0.88+1000, gHeight*0.80, "level6-scene-gota4").setInteractive().setAlpha(0.000001)
        this.gota6=this.physics.add.image(gWidth*0.82+1000, gHeight*0.90, "level6-scene-gota6").setInteractive().setAlpha(0.000001)

        this.v1=this.add.image(gWidth*0.15, gHeight*0.875, "level6-scene-b2").setAlpha(0.5).setInteractive()
        this.v2=this.add.image(gWidth*0.98, gHeight*0.95, "level6-scene-b6").setAlpha(0.5).setInteractive()
        this.v3=this.add.image(gWidth*0.46, gHeight*0.81, "level6-scene-b4").setAlpha(0.5).setInteractive()
        this.v4=this.add.image(gWidth*0.25, gHeight*0.75, "level6-scene-b1").setAlpha(0.5).setInteractive()
        this.v5=this.add.image(gWidth*0.93, gHeight*0.63, "level6-scene-b5").setAlpha(0.5).setInteractive()
        this.v6=this.add.image(gWidth*0.94, gHeight*0.45, "level6-scene-b3").setAlpha(0.5).setInteractive()

        this.obj=this.physics.add.image(gWidth*0.50, gHeight*0.653, "level6-scene-obj")

        this.bean=this.add.image(gWidth*0.40-2000, gHeight*0.60, "level6-scene-cosa")
        this.cosaSS2 = this.physics.add.sprite(gWidth*0.40-2000,gHeight*0.60, "level6-scene-cosa2")
        this.anims.create({
            key: 'paint',
            frames: this.anims.generateFrameNumbers('cosaSS', { start: 0, end: 20 }),
            frameRate: 12,
            repeat: -1
        })
        this.cosaSS2.play("paint")

        this.rt = this.add.renderTexture(0,0, 2380, 1080)
        this.aux0=0
        this.aux1=0
        this.aux2=0
        this.aux3=0
        this.aux4=0
        this.aux5=0
        this.aux6=0
        this.block1=0
        this.block2=0
        this.block3=0
        this.block4=0
        this.block5=0
        this.block6=0
        this.aux=0
        this.auxFinish=0
        this.num1=this.sound.add("1", {loop:false})
        this.num2=this.sound.add("2", {loop:false})
        this.num3=this.sound.add("3", {loop:false})
        this.num4=this.sound.add("4", {loop:false})
        this.num5=this.sound.add("5", {loop:false})
        gLastScene="Level6Scene"
        this.buttons=this.sound.add("buttons", {loop:false})
        this.toco=this.sound.add("toco", {loop:false})
        this.number=this.sound.add("6", {loop:false})
        this.ingame=this.sound.add("ingame6", {loop:false})
        this.ingame1=this.sound.add("ingame6-1", {loop:false})
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
            targets: this.cosaSS2,
            x: "+= 2000",
            ease: "Back",
            delay: 400,
            duration: 600
        })

    }

    update(){

        this.v1.on("pointerdown", ()=> {
            this.tweens.add({
                targets: this.v1,
                duration: 170,
                repeat: 0,
                ease: "Circ",
                yoyo: 1,
                scale: 1.3
            }) 
            this.v1.setAlpha(1)
            if(this.aux1==0){
                this.aux++
                this.aux1=1
            }
            if(gSound==1){
                this.toco.play()
            }
            this.ingame.pause()
        })
        this.v2.on("pointerdown", ()=> {
            this.tweens.add({
                targets: this.v2,
                duration: 170,
                repeat: 0,
                ease: "Circ",
                yoyo: 1,
                scale: 1.3
            }) 
            this.v2.setAlpha(1)
            if(this.aux2==0){
                this.aux++
                this.aux2=1
            }
            if(gSound==1){
                this.toco.play()
            }
            this.ingame.pause()
        })
        this.v3.on("pointerdown", ()=> {
            this.tweens.add({
                targets: this.v3,
                duration: 170,
                repeat: 0,
                ease: "Circ",
                yoyo: 1,
                scale: 1.3
            }) 
            this.v3.setAlpha(1)
            if(this.aux3==0){
                this.aux++
                this.aux3=1
            }
            if(gSound==1){
                this.toco.play()
            }
            this.ingame.pause()
        })
        this.v4.on("pointerdown", ()=> {
            this.tweens.add({
                targets: this.v4,
                duration: 170,
                repeat: 0,
                ease: "Circ",
                yoyo: 1,
                scale: 1.3
            }) 
            this.v4.setAlpha(1)
            if(this.aux4==0){
                this.aux++
                this.aux4=1
            }
            if(gSound==1){
                this.toco.play()
            }
            this.ingame.pause()
        })
        this.v5.on("pointerdown", ()=> {
            this.tweens.add({
                targets: this.v5,
                duration: 170,
                repeat: 0,
                ease: "Circ",
                yoyo: 1,
                scale: 1.3
            }) 
            this.v5.setAlpha(1)
            if(this.aux5==0){
                this.aux++
                this.aux5=1
            }
            if(gSound==1){
                this.toco.play()
            }
            this.ingame.pause()
        })
        this.v6.on("pointerdown", ()=> {
            this.tweens.add({
                targets: this.v6,
                duration: 170,
                repeat: 0,
                ease: "Circ",
                yoyo: 1,
                scale: 1.3
            }) 
            this.v6.setAlpha(1)
            if(this.aux6==0){
                this.aux++
                this.aux6=1
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
                    this.number.play()
                    this.block6=1
                }
            }
        }

        if(this.aux1 ==1 && this.aux2 ==1 && this.aux3 ==1 && this.aux4 ==1 && this.aux5 ==1 && this.aux6 ==1){
            this.tweens.add({
                targets: this.cosaSS2,
                x: "-= 2000",
                ease: "Back",
                delay: 300,
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
                targets: this.v1,
                x: "+= 4000",
                ease: "Back",
                delay: 350,
                duration: 600
            })
            this.tweens.add({
                targets: this.v2,
                x: "+= 2000",
                ease: "Back",
                delay: 400,
                duration: 600
            })
            this.tweens.add({
                targets: this.v3,
                x: "+= 2000",
                ease: "Back",
                delay: 450,
                duration: 600
            })
            this.tweens.add({
                targets: this.v4,
                x: "+= 2000",
                ease: "Back",
                delay: 500,
                duration: 600
            })
            this.tweens.add({
                targets: this.v5,
                x: "+= 2000",
                ease: "Back",
                delay: 550,
                duration: 600
            })
            this.tweens.add({
                targets: this.v6,
                x: "+= 2000",
                ease: "Back",
                delay: 600,
                duration: 600
            })

            this.timer1 = this.time.addEvent({
                delay: 500,
                loop: false,
                callback: () => {
                    this.Back();
                }
            })
            this.aux1=0
        }

        if(this.a.visible==true && this.b.visible==true && this.c.visible==true && this.d.visible==true && this.e.visible==true && this.f.visible==true && this.auxFinish==0){
            this.timer1 = this.time.addEvent({
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
            this.timer1 = this.time.addEvent({
                delay: 2500,
                callback: () => {
                    this.Number()
                }
            })
            this.timer1 = this.time.addEvent({
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

        
        
        this.timer1 = this.time.addEvent({
            delay: 1000,
            callback: () => {
                this.Ingame()
            }
        })
        this.tweens.add({
            targets: [this.bg, this.seis, this.obj],
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
            targets: this.cosaSS,
            x: "-= 2000",
            ease: "Back",
            delay: 300,
            duration: 600
        })
        this.tweens.add({
            targets: [this.b1, this.gota1],
            x: "-= 1000",
            ease: "Back",
            delay: 400,
            duration: 600
        })
        this.tweens.add({
            targets: [this.b2, this.gota2],
            x: "-= 1000",
            ease: "Back",
            delay: 500,
            duration: 600
        })
        this.tweens.add({
            targets: [this.b3, this.gota3],
            x: "-= 1000",
            ease: "Back",
            delay: 600,
            duration: 600
        })
        this.tweens.add({
            targets: [this.b4, this.gota4],
            x: "-= 1000",
            ease: "Back",
            delay: 700,
            duration: 600
        })
        this.tweens.add({
            targets: [this.b5, this.gota5],
            x: "-= 1000",
            ease: "Back",
            delay: 800,
            duration: 600
        })
        this.tweens.add({
            targets: [this.b6, this.gota6],
            x: "-= 1000",
            ease: "Back",
            delay: 900,
            duration: 600
        })

        this.input.setDraggable([this.gota1, this.gota2, this.gota3, this.gota4, this.gota5, this.gota6]);

        this.input.on('dragstart', function (pointer, gameObject) {
            gameObject.setAlpha(1)
        })

        this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
            gameObject.x = dragX
            gameObject.y = dragY
        })

        this.input.on('dragend', function (pointer, gameObject) {
            if(gameObject==thisScene.gota1){
                gameObject.x=gWidth*0.70
                gameObject.y=gHeight*0.70
            }
            if(gameObject==thisScene.gota2){
                gameObject.x=gWidth*0.82
                gameObject.y=gHeight*0.70
            }
            if(gameObject==thisScene.gota3){
                gameObject.x=gWidth*0.94
                gameObject.y=gHeight*0.70
            }
            if(gameObject==thisScene.gota4){
                gameObject.x=gWidth*0.76
                gameObject.y=gHeight*0.80
            }
            if(gameObject==thisScene.gota5){
                gameObject.x=gWidth*0.88
                gameObject.y=gHeight*0.80
            }
            if(gameObject==thisScene.gota6){
                gameObject.x=gWidth*0.82
                gameObject.y=gHeight*0.90
            }

            gameObject.setAlpha(0.000001)
        })

        this.physics.add.overlap(this.seis, [this.gota1, this.gota2, this.gota3, this.gota4, this.gota5, this.gota6], function(Seis, obj){
            if(obj==thisScene.gota1){
                thisScene.a.setVisible(true)
            }
            if(obj==thisScene.gota2){
                thisScene.d.setVisible(true)
            }
            if(obj==thisScene.gota3){
                thisScene.e.setVisible(true)
            }
            if(obj==thisScene.gota4){
                thisScene.b.setVisible(true)
            }
            if(obj==thisScene.gota5){
                thisScene.c.setVisible(true)
            }
            if(obj==thisScene.gota6){
                thisScene.f.setVisible(true)
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