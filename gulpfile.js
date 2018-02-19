var gulp = require('gulp');
var util = require('gulp-util');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var minify = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var path = require('path');
var yaml = require('js-yaml');
var process = require('process');
var cp = require('child_process');
var fs = require('fs');
/**
 * Get CLI args
 */
var FOLDER;
for (var i = process.argv.length; i > 0; i--) {
    var arg = process.argv[i];
    var nextArg = process.argv[i + 1];

    if (arg == '--folder' && nextArg) {
        FOLDER = process.cwd() + '/' + nextArg;
    }
}

if (!FOLDER) {
    var example = 'gulp --folder opencode.commercesuite.com.br';
    util.log(util.colors.red('Error: missing param: --folder, ex: ' + example));
    process.exit(1);
}

/**
 * Get OpenCode config file
 */
var configYML = FOLDER + '/config.yml';
var configOpenCode = yaml.safeLoad(fs.readFileSync(configYML, 'utf8'));
const URL = configOpenCode[':preview_url'];

if (!URL) {
    util.log(util.colors.red('Error: Did you configured opencode? Check your file: ' + configYML));
    process.exit(1);
}

const CSSPATH = FOLDER + '/css/';
const JSPATH = FOLDER + '/js/';

gulp.task('sass', () =>
    gulp.src(CSSPATH + 'sass/theme.min.sass')
    .pipe(sass({errLogToConsole: true}))
    .on('error', util.log)
    .pipe(concat('theme.min.css'))
    .pipe(minify())
    .pipe(gulp.dest(CSSPATH))
);

gulp.task('js', () =>
    gulp.src(JSPATH + 'modules/*.js')
    .pipe(uglify())
    .pipe(concat('theme.min.js'))
    .pipe(gulp.dest(JSPATH))
);

gulp.task('watch', () => {
    gulp.watch(JSPATH + 'modules/*.js', ['js']);
    gulp.watch(CSSPATH + 'sass/**/*.sass', ['sass']);
});

gulp.task('default', ['watch']);