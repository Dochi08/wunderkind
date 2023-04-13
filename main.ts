namespace SpriteKind {
    export const question = SpriteKind.create()
    export const question2 = SpriteKind.create()
    export const empoweredPlayer = SpriteKind.create()
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
scene.onOverlapTile(SpriteKind.empoweredPlayer, sprites.dungeon.stairNorth, function (sprite, location) {
    game.showLongText("You may no longer enter", DialogLayout.Center)
    pause(500)
})
function afterPower () {
    tiles.setCurrentTilemap(tilemap`level13`)
    sprites.destroy(_1st_sprrite)
    sprites.destroy(questionbo_x)
    sprites.destroy(questionbox)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.question, function (sprite, otherSprite) {
    game.showLongText("How did you get here?", DialogLayout.Bottom)
    story.showPlayerChoices("I went down the stairs", "Why do you need to know?")
    game.showLongText("Well, you came here at the right time I guess. ", DialogLayout.Bottom)
    game.showLongText("this is a place that you get your super power", DialogLayout.Bottom)
    sprites.destroy(otherSprite)
})
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
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    afterPower()
    earthwizard2()
})
function spriteCreator (mySprite: Sprite) {
    controller.moveSprite(mySprite)
    scene.cameraFollowSprite(mySprite)
    mySprite.setFlag(SpriteFlag.StayInScreen, true)
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
    afterPower()
    firewizard2()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    afterPower()
    icewizard2()
})
let icewizard: Sprite = null
let firewizard: Sprite = null
let earthwizard: Sprite = null
let questionbo_x: Sprite = null
let questionbox: Sprite = null
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
tiles.setCurrentTilemap(tilemap`level13`)
tiles.placeOnRandomTile(_1st_sprrite, sprites.builtin.forestTiles22)
scene.cameraFollowSprite(_1st_sprrite)
controller.moveSprite(_1st_sprrite)
tilemap2 = [tilemap`level1`]
