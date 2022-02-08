class LevelsScene extends Phaser.Scene {
    constructor() {
        super("LevelsScene")
    }

    create()
    {
        this.add.image(gWidth/2, gHeight/2, "levels-scene-bg")
        this.buttons=this.sound.add("buttons", {loop:false})
        gLastScene="LevelsScene"

        

        this.btn123 = new Button(this, gWidth*0.20, gHeight * 0.50-1000 , "levels-scene-123", {
            onClick: ()=> {
                if(gSound==1){
                    this.buttons.play()
                }
                this.scene.stop("Level2Scene")
                this.scene.stop("Level3Scene")
                this.scene.stop("Level4Scene")
                this.scene.stop("Level5Scene")
                this.scene.stop("Level6Scene")
                this.scene.stop("Level7Scene")
                this.scene.stop("Level8Scene")
                this.scene.stop("Level9Scene")
                this.scene.stop("Level10Scene")
                this.scene.start("Level1Scene")
               
            }
        })
        this.btn456 = new Button(this, gWidth*0.50, gHeight * 0.50-1000 , "levels-scene-456", {
            onClick: ()=> {
                if(gSound==1){
                    this.buttons.play()
                }
                this.scene.stop("Level5Scene")
                this.scene.stop("Level6Scene")
                this.scene.stop("Level7Scene")
                this.scene.stop("Level8Scene")
                this.scene.stop("Level9Scene")
                this.scene.stop("Level10Scene")
                this.scene.start("Level4Scene")
                
            }
        })
        this.btn78910 = new Button(this, gWidth*0.80, gHeight * 0.50-1000 , "levels-scene-78910", {
            onClick: ()=> {
                if(gSound==1){
                    this.buttons.play()
                }
                this.scene.stop("Level8Scene")
                this.scene.stop("Level9Scene")
                this.scene.stop("Level10Scene")
                this.scene.start("Level7Scene")
                
            }
        })

        this.btnBack = new Button(this, gWidth*0.05-1000, gHeight * 0.10 , "buttons-back", {
            onClick: ()=> {
                if(gSound==1){
                    this.buttons.play()
                }
                this.scene.stop()
                this.scene.start("SplashScene")
                
            }
        })


        this.tweens.add({
            targets: [this.btn123],
            y: "+= 1000",
            ease: "Back",
            delay: 300,
            duration: 600
        })
        this.tweens.add({
            targets: [this.btn456],
            y: "+= 1000",
            ease: "Back",
            delay: 500,
            duration: 600
        })
        this.tweens.add({
            targets: [this.btn78910],
            y: "+= 1000",
            ease: "Back",
            delay: 700,
            duration: 600
        })
        this.tweens.add({
            targets: [this.btnBack],
            x: "+= 1000",
            ease: "Back",
            delay: 1000,
            duration: 600
        })

    }

    update(){
        
    }
}