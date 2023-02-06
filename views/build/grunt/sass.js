module.exports = function(grunt) {
    'use strict';

    var sass = grunt.config('sass') || {};
    var watch = grunt.config('watch') || {};
    var notify = grunt.config('notify') || {};
    var root = grunt.option('root') + '/geogebra/views/';

    sass.geogebra = {
        options: {},
        files: {}
    };
    sass.geogebra.files[root + 'js/pciCreator/ims/fakepciInteraction/creator/css/fakepciInteraction.css'] = root + 'js/pciCreator/ims/fakepciInteraction/creator/scss/fakepciInteraction.scss';
    sass.geogebra.files[root + 'js/pciCreator/ims/fakepciInteraction/runtime/css/fakepciInteraction.css'] = root + 'js/pciCreator/ims/fakepciInteraction/runtime/scss/fakepciInteraction.scss';

    watch.geogebrasass = {
        files: [
            root + 'scss/**/*.scss',
            root + 'js/pciCreator/ims/**/*.scss'
        ],
        tasks: ['sass:geogebra', 'notify:geogebrasass'],
        options: {
            debounceDelay: 1000
        }
    };

    notify.geogebrasass = {
        options: {
            title: 'Grunt SASS',
            message: 'SASS files compiled to CSS'
        }
    };

    grunt.config('sass', sass);
    grunt.config('watch', watch);
    grunt.config('notify', notify);

    grunt.registerTask('geogebrasass', ['sass:geogebra']);
};