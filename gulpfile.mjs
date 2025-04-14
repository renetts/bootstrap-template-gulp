import gulp from 'gulp';
import gulpSass from 'gulp-sass';
import * as sass from 'sass'; // ✅ Aquí
import sourcemaps from 'gulp-sourcemaps';
import cleanCSS from 'gulp-clean-css';
import uglify from 'gulp-uglify';
import imagemin from 'gulp-imagemin';
import { deleteAsync } from 'del'; // ✅ Aquí

const compileSass = gulpSass(sass);

// Paths
const paths = {
  scss: {
    src: 'scss/**/*.scss',
    dest: 'dist/css',
  },
  js: {
    src: 'src/js/**/*.js',
    dest: 'dist/js',
  },
  images: {
    src: 'src/images/**/*',
    dest: 'dist/images',
  },
  dist: 'dist'
};

// Clean task
export const clean = () => deleteAsync([paths.dist]);

// Sass compile + minify
export const styles = () => {
  return gulp.src(paths.scss.src)
    .pipe(sourcemaps.init())
    .pipe(compileSass().on('error', compileSass.logError))
    .pipe(cleanCSS())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.scss.dest));
};

// JS minify
export const scripts = () => {
  return gulp.src(paths.js.src)
    .pipe(uglify())
    .pipe(gulp.dest(paths.js.dest));
};

// Image optimization
export const images = () => {
  return gulp.src(paths.images.src)
    .pipe(imagemin())
    .pipe(gulp.dest(paths.images.dest));
};

// Watch files
export const watch = () => {
  gulp.watch(paths.scss.src, styles);
  gulp.watch(paths.js.src, scripts);
  gulp.watch(paths.images.src, images);
};

// Default task
export default gulp.series(
  clean,
  gulp.parallel(styles, scripts, images),
  watch
);