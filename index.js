(function (root, factory) {
    if (typeof root.LocationPlugin === "undefined") {
        root.LocationPlugin = factory(root);
    }
})(typeof window !== "undefined" ? window : this, function (window) {
    

    const MAPS = "map";
    const MODAL = "model";

    const TYPES = {
        "JS": "js",
        "CSS": "css"
    }

    const defaults = {
        global: true,
        popup: false,
    };

    const assetList = {
        [MAPS]: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDcupH1pAzOULz35i00ADvn1sndjRa4m_A&libraries=places",
        [MODAL]: [
            "/themes/beta/css/elements/plugins/location/style.css",
            "/themes/beta/css/elements/plugins/location/icomoon/style.css",
        ],
    };

    const extend = () => {
        const merged = {};
        Array.prototype.forEach.call(arguments, (obj) => {
            for (const key in obj) {
                if (!obj.hasOwnProperty(key)) return;
                merged[key] = obj[key];
            }
        });
        return merged;
    };

    const emitEvent = (type, elem, detail) => {
        // Create a new event
        const event = new CustomEvent(type, {
            bubbles: true,
            cancelable: true,
            detail,
        });

        // Dispatch the event
        elem.dispatchEvent(event);
    };

    const loadGoogleMapsJs = async () => {
        if (typeof google === "undefined" || typeof google.maps === "undefined") {
            // load maps script dynamically
            await loadAssets(MAP);
        }
    };

    var loadAssets = async (type) => {
        switch (type) {
            case MODAL:
                assetList[MODAL].css.forEach( async (style) => {
                   await loadResource(style);
                });
                break;

            case MAP:
                await loadResource(assetList[MAP].js);
                break;
        }
    };

    var loadResource = async (type, url) => {
        const assets_url = window.assets_url || '';
        const assets_version = window.assets_version || 1;
        if (window.minify === 1) {
            url = `${assets_url  }?f=${url}&v=${assets_version}`;
        } else {
            url = assets_url + url;
        }

        switch (type) {
            case TYPES.JS:

                break;

            case TYPES.CSS:

                break;
        }
    }

    const constructor = (selector, options) => {};

    return constructor;
});
