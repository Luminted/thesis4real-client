import {MaybeNull} from './genericTypes'

export enum CardTypes {
    FRENCH = 'FRENCH'
}

export interface CardTypeConfig {
    baseHeight: number,
    baseWidth: number,
}

export interface FrenchCardConfig extends CardTypeConfig {
    cardRange: any[],
    suits: string[]
}

export enum FrenchCardFaces {
    two = 'two',
    three = 'three',
    four = 'four',
    five = 'five',
    six = 'six',
    seven = 'seven',
    eight = 'eight',
    nine = 'nine',
    ten = 'ten',
    jack = 'jack',
    queen = 'queen',
    king = 'king',
    ace = 'ace',
}

export type CardConfig = FrenchCardConfig;

export interface EntitySyncObject {
    entityId: string,
    positionX: number,
    positionY: number,
    grabLocked: boolean
}

export interface CardEntitySyncObject extends EntitySyncObject {
    faceUp: boolean
}

export interface DeckEntitySyncObject extends EntitySyncObject {
    cards: CardRepresentation[]
}

export interface Entity {
    entityType: EntityTypes,
    entityId: string,
    height:number,
    width: number,
    positionX: number,
    positionY: number,
    grabbedBy: MaybeNull<string>
    zIndex: number
}

export interface CardRepresentation {
    cardType: CardTypes,
    entityId: string,
    face: FrenchCardFaces,
    entityType: EntityTypes.CARD,
    faceUp: boolean,
    ownerDeck: MaybeNull<string>
}

export interface CardEntity extends Entity {
    cardType: CardTypes,
    entityId: string,
    face: FrenchCardFaces,
    entityType: EntityTypes.CARD,
    faceUp: boolean,
    ownerDeck: MaybeNull<string>
}

export interface DeckEntity extends Entity {
    entityType: EntityTypes.DECK
    cards: CardRepresentation[],
    drawIndex: number
}

export enum EntityTypes {
    CARD = 'CARD',
    DECK = 'DECK'
}

export type GrabbedEntity = MaybeNull<{
    entityId: string,
    entityType: EntityTypes
    grabbedAtX: number,
    grabbedAtY: number
}>

export type Client = {
    //TODO: flatten this out
    clientInfo: ClientInfo,
    grabbedEntitiy: GrabbedEntity
}

export type ClientHand = {
    clientId: string,
    cards: CardRepresentation[],
}

export type ClientInfo ={
    clientId: string,
    clientName?: string,
    seatedAt: Seats
}

export enum Seats {
    SOUTH = 'SOUTH',
    NORTH = 'NORTH',
    SOUTH_WEST = 'SOUTH_WEST',
    SOUTH_EAST = 'SOUTH_EAST',
    NORTH_WEST = 'NORTH_WEST',
    NORTH_EAST = 'NORTH_EAST'
} 

export interface GameState {
    cards: CardEntity[],
    decks: DeckEntity[],
    clients: Client[],
    hands: ClientHand[],
    entityScale: number,
    topZIndex: number
}

export type PlayTable = {
    tableId: string,
    clientLimit: number
    gameState: GameState,
}

export type SyncState = {
    updatedCards: CardEntitySyncObject[];
    newCards: CardEntity[];
}

export type SerializedGameState = {
    cards: CardEntity[],
    decks: DeckEntity[],
    clients: Client[],
    hands: ClientHand[],
    entityScale: number
}