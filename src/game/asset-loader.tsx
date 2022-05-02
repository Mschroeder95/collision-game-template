import { Dict } from "@pixi/utils";
import { Loader, LoaderResource } from "pixi.js";

export class AssetLoader extends Loader {
    resources: Dict<LoaderResource> = {}

    constructor() {
        super();
        let public_dir = process.env.PUBLIC_URL;

        //this.add('example', `${public_dir}/assets/example.png`)
    }

    loadAssets(): Promise<any> {
        let complete = new Promise((resolve, reject) => {
            this.load((loader, resources) => {
                this.resources = resources;
                resolve(1)
            })
        })
        return complete
    }
}


