// Type definitions for RPGMAKER_MV 2016-01-02
// Project: https://tkool.jp/mv/
// Definitions: https://github.com/borisyankov/DefinitelyTyped

///<reference path="../pixi.js/pixi.js.d.ts"/>

interface Util {
    RPGMAKER_NAME: string;
    isOptionValid(name: string): boolean;
    isNwjs(): boolean;
    isMobileDevice(): boolean;
    isMobileSafari(): boolean;
    isAndroidChrome(): boolean;
    canReadGameFiles(): boolean;
    rgbToCssColor(): boolean;
}
declare var Util: Util;

declare class Point extends PIXI.Point {
}

declare class Rectangle extends PIXI.Rectangle {
    static emptyRectangle: Rectangle;
}

declare class Bitmap {
    static load(url: string): Bitmap;
    static snap(stage: Stage): Bitmap;

    fontFace: string;
    fontSize: number;
    fontItalic: boolean;
    textColor: string;
    outlineColor: string;
    outlineWidth: number;
    url: string;
    baseTexture: PIXI.BaseTexture;
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
    width: number;
    height: number;
    rect: Rectangle;
    smooth: boolean;
    paintOpacity: number;

    isReady(): boolean;
    isError(): boolean;
    resize(width: number, height: number): void;
    blt(source: Bitmap, sx: number, sy: number, sw: number, sh: number, dx: number, dy: number, dw?: number, dh?: number): void;
    getPixel(x: number, y: number): string;
    getAlphaPixel(x: number, y: number): string;
    clearRect(x: number, y: number, width: number, height: number): void;
    clear(): void;
    fillRect(x: number, y: number, width: number, height: number, color: string): string;
    fillAll(color: string): void;
    gradientFillRect(x: number, y: number, width: number, height: number, color1: string, color2: string, vertical: boolean): void;
    drawCircle(x: number, y: number, radius: number, color: string): void;
    drawText(text: string, x: number, y: number, maxWidth: number, lineHeight: number, align: string): void;
    measureTextWidth(text: string): number;
    adjustTone(r: number, g: number, b: number): void;
    rotateHue(offset: number): void;
    blur(): void;
    addLoadListener(listener: Function): void;
}

interface Graphics {
    frameCount: number;
    BLEND_NORMAL: string
    BLEND_ADD: number;
    BLEND_MULTIPLY: number;
    BLEND_SCREEN: number;

    width: number;
    height: number;
    boxWidth: number;
    boxHeight: number;
    scale: number;

    tickStart(): void;
    tickEnd(): void;
    render(stage: Stage): void;
    isWebGL(): boolean;
    hasWebGL(): boolean;
    canUseDifferenceBlend(): boolean;
    canUseSaturationBlend(): boolean;
    setLoadingImage(): void;
    startLoading(): void;
    updateLoading(): void;
    endLoading(): void;
    printError(name: string, message: string): void;
    showFps(): void;
    hideFps(): void;
    loadFont(name: string, url: string): void;
    isFontLoaded(name: string): boolean;
    playVideo(src: string): void;
    isVideoPlaying(): boolean;
    canPlayVideoType(type: string): boolean;
    pageToCanvasX(x: number): number;
    pageToCanvasY(y: number): number;
    isInsideCanvas(x: number, y: number): boolean;
}
declare var Graphics: Graphics;

interface Input {
    keyRepeatWait: number;
    keyRepeatInterval: number;
    keyMapper: { [virtualKeyCode: string]: string };
    gamepadMapper: { [gamepadButton: string]: string };
    dir4: number;
    dir8: number;
    date: number;

    clear(): void;
    update(): void;
    isPressed(keyName: string): boolean;
    isTriggered(keyName: string): boolean;
    isRepeated(keyName: string): boolean;
    isLongPressed(keyName: string): boolean;
}
declare var Intput: Input;

interface TouchInput {
    keyRepeatWait: number;
    keyRepeatInterval: number;

    wheelX: number;
    wheelY: number;
    x: number;
    y: number;
    date: number;

    clear(): void;
    update(): void;
    isPressed(keyName: string): boolean;
    isTriggered(keyName: string): boolean;
    isRepeated(keyName: string): boolean;
    isLongPressed(keyName: string): boolean;
    isCancelled(): boolean;
    isMoved(): boolean;
    isReleased(): boolean;
}
declare var TouchInput: TouchInput;

declare class Sprite {
    bitmap: Bitmap;
    width: number;
    height: number;
    opacity: number;

    update(): void;
    move(x: number, y: number): void;
    setFrame(x: number, y: number, width: number, height: number): void;
    getBlendColor(): [number, number, number, number];
    setBlendColor(color: [number, number, number, number]): void;
    getColorTone(): [number, number, number, number];
    setColorTone(tone: [number, number, number, number]): void;
}

declare class Tilemap {
    static TILE_ID_B: number;
    static TILE_ID_C: number;
    static TILE_ID_D: number;
    static TILE_ID_E: number;
    static TILE_ID_A5: number;
    static TILE_ID_A1: number;
    static TILE_ID_A2: number;
    static TILE_ID_A3: number;
    static TILE_ID_A4: number;
    static TILE_ID_MAX: number;
    static FLOOR_AUTOTILE_TABLE: [number, number][][];
    static WALL_AUTOTILE_TABLE: [number, number][][];
    static WATERFALL_AUTOTILE_TABLE: [number, number][][];

    static isVisibleTile(tileId: number): boolean;
    static isAutotile(tileId: number): boolean;
    static getAutotileKind(tileId: number): boolean;
    static getAutotileShape(tileId: number): boolean;
    static makeAutotileId(tileId: number, shape: number): boolean;
    static isSameKindTile(tileID1: number, tileID2: number): boolean;

    static isTileA1(tileId: number): boolean;
    static isTileA2(tileId: number): boolean;
    static isTileA3(tileId: number): boolean;
    static isTileA4(tileId: number): boolean;
    static isTileA5(tileId: number): boolean;
    static isWaterTile(tileId: number): boolean;
    static isWaterfallTile(tileId: number): boolean;
    static isGroundTile(tileId: number): boolean;
    static isShadowingTile(tileId: number): boolean;
    static isRoofTile(tileId: number): boolean;
    static isWallTopTile(tileId: number): boolean;
    static isWallSideTile(tileId: number): boolean;
    static isWallTile(tileId: number): boolean;
    static isFloorTypeAutotile(tileId: number): boolean;
    static isWallTypeAutotile(tileId: number): boolean;
    static isWaterfallTypeAutotile(tileId: number): boolean;

    bitmaps: Bitmap[];
    original: Point;
    flags: any[]; //TODO
    animationCount: number;
    horizontalWrap: boolean;
    verticalWrap: boolean;
    width: number;
    height: number;
    tileWidth: number;
    tileHeight: number;

    setData(width: number, height: number, data: any[]/*TODO*/): void;
    isReady(): boolean;
    update(): void;
    refresh(): void;
}

declare class TilingSprite {
    bitmap: Bitmap;
    opacity: number;
    origin: Point;
    update(): void;
    move(x: number, y: number, width: number, height: number): void;
    setFrame(x: number, y: number, width: number, height: number): void;
}

declare class ScreenSprite {
    opacity: number;
    setBlack(): void;
    setWhite(): void;
    setColor(r: number, g: number, b: number): void;
}

/**
 * Avoid name confliction with lib.d.ts
 */
declare interface RM_Window extends PIXI.DisplayObjectContainer {
    origin: Point;
    active: boolean;
    downArrowVisible: boolean;
    upArrowVisible: boolean;
    pause: boolean;

    windowskin: Bitmap;
    contents: Bitmap;
    width: number;
    height: number;
    padding: number;
    margin: number;
    opacity: number;
    backOpacity: number;
    contentsOpacity: number;
    openness: number;

    update(): void;
    move(x: number, y: number, width: number, height: number): void;
    isOpen(): boolean;
    isClosed(): boolean;
    setCursorRect(x: number, y: number, width: number, height: number): void;
    setTone(r: number, g: number, b: number): void;
    addChildToBack(child: PIXI.DisplayObject): PIXI.DisplayObject;
}

declare class WindowLayer extends PIXI.DisplayObjectContainer {
    width: number;
    height: number;
    move(x: number, y: number, width: number, height: number): void;
    update(): void;
}

declare class Weather extends PIXI.DisplayObjectContainer {
    type: string;
    power: number;
    origin: Point;
    update(): void;
}

declare class ToneFilter extends PIXI.AbstractFilter {
    uniforms: any;
    fragmentSrc: string[];
    reset(): void;
    adjustHue(): void;
    adjustSaturation(value: number): void;
    adjustTone(r: number, g: number, b: number): void;
}

declare class ToneSprite {
    clear(): void;
    setTone(r: number, g: number, b: number, gray: number): void;
}

declare class Stage extends PIXI.Stage {
}

declare class WebAudio {
    url: string;
    volume: number;
    pitch: number;
    pan: number;
    isReady(): boolean;
    isError(): boolean;
    isPlaying(): boolean;
    play(loop: boolean, offset: number): void;
    stop(): void;
    fadeIn(duration: number): void;
    fadeOut(duration: number): void;
    seek(): number;
    addLoadListener(listener: Function): void;
    addStopListener(listener: Function): void;
    canPlayOgg(): boolean;
    canPlayM4a(): boolean;
    clear(): void;
}

interface Html5Audio {
    setup(url: string): void;
    clear(): void;
    setStaticSe(url: string): void;
    url: string;
    volume: number;
    isReady(): boolean;
    isError(): boolean;
    play(loop: boolean, offset: number): void;
    stop(): void;
    fadeIn(duration: number): void;
    fadeOut(duration: number): void;
    seek(): number;
    addLoadListener(listener: Function): void;
}
declare var Html5Audio;

interface JsonEx {
    maxDepth: number;
    stringify(object: any): string;
    parse(json: string): any;
}
declare var JsonEX: JsonEx;
