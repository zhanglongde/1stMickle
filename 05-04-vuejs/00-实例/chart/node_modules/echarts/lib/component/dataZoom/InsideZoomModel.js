/**
 * @file Data zoom model
 */


    module.exports = require('./DataZoomModel').extend({

        type: 'dataZoom.inside',

        /**
         * @protected
         */
        defaultOption: {
            zoomLock: false // Whether disable zoom but only pan.
        }
    });
