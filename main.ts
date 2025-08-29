let voltaje = 0
let temperatura = 0
basic.forever(function () {
    voltaje = Math.map(pins.analogReadPin(AnalogPin.P0), 0, 1023, 0, 3300)
    temperatura = voltaje - Math.idiv(500, 10)
    basic.showNumber(temperatura)
})
