import {Lightning} from "wpe-lightning-sdk";

export default class List extends Lightning.Component {
    static _template() {
        return {
            Label: {
                text: {text: '', fontFace: 'Magra'}
            },
            Movies: {
                y: 75
            }
        }
    }

    _init() {
        this._index = 0;
    }

    _handleLeft() {
        // @todo: update index and call setIndex
    }

    _handleRight() {
        // @todo: update index and call setIndex
    }

    setIndex(index) {
        /**
         * @todo:
         * Implement working setIndex method
         * that stores index and position movie component to focus
         * on selected item
         */
    }

    set label(v) {
        // @todo: update list title
    }

    set movies(v) {
        // we add an array of object with type: Item
        // this.tag("Levels").children = v.map((el, idx)=>{
        //     return {
        //         type: Item
        //     };
        // });
    }

    get items() {
        return this.tag("Levels").children;
    }

    get activeItem() {
        // @todo: return selected item
    }

    _getFocused() {
        // @todo:
        // return activeItem
    }
}
