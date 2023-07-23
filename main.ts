serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    if (serial.readLine() == "Micro Bit connected") {
        basic.showIcon(IconNames.StickFigure)
        texte = 0
    } else {
        basic.showString(serial.readLine())
    }
})
input.onButtonPressed(Button.A, function () {
    if (texte < 5) {
        texte += 1
    } else {
        texte = 0
    }
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
    serial.writeLine("" + (texte))
})
let texte = 0
basic.showIcon(IconNames.House)
texte = 0
basic.forever(function () {
    if (texte == 1) {
        basic.showIcon(IconNames.Scissors)
    } else {
        if (texte == 2) {
            basic.showIcon(IconNames.Chessboard)
        } else {
            if (texte == 3) {
                basic.showIcon(IconNames.Rabbit)
            } else {
                if (texte == 4) {
                    basic.showIcon(IconNames.No)
                } else {
                	
                }
            }
        }
    }
})
