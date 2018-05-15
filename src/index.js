class ValineFactory {
    constructor(options = {}) {
        this.options = options
        return this
    }

    ready(callback) {
        let win = window, doc = document
        // don't use "interactive" on IE <= 10 (it can fired premature)
        if (doc.readyState === "complete" || (doc.readyState !== "loading" && !doc.documentElement.doScroll))
            setTimeout(() => callback && callback() , 0)
        else {
            let handler = () => {
                doc.removeEventListener("DOMContentLoaded", handler, false)
                win.removeEventListener("load", handler, false)
                callback && callback()
            }
            doc.addEventListener("DOMContentLoaded", handler, false)
            win.addEventListener("load", handler, false)
        }
        return this
    }
}

function Valine(options){
    // console.log(window)
    // console.log(12)
    // if(this instanceof ValineFactory){
    //     return this
    // }
    // else return new ValineFactory(options)
    return ValineFactory
}

// window.Valine = ValineFactory

exports.Valine = Valine
exports.VF = ValineFactory