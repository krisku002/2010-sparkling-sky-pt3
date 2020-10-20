let col = 0
let row = 0
basic.forever(function () {
    col = randint(0, 10)
    row = randint(0, 10)
    led.setBrightness(randint(0, 255))
    led.toggle(col, row)
    basic.pause(20)
})
