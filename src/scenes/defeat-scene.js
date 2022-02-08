class DefeatScene extends Phaser.Scene {
    constructor() {
        super("DefeatScene")
    }

    create(){
        this.bg=this.add.image(gWidth/2, gHeight/2, "pause-scene-bg-pause")
        this.defeat=this.add.image(gWidth/2, gHeight/2-1000, "pause-scene-fail")
        this.lose=this.sound.add("lose", {loop:false})
        if(gSound==1){
            this.lose.play()
        }

        this.tweens.add({
            targets: this.defeat,
            y: "+= 1000",
            ease: "Back",
            delay: 300,
            duration: 600
        })

        this.timer1 = this.time.addEvent({
            delay: 1000,
            loop: false,
            callback: () => {
                this.Back();
            }
        })
    }

    Back(){
        this.tweens.add({
            targets: this.defeat,
            y: "-= 1000",
            ease: "Back",
            delay: 300,
            duration: 600
        })
        this.timer1 = this.time.addEvent({
            delay: 600,
            loop: false,
            callback: () => {
                this.Back2();
            }
        })
    }

    Back2(){
        this.scene.stop()
        this.scene.resume(gLastScene)
    }
}