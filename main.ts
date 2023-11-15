radio.setGroup(1)
joystickbit.initJoystickBit()
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    if (joystickbit.getRockerValue(joystickbit.rockerType.X) <= 540) {
        radio.sendValue("left", pins.map(
        joystickbit.getRockerValue(joystickbit.rockerType.X),
        530,
        1023,
        0,
        100
        ))
    } else if (joystickbit.getRockerValue(joystickbit.rockerType.X) >= 520) {
        radio.sendValue("right", pins.map(
        joystickbit.getRockerValue(joystickbit.rockerType.X),
        0,
        530,
        0,
        100
        ))
    }
    if (joystickbit.getRockerValue(joystickbit.rockerType.Y) >= 540) {
        radio.sendValue("go", pins.map(
        joystickbit.getRockerValue(joystickbit.rockerType.Y),
        530,
        1023,
        0,
        200
        ))
    } else if (joystickbit.getRockerValue(joystickbit.rockerType.Y) <= 520) {
        radio.sendValue("back", pins.map(
        joystickbit.getRockerValue(joystickbit.rockerType.Y),
        1,
        500,
        0,
        200
        ))
    }
})
