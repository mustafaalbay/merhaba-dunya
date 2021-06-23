/**
 * Merhaba Dünya
 */
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.forever(function () {
    radio.sendValue("name", 0)
})
