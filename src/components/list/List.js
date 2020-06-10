import {Lightning} from "wpe-lightning-sdk";
import Item from "../item/Item";

export default class List extends Lightning.Component {
    static _template() {
        return {
            Label: {
                alpha: 0.0001,
                text: {text: '', fontFace: 'Magra'}
            },
            SubLabel: {
                alpha: 0.0001,
                y: 50,
                text: {text: '', fontFace: 'SourceSansPro-Regular', color: 0xff00ff00, fontSize: 20}
            },
            Levels: {
                y: 175
            }
        }
    }

    _init() {
        this._index = 0;
        this.setIndex(this._index);
        this.tag("Label").on("txLoaded", ()=> {
            this.patch({
                Label:{smooth:{alpha:1}}
            })
        });
        this.tag("SubLabel").on("txLoaded", ()=> {
            this.patch({
                SubLabel:{smooth:{alpha:1}}
            })
        });
    }

    _handleLeft() {
        // @todo: update index and call setIndex
        if(this._index > 0){
            this.setIndex(this._index - 1);
        }
    }

    _handleRight() {
        // @todo: update index and call setIndex
        if(this._index < this.items.length - 1){
            this.setIndex(this._index + 1);
        }
    }

    // _focus() {
    //     this.tag('Label').setSmooth('y', 0, {duration: 0.5});
    //     this.label = this.results[this._index];
    //     let asset = this.results[this._index];
    //     this.signal('onItemFocus',asset);
    // }

    setIndex(index) {
        /**
         * @todo:
         * Implement working setIndex method
         * that stores index and position movie component to focus
         * on selected item
         */
        this._index = index;
        this.patch({
            Levels: {smooth: {x: index * - 200}}
        });
        this.fireAncestors('$selectionChanged', this.activeItem);
    }

    set label(v) {
        // @todo: update list title
        this.patch({
            Label: {
                text: {
                    text: v.title
                }
            },
            SubLabel: {
                text: {
                    text: v.subTitle
                }
            }
        });
    }

    set movies(v) {
        // we add an array of object with type: Item
        this.tag("Levels").children = v.map((el, idx)=>{
            return {
                type: Item,
                item: el,
                x: idx * 250
            };
        });
    }

    get items() {
        return this.tag("Levels").children;
    }

    get activeItem() {
        // @todo: return selected item
        return this.items[this._index]
    }

    _getFocused() {
        // @todo:
        // return activeItem
        return this.activeItem;
    }
}
