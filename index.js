(function (root, factory) {
    if (typeof root.LocationPlugin == "undefined") {
        root.LocationPlugin = factory(root);
    }
})(typeof window !== "undefined" ? window : this, function (window) {
    "use strict";

    const MAPS = "map";
    const MODAL = "model";

    const TYPES = {
        "JS": "js",
        "CSS": "css"
    }

    var defaults = {
        global: true,
        popup: false,
    };

    var assetList = {
        [MAPS]: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDcupH1pAzOULz35i00ADvn1sndjRa4m_A&libraries=places",
        [MODAL]: [
            "/themes/beta/css/elements/plugins/location/style.css",
            "/themes/beta/css/elements/plugins/location/icomoon/style.css",
        ],
    };

    var extend = () => {
        var merged = {};
        Array.prototype.forEach.call(arguments, function (obj) {
            for (var key in obj) {
                if (!obj.hasOwnProperty(key)) return;
                merged[key] = obj[key];
            }
        });
        return merged;
    };

    var emitEvent = (type, elem, detail) => {
        // Create a new event
        var event = new CustomEvent(type, {
            bubbles: true,
            cancelable: true,
            detail: detail,
        });

        // Dispatch the event
        elem.dispatchEvent(event);
    };

    var loadGoogleMapsJs = async () => {
        if (typeof google == "undefined" || typeof google.maps == "undefined") {
            //load maps script dynamically
            await loadAssets(MAP);
        }
    };

    var loadAssets = async (type) => {
        switch (type) {
            case MODAL:
                assetList[MODAL].css.forEach(function (style) {
                   await loadResource(style);
                });
                break;

            case MAP:
                await loadResource(assetList[MAP].js);
                break;
        }
    };

    var loadResource = async (type, url) => {
        let assets_url = window.assets_url || '';
        let assets_version = window.assets_version || 1;
        if (window.minify === 1) {
            url = assets_url + "?f="+url+"&v="+assets_version;
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

    var constructor = (selector, options) => {};

    return constructor;
});
