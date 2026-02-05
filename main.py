def Paso3():
    pins.digital_write_pin(DigitalPin.P12, 0)
    pins.digital_write_pin(DigitalPin.P2, 0)
    pins.digital_write_pin(DigitalPin.P13, 1)
    pins.digital_write_pin(DigitalPin.P14, 0)
    basic.pause(Espera)
def Paso2():
    pins.digital_write_pin(DigitalPin.P12, 0)
    pins.digital_write_pin(DigitalPin.P2, 1)
    pins.digital_write_pin(DigitalPin.P13, 0)
    pins.digital_write_pin(DigitalPin.P14, 0)
    basic.pause(Espera)
def Paso4():
    pins.digital_write_pin(DigitalPin.P12, 0)
    pins.digital_write_pin(DigitalPin.P2, 0)
    pins.digital_write_pin(DigitalPin.P13, 0)
    pins.digital_write_pin(DigitalPin.P14, 1)
    basic.pause(Espera)
def Paso1():
    pins.digital_write_pin(DigitalPin.P12, 1)
    pins.digital_write_pin(DigitalPin.P2, 0)
    pins.digital_write_pin(DigitalPin.P13, 0)
    pins.digital_write_pin(DigitalPin.P14, 0)
    basic.pause(Espera)
def ACIERTO_B():
    global equipo_B
    equipo_B = equipo_B + 1
def ACIERTO_A():
    global equipo_A
    equipo_A = equipo_A + 1
    for index in range(5):
        Paso1()
        Paso2()
        Paso3()
        Paso4()
equipo_A = 0
equipo_B = 0
Espera = 0
basic.show_icon(IconNames.HAPPY)
if pins.digital_read_pin(DigitalPin.P11) == 0 or pins.digital_read_pin(DigitalPin.P5) == 0:
    basic.show_number(1)
    if pins.digital_read_pin(DigitalPin.P4) == 1:
        ACIERTO_A()
    if pins.digital_read_pin(DigitalPin.P5) == 1:
        ACIERTO_B()
Espera += 1