/* eslint-disable */

var gulp = require("gulp");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var pxtorem = require("postcss-pxtorem");
var less = require("gulp-less");
var sourcemaps = require("gulp-sourcemaps");
var cssBase64 = require("gulp-css-svg");
var del = require("del");
var gulpif = require("gulp-if");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var notify = require("gulp-notify");
var rename = require("gulp-rename");
var sizereport = require("gulp-sizereport");
var nunjucksRender = require("gulp-nunjucks-render");
var prettify = require("gulp-prettify");
var babel = require("gulp-babel");
var browserSync = require("browser-sync").create();

var processors = [
  pxtorem({
    replace: true,
    rootValue: 100,
    propList: ["*"],
    unitPrecision: 6,
    minPixelValue: 2,
    mediaQuery: false
  })
];
var paths = {
  root: {
    src: "src",
    dest: "dist"
  },
  styles: {
    src: "src/less",
    dest: "dist/css"
  },

  scripts: {
    src: "src/js",
    dest: "dist/js"
  },
  libs: {
    src: "src/libs",
    dest: "dist/libs"
  },
  images: {
    src: "src/images",
    dest: "dist/images"
  },
  fonts: {
    src: "src/fonts",
    dest: "dist/fonts"
  },
  svg: {
    src: "src/svg",
    dest: "dist/svg"
  },
  templates: {
    partials: "src/templates"
  },
  app: {
    pages: "src/app",
    dest: "dist/app"
  },
  example: {
    images: "src/example/images",
    imgdist: "dist/example/images",
    style: "src/example/less",
    styledist: "dist/example/css",
    pages: "src/example",
    dest: "dist/example"
  }
};

// 清理dist目录
gulp.task("clean", function() {
  return del(["dist"]);
});

// 编译 Styles
gulp.task("styles", function() {
  return gulp
    .src(paths.styles.src + "/app.less")
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(postcss([autoprefixer()]))
    .pipe(postcss(processors))
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(browserSync.stream());
});

gulp.task("example:styles", function() {
  return gulp
    .src(paths.example.style + "/example.less")
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(postcss([autoprefixer()]))
    .pipe(postcss(processors))
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest(paths.example.styledist))
    .pipe(browserSync.stream());
});

// 复制 img
gulp.task("copy-img", function() {
  return gulp
    .src(paths.images.src + "/**/*.*")
    .pipe(gulp.dest(paths.images.dest));
});

gulp.task("copy-example-img", function() {
  return gulp
    .src(paths.example.images + "/**/*.*")
    .pipe(gulp.dest(paths.example.imgdist));
});

// 复制 fonts
gulp.task("copy-fonts", function() {
  return gulp
    .src(paths.fonts.src + "/**/*.*")
    .pipe(gulp.dest(paths.fonts.dest));
});

// 复制 svg
gulp.task("copy-svg", function() {
  return gulp.src(paths.svg.src + "/*.svg").pipe(gulp.dest(paths.svg.dest));
});
// 复制 libs

gulp.task("copy-libs", function() {
  return gulp.src(paths.libs.src + "/**/*").pipe(gulp.dest(paths.libs.dest));
});
// 复制 js
gulp.task("copy-js", function() {
  return gulp
    .src(paths.scripts.src + "/*.js")
    .pipe(gulp.dest(paths.scripts.dest));
});

// HTML
gulp.task("html:build:app", function() {
  return gulp
    .src([paths.app.pages + "/**/*.html"])
    .pipe(
      nunjucksRender({
        path: [paths.templates.partials]
      })
    )
    .pipe(gulp.dest(paths.app.dest));
});

gulp.task("html:build:example", function() {
  return gulp
    .src([paths.example.pages + "/**/*.html"])
    .pipe(
      nunjucksRender({
        path: [paths.templates.partials]
      })
    )
    .pipe(gulp.dest(paths.example.dest));
});

gulp.task("html:prettify:app", function() {
  return gulp
    .src(paths.app.dest + "/**/*.html")
    .pipe(
      prettify({
        indent_size: 4
      })
    )
    .pipe(gulp.dest(paths.app.dest));
});

gulp.task("html:prettify:example", function() {
  return gulp
    .src(paths.example.dest + "/**/*.html")
    .pipe(
      prettify({
        indent_size: 4
      })
    )
    .pipe(gulp.dest(paths.example.dest));
});

gulp.task(
  "html",
  gulp.series(
    "html:build:app",
    "html:build:example",
    "html:prettify:app",
    "html:prettify:example"
  )
);

// 监听
gulp.task("watch", function(done) {
  gulp.watch(paths.styles.src + "/**/*.less", gulp.parallel("styles"));
  gulp.watch(
    paths.example.style + "/**/*.less",
    gulp.parallel("example:styles")
  );
  gulp.watch(
    [
      paths.app.pages + "/**/*.html",
      paths.example.pages + "/**/*.html",
      paths.templates.partials + "/**/*.nunjucks"
    ],
    gulp.parallel("html")
  );
  gulp.watch(paths.libs.src + "/**/*", gulp.parallel("copy-libs"));
  gulp.watch(paths.scripts.src + "/*.js", gulp.parallel("copy-js"));
  gulp.watch(paths.images.src + "/*.*", gulp.parallel("copy-img"));
  gulp.watch(paths.images.src + "/*.*", gulp.parallel("copy-example-img"));
  gulp.watch(paths.fonts.src + "/*.*", gulp.parallel("copy-fonts"));
  gulp.watch(paths.svg.src + "/*.svg", gulp.parallel("copy-svg"));
  gulp.watch("dist/**/*.html").on("change", browserSync.reload);
  done();
});

gulp.task("size-report", function() {
  return gulp.src(paths.root.dest + "/**/*").pipe(
    sizereport({
      gzip: true
    })
  );
});

// 启动服务
gulp.task("server", function(done) {
  browserSync.init({
    server: {
      baseDir: "dist",
      directory: true
    },
    open: true
  });
  done();
});

// 编译
gulp.task(
  "build",
  gulp.series(
    "clean",
    "styles",
    "example:styles",
    "copy-img",
    "copy-example-img",
    "copy-fonts",
    "copy-svg",
    "copy-libs",
    "copy-js",
    "html"
  )
);
gulp.task("default", gulp.series("build"));

// 开发环境
gulp.task("dev", gulp.series("server", "watch"));
