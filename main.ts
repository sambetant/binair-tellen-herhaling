let tijd = 1000
basic.forever(function () {
    for (let index = 0; index < 8; index++) {
        led.unplot(4, 0)
        basic.pause(tijd)
        led.plot(4, 0)
        basic.pause(tijd)
    }
})
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        led.unplot(3, 0)
        basic.pause(tijd * 2)
        led.plot(3, 0)
        basic.pause(tijd * 2)
    }
})
basic.forever(function () {
    for (let index = 0; index < 2; index++) {
        led.unplot(2, 0)
        basic.pause(tijd * 4)
        led.plot(2, 0)
        basic.pause(tijd * 4)
    }
})
basic.forever(function () {
    for (let index = 0; index < 1; index++) {
        led.unplot(1, 0)
        basic.pause(tijd * 8)
        led.plot(1, 0)
        basic.pause(tijd * 8)
    }
})
