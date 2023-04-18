namespace SpriteKind {
    export const question = SpriteKind.create()
    export const question2 = SpriteKind.create()
    export const empoweredPlayer = SpriteKind.create()
    export const dougenentrence = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairNorth, function (sprite, location) {
    questionbox = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . e e e e e e e e e e e e e e . 
        . e e e e e e e e e e e e e e . 
        . e e d d d d d d d d d d e e . 
        . e e d f d d d f d f d d e e . 
        . e e f d f d f f f f d d e e . 
        . e e d f d d d f d d d d e e . 
        . e e d f f d f d d d d d e e . 
        . e e e e e e e e e e e e e e . 
        . e e e e e e e e e e e e e e . 
        . e e e e e e e e e e e e e e . 
        . e e e e e e e e e e e e e e . 
        . e e e e e e e e e e e e e e . 
        . e e e e e e e e e e e e e e . 
        . e e e e e e e e e e e e e e . 
        . e e e e e e e e e e e e e e . 
        `, SpriteKind.question)
    questionbox.setPosition(95, 119)
    questionbo_x = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . e e e e e e e e e e e e e e . 
        . e e e e e e e e e e e e e e . 
        . e e d d d d d d d d d d e e . 
        . e e d f d d d f d f d d e e . 
        . e e f d f d f f f f d d e e . 
        . e e d f d d d f d d d d e e . 
        . e e d f f d f d d d d d e e . 
        . e e e e e e e e e e e e e e . 
        . e e e e e e e e e e e e e e . 
        . e e e e e e e e e e e e e e . 
        . e e e e e e e e e e e e e e . 
        . e e e e e e e e e e e e e e . 
        . e e e e e e e e e e e e e e . 
        . e e e e e e e e e e e e e e . 
        . e e e e e e e e e e e e e e . 
        `, SpriteKind.question2)
    questionbo_x.setPosition(95, 79)
    tiles.setCurrentTilemap(tilemapList[0])
    tiles.placeOnRandomTile(_1st_sprrite, sprites.dungeon.stairSouth)
})
sprites.onOverlap(SpriteKind.empoweredPlayer, SpriteKind.dougenentrence, function (sprite, otherSprite) {
    game.showLongText("Greetings! Do you want to go into the hell of dogends", DialogLayout.Bottom)
    story.showPlayerChoices("Yes I am ready", "Give me some time")
    if (story.checkLastAnswer("Yes I am ready")) {
        tiles.setCurrentTilemap(tilemapList[3])
        sprites.destroy(doungenentrence)
        fightScene(sprite)
    } else {
        game.showLongText("Okay have some time then", DialogLayout.Center)
    }
})
scene.onOverlapTile(SpriteKind.empoweredPlayer, sprites.dungeon.stairNorth, function (sprite, location) {
    game.showLongText("You may no longer enter", DialogLayout.Center)
    pause(500)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    fireCommanSpell1()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.question, function (sprite, otherSprite) {
    game.showLongText("How did you get here?", DialogLayout.Bottom)
    story.showPlayerChoices("I went down the stairs", "Why do you need to know?")
    game.showLongText("Well, you came here at the right time I guess. ", DialogLayout.Bottom)
    game.showLongText("this is a place that you get your super power", DialogLayout.Bottom)
    sprites.destroy(otherSprite)
})
function earthCommonSpell2 () {
    animation.runImageAnimation(
    earthwizard,
    [img`
        ........................
        ........................
        ........................
        ..........ffff..........
        ........fff77fff........
        .......fff7887fff.......
        ......fff787787fff......
        ......ff778778777f......
        ......f77ffffff77f......
        ......ffffeeeeffff......
        .....ffefbf44fbfeff.....
        .....fee41fddf14eef.....
        .....ffeeddddddeeff7....
        ....7..fee4444eef..7....
        ....7777f788887f7777....
        ....7777f788887f7777....
        ........f775577f77......
        .........ffffff.........
        .........ff..ff.........
        ........................
        ........................
        ........................
        ........................
        ........................
        `,img`
        ........................
        ........................
        ........................
        .........ffffff.........
        ........f7f7777ff.......
        .......f77777777ff......
        ..cc...f7877f8777f......
        ..c7c.f7788888ffff......
        ..c77cf77ffff7777f......
        ...c77cffeeefffffff.....
        ....c88c444fbe44eff.....
        .....c8c4ddf14d4eef.....
        .....ccc4eddd4eeef......
        ......8888e44eeff.......
        .......88888888f........
        ........f878887f........
        ........f877777f........
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        ........................
        `,img`
        ........................
        ........................
        ........................
        ...........fff..........
        ..........f7fffff.......
        ........ff7777777ff.....
        .......ff787778777ff....
        .......f77888887777f....
        ......f77777777fffff....
        ......f77fffff7777fff...
        c.....fffeeefffffffff...
        7cc...fee44fbbe44efef...
        c78cc..feddfbb4d4eef....
        .c888c888888888888f.....
        ..c88c88887888878f......
        ...ccc88887777778f......
        ......8888ffffffff......
        ..........ff...fff......
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `,img`
        ...............ff.......
        .............ff7ffff....
        ............ff7f7777ff..
        ...........ff77f77777ff.
        ...........f7777777777f.
        ..........f7777777fffff.
        ..........f77ffff7777fff
        ..........fffeeeffffffff
        ..........fee44fbe44efef
        ...........feddfb4d4eef.
        ..........c.eeddd4eeef..
        ....ccccccc888788878f...
        ....777888c888777778f...
        ......ccccc.8888fffff...
        ..........c...ffffffff..
        ...............ff..fff..
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `,img`
        ........................
        ........................
        ........................
        ...........fff..........
        ..........f7fffff.......
        ........ff7777777ff.....
        .......ff777777777ff....
        .......f7777fff7777f....
        ......f77777777fffff....
        ......f77fffff7777fff...
        c.....fffeeefffffffff...
        7cc...fee44fbbe44efef...
        c78cc..feddfbb4d4eef....
        .c888c888888888888f.....
        ..c88c88878888878f......
        ...ccc88877777778f......
        ......8888ffffffff......
        ..........ff...fff......
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `,img`
        ........................
        ........................
        ........................
        .........ffffff.........
        ........f7f7777ff.......
        .......f77777777ff......
        ..cc...f787778777f......
        ..c7c.f7788888ffff......
        ..c77cf77ffff7777f......
        ...c77cffeeefffffff.....
        ....c88c444fbe44eff.....
        .....c8c4ddf14d4eef.....
        .....ccc4eddd4eeef......
        ......8888e44eeff.......
        .......88888888f........
        ........f878878f........
        ........f877778f........
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        ........................
        `,img`
        ........................
        ........................
        ........................
        ..........ffff..........
        ........fff77fff........
        .......fff7887fff.......
        ......fff787787fff......
        ......ff778778777f......
        ......f77ffffff77f......
        ......ffffeeeeffff......
        .....ffefbf44fbfeff.....
        .....fee41fddf14eef.....
        .....ffeeddddddeeff7....
        ....7..fee4444eef..7....
        ....7777f788887f7777....
        ....7777f788887f7777....
        ........f775577f77......
        .........ffffff.........
        .........ff..ff.........
        ........................
        ........................
        ........................
        ........................
        ........................
        `],
    200,
    false
    )
    pause(500)
    projectileearth = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 7 7 7 7 7 7 7 7 7 7 7 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, firewizard, -100, 0)
}
function fightScene (mySprite: Sprite) {
    tiles.placeOnTile(mySprite, tiles.getTileLocation(19, 5))
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.question2, function (sprite, otherSprite) {
    game.showLongText("CHOOSE YOUR POWER", DialogLayout.Bottom)
    story.showPlayerChoices("Fire", "Ice", "Earth")
    if (story.checkLastAnswer("Fire")) {
        tiles.placeOnRandomTile(_1st_sprrite, sprites.dungeon.collectibleRedCrystal)
    } else if (story.checkLastAnswer("Ice")) {
        tiles.placeOnRandomTile(_1st_sprrite, sprites.dungeon.collectibleInsignia)
    } else if (story.checkLastAnswer("Earth")) {
        tiles.placeOnRandomTile(_1st_sprrite, sprites.dungeon.collectibleBlueCrystal)
    }
})
function earthwizard2 () {
    earthwizard = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 7 7 f f f . . . . 
        . . . f f f 7 8 8 7 f f f . . . 
        . . f f f 7 8 7 7 8 7 f f f . . 
        . . f f 7 7 8 7 7 8 7 7 7 f . . 
        . . f 7 7 f f f f f f 7 7 f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . f f e e d d d d d d e e f f 7 
        7 . . f e e 4 4 4 4 e e f . . 7 
        7 7 7 7 f 7 8 8 8 8 7 f 7 7 7 7 
        7 7 7 7 f 7 8 8 8 8 7 f 7 7 7 7 
        . . . . f 7 7 5 5 7 7 f 7 7 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.empoweredPlayer)
    spriteCreator(earthwizard)
}
sprites.onOverlap(SpriteKind.empoweredPlayer, SpriteKind.Enemy, function (sprite, otherSprite) {
    color.startFade(color.originalPalette, color.Black, 500)
    tiles.placeOnTile(sprite, tiles.getTileLocation(10, 5))
    tiles.placeOnTile(otherSprite, tiles.getTileLocation(8, 5))
    otherSprite.follow(sprite, 0)
    fightscene12(sprite)
    color.startFade(color.Black, color.originalPalette, 500)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    earthwizard2()
    afterpower(earthwizard)
})
function spriteCreator (mySprite: Sprite) {
    controller.moveSprite(mySprite)
    scene.cameraFollowSprite(mySprite)
    mySprite.setFlag(SpriteFlag.StayInScreen, true)
}
function fightscene12 (mySprite: Sprite) {
    tiles.placeOnTile(mySprite, tiles.getTileLocation(13, 5))
    controller.moveSprite(mySprite, 0, 0)
    tiles.placeOnTile(Firstenemy, tiles.getTileLocation(9, 5))
    Firstenemy.follow(mySprite, 0)
}
function firewizard2 () {
    firewizard = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f 2 2 2 2 2 2 f f f . . 
        . . f f 2 2 2 2 2 2 2 2 2 f . . 
        . . f 2 2 f f f f f f 2 2 f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . f f e e d d d d d d e e f f 2 
        2 . . f e e 4 4 4 4 e e f . . 2 
        2 2 2 2 f 2 2 2 2 2 2 f 2 2 2 2 
        2 2 2 2 f 2 2 2 2 2 2 f 2 2 2 2 
        . . . . f 2 2 5 5 2 2 f 2 2 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.empoweredPlayer)
    spriteCreator(firewizard)
}
function afterpower (mySprite: Sprite) {
    sprites.destroy(_1st_sprrite)
    sprites.destroy(questionbo_x)
    sprites.destroy(questionbox)
    tiles.setCurrentTilemap(tilemapList[2])
    tiles.placeOnTile(mySprite, tiles.getTileLocation(5, 9))
    doungenentrence = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f a a f f f . . . . 
        . . . f f f a a a a f f f . . . 
        . . f f f a a a a a a a f f . . 
        . . f f a a a a a a a a a f . . 
        . . f a a f f f f f f a a f . . 
        . . f f f f a a a a f f f f . . 
        . f f a f b f 4 4 f b f a f f . 
        . f a a 4 1 f d d f 1 4 a a f . 
        . . f a a d d d d d d a a a . . 
        . . . f a a 4 4 4 4 a a f . . . 
        . . 5 5 f a a a a a a f 5 5 . . 
        . . 5 5 f a a a a a a f 5 5 . . 
        . . 5 5 f 5 5 5 5 5 5 f 5 5 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.dougenentrence)
    tiles.placeOnTile(doungenentrence, tiles.getTileLocation(5, 1))
}
scene.onOverlapTile(SpriteKind.empoweredPlayer, sprites.dungeon.darkGroundEast, function (sprite, location) {
    if (numbercounter == 1) {
        Firstenemy = sprites.create(img`
            ........................
            ........................
            ........................
            ........................
            ..........fffff.........
            ........ff11111f........
            .......fb111111bf.......
            ......fbd1111111f.......
            ......fddd111111df......
            ......fdddd11111df......
            ......fddddddd11df......
            ......fddddddd111f......
            ......fddddddcf11f......
            .......fbdddb1111bf.....
            ........fffcfdb1b1f.....
            .......ffffffffbfbf.....
            ....ff.fffffffffff......
            .....ffffffff...........
            .....ffffffb1b1f........
            ......ffffffbfbf........
            ........................
            ........................
            ........................
            ........................
            `, SpriteKind.Enemy)
        Firstenemy.follow(sprite, 500)
        scene.cameraShake(4, 3000)
        game.showLongText("Fear from my power", DialogLayout.Bottom)
        numbercounter = numbercounter + 1
    }
    tiles.placeOnTile(Firstenemy, tiles.getTileLocation(9, 5))
})
function fireCommanSpell1 () {
    animation.runImageAnimation(
    firewizard,
    [img`
        ......ffff..............
        ....fff22fff............
        ...fff2222fff...........
        ..fff222222fff..........
        ..ff222222222f..........
        ..f22ffffff22f..........
        ..ffffeeeeffff..........
        .ffefbf44fbfeff.........
        .fee41fddf14eef.........
        .ffeeddddddeeff2........
        2..fee4444eef..2........
        2222f222222f2222........
        2222f222222f2222........
        ....f225522f22..........
        .....ffffff.............
        .....ff..ff.............
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `,img`
        ..............ffffff....
        .............f2feeeeff..
        ............f222feeeeff.
        .......cc...f222effeeef.
        .......c2c.f22222eeffff.
        .......c22cf22ffff222ef.
        ........c44cffeeefffffff
        .........c44c244fbe44eff
        ..........c4c2ddf14d4eef
        ..........ccc2eddd4eeef.
        ...........2222e44eeff..
        ............22222222f...
        .............f2eeeeef...
        .............f554444f...
        ..............ffffff....
        ................fff.....
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `,img`
        ........................
        ..............fff.......
        .............f2fffff....
        ...........ff2222222ff..
        ..........ff222222222ff.
        ..........f2222fff2222f.
        .........f22222222fffff.
        .........f22fffff2222fff
        ..cc.....fffeeefffffffff
        ..c2cc...fee44fbbe44efef
        ..cc24cc..feddfbb4d4eef.
        ....c444c2efddddd4eeef..
        .....cc4c22ee2222222f...
        ......ccc2244e544444f...
        .........22eeffffffff...
        .............ff...fff...
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `,img`
        ...............ff.......
        .............ff2ffff....
        ............ff2f2222ff..
        ...........ff22f22222ff.
        ...........f2222ff2222f.
        ..........f2222222fffff.
        ..........f22ffff2222fff
        ..........fffeeeffffffff
        ..........fee44fbe44efef
        ...........feddfb4d4eef.
        ..........c.eeddd4eeef..
        ....ccccccceddee2222f...
        ....222444cedd44e444f...
        ......ccccc.eeeefffff...
        ..........c...ffffffff..
        ...............ff..fff..
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `,img`
        ........................
        ..............fff.......
        .............f2fffff....
        ...........ff2222222ff..
        ..........ff222222222ff.
        ..........f2222fff2222f.
        .........f22222222fffff.
        .........f22fffff2222fff
        ..cc.....fffeeefffffffff
        ..c2cc...fee44fbbe44efef
        ..cc22cc..feddfbb4d4eef.
        ....c444c22fddddd4eeef..
        .....cc4c22ee2222222f...
        ......ccc2244e544444f...
        .........22eeffffffff...
        .............ff...fff...
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `,img`
        ..............ffffff....
        .............f2f22222f..
        ............f222f2222ff.
        .......cc...f2222222222.
        .......c2c.f2222222ffff.
        .......c22cf22ffff2222f.
        ........c24cffeeefffffff
        .........c44ce44fbe44eff
        ..........c4c2ddf14d4eef
        ..........ccc2eddd4eeef.
        ...........2224e44eeff..
        ............22442222f...
        .............f2eeeeef...
        .............f554444f...
        ..............ffffff....
        ................fff.....
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `,img`
        ......ffff..............
        ....fff22fff............
        ...fff2222fff...........
        ..fff222222fff..........
        ..ff222222222f..........
        ..f22ffffff22f..........
        ..ffffeeeeffff..........
        .ffefbf44fbfeff.........
        .fee41fddf14eef.........
        .ffeeddddddeeff2........
        2..fee4444eef..2........
        2222f222222f2222........
        2222f222222f2222........
        ....f225522f22..........
        .....ffffff.............
        .....ff..ff.............
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `],
    200,
    false
    )
    pause(500)
    projectilefire = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, firewizard, -100, 0)
}
function icewizard2 () {
    icewizard = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 9 9 f f f . . . . 
        . . . f f f 9 9 9 9 f f f . . . 
        . . f f f 9 9 9 9 9 9 f f f . . 
        . . f f 9 9 9 9 9 9 9 9 9 f . . 
        . . f 9 9 f f f f f f 9 9 f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        9 . . f e e 4 4 4 4 e e f . . . 
        9 9 9 9 f 8 8 8 8 8 8 f 9 9 . . 
        9 9 9 9 f 8 8 8 8 8 8 f 9 9 . . 
        . . . . f 8 8 5 5 8 8 f 9 9 9 . 
        . . . . . f f f f f f . . . 9 9 
        . . . . . f f . . f f . . . . 9 
        `, SpriteKind.empoweredPlayer)
    spriteCreator(icewizard)
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    firewizard2()
    afterpower(firewizard)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    icewizard2()
    afterpower(icewizard)
})
function iceCommonSpell1 () {
    animation.runImageAnimation(
    icewizard,
    [img`
        ........................
        ........................
        ........................
        ..........ffff..........
        ........fff99fff........
        .......fff9999fff.......
        ......fff999999fff......
        ......ff999999999f......
        ......f99ffffff99f......
        ......ffffeeeeffff......
        .....ffefbf44fbfeff.....
        .....fee41fddf14eef.....
        .....ffeeddddddeeff.....
        ....9..fee4444eef.......
        ....9999f888888f99......
        ....9999f888888f99......
        ........f885588f999.....
        .........ffffff...99....
        .........ff..ff....9....
        ........................
        ........................
        ........................
        ........................
        ........................
        `,img`
        ........................
        ........................
        ........................
        .........ffffff.........
        ........f9f9999ff.......
        .......f99999999ff......
        ..cc...f9999ff999f......
        ..c9c.f9999999ffff......
        ..c99cf99ffff9999f......
        ...c99cffeeefffffff.....
        ....c88c444fbe44eff.....
        .....c8c4ddf14d4eef.....
        .....ccc4eddd4eeef......
        ......8888e44eeff.......
        .......88888888f........
        ........f888888f........
        ........f888888f........
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        ........................
        `,img`
        ........................
        ........................
        ........................
        ...........fff..........
        ..........f9fffff.......
        ........ff9999999ff.....
        .......ff999999999ff....
        .......f9999fff9999f....
        ......f99999999fffff....
        ......f99fffff9999fff...
        c.....fffeeefffffffff...
        9cc...fee44fbbe44efef...
        c98cc..feddfbb4d4eef....
        .c888c888888888888f.....
        ..c88c88888888888f......
        ...ccc88888888888f......
        ......8888ffffffff......
        ..........ff...fff......
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `,img`
        ...............ff.......
        .............ff9ffff....
        ............ff9f9999ff..
        ...........ff99f99999ff.
        ...........f9999999999f.
        ..........f9999999fffff.
        ..........f99ffff9999fff
        ..........fffeeeffffffff
        ..........fee44fbe44efef
        ...........feddfb4d4eef.
        ..........c.eeddd4eeef..
        ....ccccccc888888888f...
        ....999888c888888888f...
        ......ccccc.8888fffff...
        ..........c...ffffffff..
        ...............ff..fff..
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `,img`
        ........................
        ........................
        ........................
        ...........fff..........
        ..........f9fffff.......
        ........ff9999999ff.....
        .......ff999999999ff....
        .......f9999fff9999f....
        ......f99999999fffff....
        ......f99fffff9999fff...
        c.....fffeeefffffffff...
        9cc...fee44fbbe44efef...
        c98cc..feddfbb4d4eef....
        .c888c888888888888f.....
        ..c88c88888888888f......
        ...ccc88888888888f......
        ......8888ffffffff......
        ..........ff...fff......
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `,img`
        ........................
        ........................
        ........................
        .........ffffff.........
        ........f9f9999ff.......
        .......f99999999ff......
        ..cc...f9999ff999f......
        ..c9c.f9999999ffff......
        ..c99cf99ffff9999f......
        ...c99cffeeefffffff.....
        ....c88c444fbe44eff.....
        .....c8c4ddf14d4eef.....
        .....ccc4eddd4eeef......
        ......8888e44eeff.......
        .......88888888f........
        ........f888888f........
        ........f888888f........
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        ........................
        `,img`
        ........................
        ........................
        ........................
        ..........ffff..........
        ........fff99fff........
        .......fff9999fff.......
        ......fff999999fff......
        ......ff999999999f......
        ......f99ffffff99f......
        ......ffffeeeeffff......
        .....ffefbf44fbfeff.....
        .....fee41fddf14eef.....
        .....ffeeddddddeeff.....
        ....9..fee4444eef.......
        ....9999f888888f99......
        ....9999f888888f99......
        ........f885588f999.....
        .........ffffff...99....
        .........ff..ff....9....
        ........................
        ........................
        ........................
        ........................
        ........................
        `],
    200,
    false
    )
    pause(500)
    projectileice = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 9 9 9 9 9 9 9 9 9 9 9 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, firewizard, -100, 0)
}
let projectileice: Sprite = null
let icewizard: Sprite = null
let projectilefire: Sprite = null
let Firstenemy: Sprite = null
let firewizard: Sprite = null
let projectileearth: Sprite = null
let earthwizard: Sprite = null
let doungenentrence: Sprite = null
let questionbo_x: Sprite = null
let questionbox: Sprite = null
let numbercounter = 0
let tilemapList: tiles.TileMapData[] = []
let _1st_sprrite: Sprite = null
_1st_sprrite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
tiles.setCurrentTilemap(tilemap`level5`)
tiles.placeOnRandomTile(_1st_sprrite, sprites.builtin.forestTiles22)
scene.cameraFollowSprite(_1st_sprrite)
controller.moveSprite(_1st_sprrite)
tilemapList = [
tilemap`level1`,
tilemap`level5`,
tilemap`level13`,
tilemap`level27`
]
numbercounter = 1
