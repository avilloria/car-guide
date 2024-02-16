function recto () {
    wuKong.setAllMotor(-100, -100)
}
function derecha () {
    wuKong.setAllMotor(0, -80)
}
function izquierda () {
    wuKong.setAllMotor(-80, 0)
}
basic.showIcon(IconNames.Yes)
pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
pins.setPull(DigitalPin.P2, PinPullMode.PullUp)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P2) == 0) {
        recto()
    }
    if (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P2) == 1) {
        derecha()
    }
    if (pins.digitalReadPin(DigitalPin.P1) == 1 && pins.digitalReadPin(DigitalPin.P2) == 0) {
        izquierda()
    }
})
