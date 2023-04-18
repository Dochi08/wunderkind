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
    tiles.setCurrentTilemap(tilemap2[0])
    tiles.placeOnRandomTile(_1st_sprrite, sprites.dungeon.stairSouth)
})
sprites.onOverlap(SpriteKind.empoweredPlayer, SpriteKind.dougenentrence, function (sprite, otherSprite) {
    game.showLongText("Greetings! Do you want to go into the hell of dogends", DialogLayout.Bottom)
    story.showPlayerChoices("Yes I am ready", "Give me some time")
    if (story.checkLastAnswer("Yes I am ready")) {
        tiles.setCurrentTilemap(tilemap2[3])
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
    tiles.setCurrentTilemap(tilemap2[2])
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
        ........................
        ........................
        ........................
        .........ffff...........
        .......fff22fff.........
        ......fff2222fff........
        .....fff222222fff.......
        .....ff222222222f.......
        .....f22ffffff22f.......
        .....ffffeeeeffff.......
        ....ffefbf44fbfeff......
        ....fee41fddf14eef......
        ....ffeeddddddeeff2.....
        ...2..fee4444eef..2.....
        ...2222f222222f2222.....
        ...2222f222222f2222.....
        .......f225522f22.......
        ........ffffff..........
        ........ff..ff..........
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
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 2 2 2 2 2 2 2 2 2 2 . . . 
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
let icewizard: Sprite = null
let projectile: Sprite = null
let firewizard: Sprite = null
let Firstenemy: Sprite = null
let earthwizard: Sprite = null
let doungenentrence: Sprite = null
let questionbo_x: Sprite = null
let questionbox: Sprite = null
let numbercounter = 0
let tilemap2: tiles.TileMapData[] = []
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
tilemap2 = [
tilemap`level1`,
tilemap`level5`,
tilemap`level13`,
tilemap`level27`
]
numbercounter = 1
