import {Lightning, Utils} from "wpe-lightning-sdk";

export default class Level extends Lightning.Component{
    static _template(){
        return {
            Image: {

            },
            Title: {
                y: 310, x: 20,
                text: {fontFace: "Magra", fontSize: 24}
            }
        }
    }

    /**
     * @todo:
     * - toggle alpha on focus / unfocus (transition)
     */

    set item(v){
        // @todo: patch the correct image and title
    }
}