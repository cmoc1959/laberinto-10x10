namespace SpriteKind {
    export const Premio = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Premio, function (sprite, otherSprite) {
    music.powerUp.play()
    game.setDialogTextColor(9)
    game.setDialogCursor(img`
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 9 9 9 6 6 9 9 9 9 6 6 9 9 9 6 
        6 9 9 6 6 9 9 c c 9 9 6 6 9 9 6 
        6 9 6 6 9 9 c c 6 9 9 9 6 6 9 6 
        6 6 6 9 9 9 9 c 6 6 9 9 9 6 6 6 
        6 6 9 9 9 9 9 9 6 6 9 9 9 9 6 6 
        6 9 9 9 6 6 6 6 9 6 9 9 c 9 9 6 
        6 9 c 6 6 6 9 9 9 6 9 c c c 9 6 
        6 9 c c c 9 6 9 9 9 6 6 6 c 9 6 
        6 9 9 c 9 9 6 9 6 6 6 6 9 9 9 6 
        6 6 9 9 9 9 6 6 9 9 9 9 9 9 6 6 
        6 6 6 9 9 9 6 6 c 9 9 9 9 6 6 6 
        6 9 6 6 9 9 9 6 c c 9 9 6 6 9 6 
        6 9 9 6 6 9 9 c c 9 9 6 6 9 9 6 
        6 9 9 9 6 6 9 9 9 9 6 6 9 9 9 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        `)
    game.setDialogFrame(img`
        2 2 f 2 2 2 2 2 2 2 2 2 f 2 2 
        2 f f f f f f f f f f f f f 2 
        f f 1 1 1 1 1 1 1 1 1 1 1 f f 
        2 f 1 f f f f f f f f f 1 f 2 
        2 f 1 f f f f f f f f f 1 f 2 
        2 f 1 f f f f f f f f f 1 f 2 
        2 f 1 f f f f f f f f f 1 f 2 
        2 f 1 f f f f f f f f f 1 f 2 
        2 f 1 f f f f f f f f f 1 f 2 
        2 f 1 f f f f f f f f f 1 f 2 
        2 f 1 f f f f f f f f f 1 f 2 
        2 f 1 f f f f f f f f f 1 f 2 
        f f 1 1 1 1 1 1 1 1 1 1 1 f f 
        2 f f f f f f f f f f f f f 2 
        2 2 f 2 2 2 2 2 2 2 2 2 f 2 2 
        `)
    game.showLongText("tiempo empleado: " + Math.round(game.runtime() / 1000) + " seg", DialogLayout.Bottom)
})
function Fondos () {
    color = randint(1, 16)
    if (color == 1) {
        scene.setBackgroundColor(0)
    } else if (color == 2) {
        scene.setBackgroundColor(1)
    } else if (color == 3) {
        scene.setBackgroundColor(2)
    } else if (color == 4) {
        scene.setBackgroundColor(3)
    } else if (color == 5) {
        scene.setBackgroundColor(4)
    } else if (color == 6) {
        scene.setBackgroundColor(5)
    } else if (color == 7) {
        scene.setBackgroundColor(6)
    } else if (color == 8) {
        scene.setBackgroundColor(7)
    } else if (color == 9) {
        scene.setBackgroundColor(8)
    } else if (color == 10) {
        scene.setBackgroundColor(9)
    } else if (color == 11) {
        scene.setBackgroundColor(10)
    } else if (color == 12) {
        scene.setBackgroundColor(11)
    } else if (color == 13) {
        scene.setBackgroundColor(12)
    } else if (color == 14) {
        scene.setBackgroundColor(13)
    } else if (color == 15) {
        scene.setBackgroundColor(14)
    } else if (color == 16) {
        scene.setBackgroundColor(15)
    }
}
let color = 0
game.splash("Laberinto 10x10", "Autor: Claudio Orts")
let yo = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 6 6 6 6 . . . . . . 
    . . . . 6 6 6 5 5 6 6 6 . . . . 
    . . . 7 7 7 7 6 6 6 6 6 6 . . . 
    . . 6 7 7 7 7 8 8 8 1 1 6 6 . . 
    . . 7 7 7 7 7 8 8 8 1 1 5 6 . . 
    . 6 7 7 7 7 8 8 8 8 8 5 5 6 6 . 
    . 6 7 7 7 8 8 8 6 6 6 6 5 6 6 . 
    . 6 6 7 7 8 8 6 6 6 6 6 6 6 6 . 
    . 6 8 7 7 8 8 6 6 6 6 6 6 6 6 . 
    . . 6 8 7 7 8 6 6 6 6 6 8 6 . . 
    . . 6 8 8 7 8 8 6 6 6 8 6 6 . . 
    . . . 6 8 8 8 8 8 8 8 8 6 . . . 
    . . . . 6 6 8 8 8 8 6 6 . . . . 
    . . . . . . 6 6 6 6 . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
yo.setPosition(24, 24)
controller.moveSprite(yo)
scene.cameraFollowSprite(yo)
let meta = sprites.create(img`
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 9 9 9 6 6 9 9 9 9 6 6 9 9 9 6 
    6 9 9 6 6 9 9 c c 9 9 6 6 9 9 6 
    6 9 6 6 9 9 c c 6 9 9 9 6 6 9 6 
    6 6 6 9 9 9 9 c 6 6 9 9 9 6 6 6 
    6 6 9 9 9 9 9 9 6 6 9 9 9 9 6 6 
    6 9 9 9 6 6 6 6 9 6 9 9 c 9 9 6 
    6 9 c 6 6 6 9 9 9 6 9 c c c 9 6 
    6 9 c c c 9 6 9 9 9 6 6 6 c 9 6 
    6 9 9 c 9 9 6 9 6 6 6 6 9 9 9 6 
    6 6 9 9 9 9 6 6 9 9 9 9 9 9 6 6 
    6 6 6 9 9 9 6 6 c 9 9 9 9 6 6 6 
    6 9 6 6 9 9 9 6 c c 9 9 6 6 9 6 
    6 9 9 6 6 9 9 c c 9 9 6 6 9 9 6 
    6 9 9 9 6 6 9 9 9 9 6 6 9 9 9 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    `, SpriteKind.Premio)
meta.setPosition(312, 312)
Fondos()
tiles.setTilemap(tiles.createTilemap(hex`150015000101010101010101010101010101010101010101010102000805070005050700080505050505070002010102000200020000000200020000000000020002010104050600030505050900030505050700040506010102000000000000000200000000000200020000010103050505070005050a050505050506000305070101000000000200000000000000000000000000020101020008050a0507000805070008050505050506010102000200000002000200020002000000000000010102000305070002000200020002000805050507010102000000020002000200020000000200000002010104050505060003050600030507000305070002010102000000000000000000000002000000020002010103050505070002000805050003050700020002010100000000020002000200000000000200020002010108050505060003050a05070002000305060002010102000000000000000000020002000000000000010104050b050500080507000405060008050505070101020002000000020002000200000002000000020101020003050505060003050a050505060005050601010101010101010101010101010101010101010101`, img`
    222222222222222222222
    2.2...2...2.......2.2
    2.2.2.222.2.22222.2.2
    2...2.....2.....2...2
    2.2222222.22222.2.222
    2.....2.........2...2
    22222.2222222222222.2
    2.2.....2...2.......2
    2.2.222.2.2.2.2222222
    2.2...2.2.2.2.2.....2
    2.222.2.2.2.222.222.2
    2.....2...2...2...2.2
    2.22222222222.222.2.2
    2.....2.2...2...2.2.2
    22222.2.2.22222.2.2.2
    2.....2.....2.2...2.2
    2.222222222.2.2222222
    2.....2...2...2.....2
    2.2.222.2.2.222.222.2
    2.2.....2.......2...2
    222222222222222222222
    `, [myTiles.transparency16,sprites.castle.tileDarkGrass2,sprites.vehicle.roadVertical,sprites.vehicle.roadTurn3,sprites.vehicle.roadIntersection2,sprites.vehicle.roadHorizontal,sprites.vehicle.roadTurn4,sprites.vehicle.roadTurn2,sprites.vehicle.roadTurn1,sprites.vehicle.roadIntersection4,sprites.vehicle.roadIntersection1,sprites.vehicle.roadIntersection3], TileScale.Sixteen))
