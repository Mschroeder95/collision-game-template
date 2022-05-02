import { Application, IApplicationOptions } from "pixi.js";
import { AssetLoader } from "./asset-loader";

export const assetLoader = new AssetLoader();
export const sampleRate = 10;
export class Game {
    static pixiApp: Application | undefined;
    static running: boolean = false;
    static height: number;
    static width: number

    private constructor() {

    }

    static run(height:number, width:number, parentElement: HTMLElement) {
        if(!this.running) {                    
            this.running = true;
            assetLoader.loadAssets().then(
                () => {
                    Game.initApp(height, width, parentElement);
                    // Game logic goes here

                })
        }
    }

    private static initApp(height: number, width: number, parentElement: HTMLElement) {
        Game.height = height;
        Game.width = width;
        let options: IApplicationOptions = {};
        options.height = Game.height;
        options.width = Game.width;
        this.pixiApp = new Application(options);
        parentElement.appendChild(this.pixiApp.view);
    }
}