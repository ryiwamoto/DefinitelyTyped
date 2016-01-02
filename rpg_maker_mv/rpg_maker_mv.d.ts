// Type definitions for RPGMAKER_MV 2016-01-02
// Project: https://tkool.jp/mv/
// Definitions: https://github.com/borisyankov/DefinitelyTyped

///<reference path="../pixi.js/pixi.js.d.ts"/>

//=============================================================================
// rpg_core.js
//=============================================================================

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

    initialize();
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

    initialize();
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


//=============================================================================
// rpg_objects.js
//=============================================================================
interface SavefileInfo {
    globalId: number;
    title: string;
    characters: any[];
    faces: any[];
    playtime: string;
    timestamp: number;
}
interface SaveContents {
    system: any;
    screen: any;
    timer: any;
    switches: any;
    variables: any;
    selfSwitches: any;
    actors: any;
    party: any;
    map: any;
    player: any;
}
interface DataManager {
    loadDatabase(): void;
    loadDataFile(name: string, src: string): void;
    isDatabaseLoaded(): boolean;
    loadMapData(mapId: number): void;
    makeEmptyMap(): void;
    isMapLoaded(): boolean;
    onLoad(object: any): void;
    extraceMetadata(data: any): void;
    checkError(): void;
    isBattleTest(): boolean;
    isEventTest(): boolean;
    isSkill(item: any): boolean;
    isItem(item: any): boolean;
    isWeapon(item: any): boolean;
    isArmor(item: any): boolean;
    createGameObjects(): void;
    setupNewGame(): void;
    setupBattleTest(): void;
    setupEventTest(): void;
    loadGlobalInfo(): any[];
    saveGlobalInfo(info: any): void;
    isThisGameFile(savefileId: number): boolean;
    isAnySavefileExists(): boolean;
    latestSavefileId(): number;
    loadAllSavefileImages(): void;
    loadAllSavefileImages(): void;
    maxSavefiles(): number;
    saveGame(savefileId: number): boolean;
    loadGame(savefileId: number): boolean;
    loadSavefileInfo(savefileId: number): any;
    lastAccessedSavefileId(): number;
    saveGameWithoutRescue(savefileId: number): boolean;
    loadGameWithoutRescue(savefileId: number): boolean;
    selectSavefileForNewGame(): number
    makeSavefileInfo(): SavefileInfo;
    makeSaveContents(): SaveContents;
    extraceSaveContents(contents: SaveContents): void;
}

interface Config {
    alwaysDash: boolean;
    commandRemember: boolean;
    bgmVolume: number;
    bgsVolume: number;
    meVolume: number;
    seVolume: number;
}

interface ConfigManager {
    alwaysDash: boolean;
    commandRemember: boolean;
    bgmVolume: number;
    bgsVolume: number;
    meVolume: number;
    seVolume: number;
    load(): void;
    save(): void;
    makeData(): Config;
    applyData(config: Config): void;
    readFlag(config: Config, name: string): boolean;
    readVolume(config: Config, name: string): number;
}
declare var ConfigManager: ConfigManager;

interface StorageManager {
    save(savefileId: number, json: any): void;
    load(savefileId: number): any;
    exists(savefileId: number): boolean;
    remove(savefileId: number): void;
    isLocalMode(): boolean;

    saveToLocalFile(savefileId: number, json: any): void;
    loadFromLocalFile(savefileId: number): any;
    localFileExists(savefileId: number): boolean;
    removeLocalFile(savefileId: number): void;

    saveToWebStorage(savefileId: number, json: any): void;
    loadFromWebStorage(savefileId: number): any;
    WebStorageExists(savefileId: number): boolean;
    removeWebStorage(savefileId: number): void;

    localFileDirectoryPath(): string;
    localFilePath(savefileId: number): string;
    webStorageKey(savefileId: number): string;
}
declare var StorageManager: StorageManager;

interface ImageManager {
    loadAnimation(filename: string, hue: number): Bitmap;
    loadBattleback1(filename: string, hue: number): Bitmap;
    loadBattleback2(filename: string, hue: number): Bitmap;
    loadEnemy(filename: string, hue: number): Bitmap;
    loadCharacter(filename: string, hue: number): Bitmap;
    loadFace(filename: string, hue: number): Bitmap;
    loadParallax(filename: string, hue: number): Bitmap;
    loadPicture(filename: string, hue: number): Bitmap;
    loadSvEnemy(filename: string, hue: number): Bitmap;
    loadSystem(filename: string, hue: number): Bitmap;
    loadTileset(filename: string, hue: number): Bitmap;
    loadTitle1(filename: string, hue: number): Bitmap;
    loadTitle2(filename: string, hue: number): Bitmap;
    loadBitmap(folder: string, filename: string, hue: number, smooth: boolean): Bitmap;
    loadEmptyBitmap(): Bitmap;
    loadNormalBitmap(path: string, hue: number): Bitmap;
    clear(): void;
    isReady(): boolean;
    isObjectCharacter(filename: string): boolean;
    isBigCharacter(filename: string): boolean;
    isZeroParallax(filename: string): boolean;
}
declare var ImageManager: ImageManager;

interface Audio {
    name: string;
    volume: number;
    pitch: number;
    pan?: number;
    pos?: number;
}
interface AudioManager {
    bgmVolume: number;
    bgsVolume: number;
    meVolume: number;
    seVolume: number;

    playBgm(bgm: Audio, pos: number): void;
    replayBgm(bgm: Audio): void;
    isCurrentBgm(bgm: Audio): void;
    updateBgmParameters(bgm: Audio): void;
    updateCurrentBgm(bgm: Audio, pos: number): void;
    stopBgm(): void;
    fadeOutBgm(duration: number): void;
    fadeInBgm(duration: number): void;

    playBgs(bgs: Audio, pos: number): void;
    replayBgs(bgs: Audio): void;
    isCurrentBgs(bgs: Audio): boolean;
    updateBgsParameters(bgs: Audio): boolean;
    updateCurrentBgs(bgs: Audio, pos: number): void;
    stopBgs(): void;
    fadeOutBgs(duration: number): void;
    fadeInBgs(duration: number): void;

    playMe(me: Audio): void;
    updateMeParameters(me: Audio): boolean;
    fadeOutMe(duration: number): void;
    stopMe(): void;

    playSe(se: Audio): void;
    updateSeParameters(se: Audio): boolean;
    stopSe(): void;

    playStaticSe(se: Audio): void;
    loadStaticSe(se: Audio): void;
    isStaticSe(se: Audio): boolean;

    stopAll(): void;

    saveBgm(): Audio;
    saveBgs(): Audio;
    makeEmptyAudioObject(): Audio;

    createBuffer(folder: string, name: string): Html5Audio | WebAudio;
    updateBufferParameters(buffer: Html5Audio | WebAudio, configVolume: number, audio: Audio): void;
    audioFileExt(): string;
    shouldUseHtml5Audio(): boolean;
    checkErrors(): boolean;
    checkWebAudioError(): void;
}
declare var AudioManager: AudioManager;

interface SoundManager {
    preloadImportantSounds(): void;
    loadSystemSound(): void;
    playSystemSound(): void;
    playCursor(): void;
    playOk(): void;
    playCancel(): void;
    playBuzzer(): void;
    playEquip(): void;
    playSave(): void;
    playLoad(): void;
    playBattleStart(): void;
    playEscape(): void;
    playEnemyAttack(): void;
    playEnemyDamage(): void;
    playEnemyCollapse1(): void;
    playEnemyCollapse2(): void;
    playActorDamage(): void;
    playActorCollapse(): void;
    playRecovery(): void;
    playMiss(): void;
    playEvasion(): void;
    playRefrelection(): void;
    playShop(): void;
    playUseItem(): void;
    playUseSkill(): void;
}
declare var SoundManager: SoundManager;

interface TextManager {
    basic(basicId: string): string;
    param(paramId: string): string;
    command(commandId: string): string;
    message(messageId: string): string;
    getter(method: string, param: string): string;
    basic(basicId: string): string;
    currencyUnit: string;
    level: string;
    levelA: string;
    hp: string;
    hpA: string;
    mp: string;
    mpA: string;
    tp: string;
    tpA: string;
    exp: string;
    expA: string;
    fight: string;
    escape: string;
    attack: string;
    guard: string;
    item: string;
    skill: string;
    equip: string;
    status: string;
    formation: string;
    save: string;
    gameEnd: string;
    options: string;
    weapon: string;
    armor: string;
    keyItem: string;
    equip2: string;
    optimize: string;
    clear: string;
    newGame: string;
    continue_: string;
    toTitle: string;
    cancel: string;
    buy: string;
    sell: string;
    alwaysDash: string;
    commandRemember: string;
    bgmVolume: string;
    bgsVolume: string;
    meVolume: string;
    seVolume: string;
    possession: string;
    expTotal: string;
    expNext: string;
    saveMessage: string;
    loadMessage: string;
    file: string;
    partyName: string;
    emerge: string;
    preemptive: string;
    surprise: string;
    escapeStart: string;
    escapeFailure: string;
    victory: string;
    defeat: string;
    obtainExp: string;
    obtainGold: string;
    obtainItem: string;
    levelUp: string;
    obtainSkill: string;
    useItem: string;
    criticalToEnemy: string;
    criticalToActor: string;
    actorDamage: string;
    actorRecovery: string;
    actorGain: string;
    actorLoss: string;
    actorDrain: string;
    actorNoDamage: string;
    actorNoHit: string;
    enemyDamage: string;
    enemyRecovery: string;
    enemyGain: string;
    enemyLoss: string;
    enemyDrain: string;
    enemyNoDamage: string;
    enemyNoHit: string;
    evasion: string;
    magicEvasion: string;
    magicReflection: string;
    counterAttack: string;
    substitute: string;
    buffAdd: string;
    debuffAdd: string;
    buffRemove: string;
    actionFailure: string;
}
declare var TextManager: TextManager;

interface Scene extends PIXI.Stage {
    start(): void;
    stop(): void;
    update(): void;
}

type SceneClass = { new (): Scene };

interface SceneManager {
    run(sceneClass: SceneClass): void;
    initGraphics(): void;
    preferableRendererType(): string;
    shouldUseCanvasRenderer(): boolean;
    checkWebGL(): void;
    checkFileAccess(): void;
    initAudio(): void;
    initInput(): void;
    initNwjs(): void;
    checkPluginErrors(): void;
    setupErrorHandlers(): void;
    requestUpdate(): void;
    update(): void;
    terminate(): void;
    onError(e: Error): void;
    onkeydown(event: KeyboardEvent): void;
    catchException(e: Error): void;
    tickStart(): void;
    tickEnd(): void;
    updateInputData(): void;
    updateMain(): void;
    changeScene(): void;
    updateScene(): void;
    renderScene(): void;
    onSceneCreate(): void;
    onSceneStart(): void;
    onSceneLoading(): void;
    isSceneChanging(): boolean;
    isCurrentSceneBusy(): boolean;
    isCurrentSceneStarted(): boolean;
    isNextScene(sceneClass: SceneClass): boolean;
    isPreviousScene(sceneClass: SceneClass): boolean;
    goto(sceneClass: SceneClass): void;
    push(sceneClass: SceneClass): void;
    pop(sceneClass: SceneClass): void;
    exit(): void;
    clearStack(): void;
    stop(): void;
    prepareNextScene(): void;
    snap(): void;
    snapForBackground(): void;
    backgroundBitmap(): Bitmap;
}
declare var SceneManager: SceneManager;

interface BattleManager {
    setup(troopId: number, canEscape: boolean, canLose: boolean): void;
    initMembers(): void;
    isBattleTest(): boolean;
    setBattleTest(battleTest: any/*TODO*/): void;
    setEventCallback(callback: Function): void;
    setLogWindow(logWindow: any): void;
    setStatusWindow(statusWindow: any): void;
    setSpriteset(spriteset: any): void;
    onEncounter(): void;
    ratePreemptive(): number;
    rateSurprise(): number;
    saveBgmAndBgs(): void;
    playBattleBgm(): void;
    playVictoryMe(): void;
    playDefeatMe(): void;
    replayBgmAndBgs(): void;
    makeEscapeRatio(): number;
    update(): void;
    updateEvent(): void;
    updateEventMain(): boolean;
    isBusy(): boolean;
    isInputting(): boolean;
    isInTurn(): boolean;
    isTurnEnd(): boolean;
    isAborting(): boolean;
    isBattleEnd(): boolean;
    canEscape(): boolean;
    canLose(): boolean;
    isEscaped(): boolean;
    actor(): boolean;
    cleanActor(): boolean;
    changeActor(newActorIndex: number, lastActorState: any): void;
    startBattle(): void;
    displayStartMessages(): void;
    startInput(): void;
    inputtingAction(): any;/*TODO*/
    selectNextCommand(): void;
    selectPreviousCommand(): void;
    refreshStatus(): void;
    startTurn(): void;
    updateTurn(): void;
    processTurn(): void;
    endTurn(): void;
    updateTurnEnd(): void;
    getNextSubject(): void;
    allBattleMembers(): any[]/*TODO*/;
    makeActionOrders(): void;
    startAction(): void;
    updateAction(): void;
    endAction(): void;
    invokeAction(): void;
    invokeNormalAction(): void;
    invokeCounterAttack(): void;
    invokeMagicReflection(): void;
    applySubstitute(target: any): any;/*TODO*/
    checkSubstitute(target: any): boolean;
    isActionForced(): boolean;
    forceAction(battler: any): void;
    processForcedAction(): void;
    abort(): void;
    checkBattleEnd(): boolean;
    checkAbort(): boolean;
    processVictory(): void;
    processEscape(): boolean;
    processAbort(): void;
    processDefeat(): void;
    endBattle(): void;
    updateBattleEnd(): void;
    makeRewards(): void;
    displayVictoryMessage(): void;
    displayDefeatMessage(): void;
    displayEscapeSuccessMessage(): void;
    displayEscapeFailureMessage(): void;
    displayRewards(): void;
    displayExp(): void;
    displayGold(): void;
    displayDropItems(): void;
    gainRewards(): void;
    gainExp(): void;
    gainGold(): void;
    gainDropItems(): void;
}
declare var BattleManager: BattleManager;

interface PluginManager {
    setup(plugins: any[]/*TODO*/): void;
    checkErrors(): void;
    parameters(name: string): any;
    setParameters(name: string, parameters: any): void;
    loadScript(name: string): void;
    onError(e: Error): void;
}
declare var PluginManager: PluginManager;


//=============================================================================
// rpg_objects.js
//=============================================================================

declare class Game_Temp {
    isPlayTest(): boolean;
    reserveCommonEvent(commonEventId: number): void;
    isCommonEventReserved(): boolean;
}
