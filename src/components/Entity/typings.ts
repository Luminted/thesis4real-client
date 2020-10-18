import { ReactNode } from "react";
import { EntityTypes } from "../../types/dataModelDefinitions";

export interface IProps {
    entityId: string
    entityType: EntityTypes
    positionX: number
    positionY: number
    width: number,
    height: number,
    rotation: number
    rotationStep: number
    clickPassThrough: boolean
    graphicalContent: ReactNode
    isMirrored: boolean
    zIndex?: number
    menuContent?: ReactNode
    eventHandlers?: {[key in string]: Function}
}