import {Lightning, Utils} from 'wpe-lightning-sdk';
import {List} from "../components"
import {getImgUrl as getImgUrl} from '../lib/tools'

export default class Main extends Lightning.Component{
    static _template() {
        const timingFunction = 'cubic-bezier(0.20, 1.00, 0.80, 1.00)';
        return {
            Background: {
                w: 1920, h: 1080, colorBottom: 0xff000000, scale: 1,
                transitions: {
                    x:{duration:3, delay:1.2, timingFunction:'ease-in'}
                }
            },
            Lists: {
                x: 100, y: 560, zIndex: 3
            },
            // @todo: add logo
            Logo: {
                x: 100,
                y: 100,
                mount: 0,
                alpha: 1.0,
                zIndex: 2,
                src: Utils.asset('images/logo.png'),
                transitions: {
                    alpha: {duration: 1, timingFunction},
                    y: {duration: 1, timingFunction}
                }
            }
        };
    }

    _init() {
        this._index = 0;
        this.tag("Logo").on("txLoaded", ()=> {
            this.patch({
                Logo:{smooth:{alpha:1}}
            })
        });
    }

    _focus() {
    }

    $selectionChanged(__item) {
        this.patch({
            Background: {
                src: getImgUrl(__item.activeBackgroundUrl)
            },
            Lists: {
                List: {
                    label: __item.activeLabel
                }
            }
        });
    }

    /**
     * @todo: add set movies() that will be called by the data-provider
     * inside set movies create new List child and call it's movies setter
     * and hand over the movies
     */
    set movies(movies) {
        this.tag('Lists').patch({
            List: {
                type: List,
                movies: movies.results
            }
        })
    }

    _unfocus() {
        // @todo
    }

    _getFocused() {
        // @todo: delegate focus to List child
        return this.tag("List");
    }

}