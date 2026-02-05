function Paso3 () {
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 0)
    basic.pause(Espera)
}
function Paso2 () {
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    basic.pause(Espera)
}
function Paso4 () {
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 1)
    basic.pause(Espera)
}
function Paso1 () {
    pins.digitalWritePin(DigitalPin.P12, 1)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    basic.pause(Espera)
}
function ACIERTO_B () {
    equipo_B = equipo_B + 1
}
function ACIERTO_A () {
    equipo_A = equipo_A + 1
    for (let index = 0; index < 5; index++) {
        Paso1()
        Paso2()
        Paso3()
        Paso4()
    }
}
let equipo_A = 0
let equipo_B = 0
let Espera = 0
basic.showIcon(IconNames.Heart)
if (pins.digitalReadPin(DigitalPin.P11) == 0 || pins.digitalReadPin(DigitalPin.P5) == 0) {
    basic.showNumber(1)
    if (pins.digitalReadPin(DigitalPin.P4) == 1) {
        ACIERTO_A()
    }
    if (pins.digitalReadPin(DigitalPin.P5) == 1) {
        ACIERTO_B()
    }
}
Espera += 1
