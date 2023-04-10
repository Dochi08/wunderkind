namespace SpriteKind {
    export const question = SpriteKind.create()
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
    questionbox.setPosition(84, 75)
    tiles.setCurrentTilemap(tilemap2[0])
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairSouth)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.question, function (sprite, otherSprite) {
    game.showLongText("How did you get here?", DialogLayout.Bottom)
    story.showPlayerChoices("I went down the stairs", "Why do you need to know?")
    if (story.checkLastAnswer("I went down the stairs")) {
        game.showLongText("Well you came here at the right timing I guess. ", DialogLayout.Bottom)
        game.showLongText("this is a place that you get you super power", DialogLayout.Bottom)
    } else if (story.checkLastAnswer("Why do you need to know?")) {
    	
    } else {
    	
    }
})
function iceWizard2 () {
    iceWizard = sprites.create(img`
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
        `, SpriteKind.Player)
}
function earthWizard () {
    iceWizard = sprites.create(img`
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
        `, SpriteKind.Player)
}
function fireWizard () {
    iceWizard = sprites.create(img`
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
        `, SpriteKind.Player)
}
let iceWizard: Sprite = null
let questionbox: Sprite = null
let tilemap2: tiles.TileMapData[] = []
let mySprite: Sprite = null
mySprite = sprites.create(img`
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
tiles.placeOnRandomTile(mySprite, sprites.builtin.forestTiles22)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite)
tilemap2 = [tilemap`level1`]
