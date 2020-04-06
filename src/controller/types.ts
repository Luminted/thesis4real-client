export enum WhichButton {
    LEFT = 1,
    MIDDLE = 2,
    RIGHT = 3
}

export enum ListenedDragEventTypes {
    ON_DRAG_START = 'dragstart',
}

export enum ListenedMouseEventTypes {
    MOUSE_DOWN = 'mousedown',
    MOUSE_UP = 'mouseup',
    MOUSE_MOVE = 'mousemove'
}

export enum MouseInputTypes {
    LEFT_BUTTON_DOWN= 'LEFT_BUTTON_DOWN',
    CTRL_LEFT_BUTTON_DOWN= 'CTRL_LEFT_BUTTON_DOWN',
    SHFT_LEFT_BUTTON_DOWN = 'SHFT_LEFT_BUTTON_DOWN',

    LEFT_BUTTON_UP= 'LEFT_BUTTON_UP',
    CTRL_LEFT_BUTTON_UP = 'CTRL_LEFT_BUTTON_UP',
    SHFT_LEFT_BUTTON_UP = 'SHFT_LEFT_BUTTON_UP',

    MIDDLE_BUTTON_DOWN = 'MIDDLE_BUTTON_DOWN',
    CTRL_MIDDLE_BUTTON_DOWN = 'CTRL_MIDDLE_BUTTON_DOWN',
    SHFT_MIDDLE_BUTTON_DOWN = 'SHFT_MIDDLE_BUTTON_DOWN',

    MIDDLE_BUTTON_UP = 'MIDDLE_BUTTON_UP',
    CTRL_MIDDLE_BUTTON_UP = 'CTRL_MIDDLE_BUTTON_UP',
    SHFT_MIDDLE_BUTTON_UP = 'SHFT_MIDDLE_BUTTON_UP',

    RIGHT_BUTTON_DOWN = 'RIGHT_BUTTON_DOWN',
    CTRL_RIGHT_BUTTON_DOWN = 'CTRL_RIGHT_BUTTON_DOWN',
    SHFT_RIGHT_BUTTON_DOWN = 'SHFT_RIGHT_BUTTON_DOWN',

    RIGHT_BUTTON_UP = 'RIGHT_BUTTON_UP',
    CTRL_RIGHT_BUTTON_UP = 'CTRL_RIGHT_BUTTON_UP',
    SHFT_RIGHT_BUTTON_UP = 'SHFT_RIGHT_BUTTON_UP',

    DRAG_START = 'DRAG_START',
    CTRL_DRAG_START = 'CTRL_DRAG_START',
    SHFT_DRAG_START = 'SHFT_DRAG_START',


    MOUSE_MOVE= 'MOUSE_MOVE',

    UNKNOWN_INPUT= 'UNKOWN_INPUT'
}