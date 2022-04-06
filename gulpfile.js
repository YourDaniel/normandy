const gulp = require("gulp");
const argv = require('yargs').argv;
const rename = require("gulp-rename");
const replace = require("gulp-replace");

const tasks = [
    {
        src: ['./src/components/_TemplateFunction/_TemplateFunction.js', './src/components/_TemplateFunction/index.js',  './src/components/_TemplateFunction/assets', './src/components/_TemplateFunction/_TemplateFunction.scss'],
        dest: 'src/components',
        base: '_TemplateFunction',
        name: 'func'
    },
    {
        src: ['./src/components/_TemplateClass/_TemplateClass.js', './src/components/_TemplateClass/index.js',  './src/components/_TemplateClass/assets', './src/components/_TemplateClass/_TemplateClass.scss'],
        dest: 'src/components',
        base: '_TemplateClass',
        name: 'class'
    }
];



//gulp add-func -name Test

tasks.forEach(task => {
    gulp.task('add-' + task.name, function() {
        let newModuleName = argv.name;
        let result = true;
        const paths = task;
        let dest = paths.dest;
        
       
        
        if(task.name === 'func' || task.name === 'class'){
            dest += '/' + newModuleName;
        }
        
        if(newModuleName){
            result = gulp.src(paths.src)
                .pipe(replace(paths.base, newModuleName))
                .pipe(rename(function(path){
                    if (path.basename !== 'index' && path.basename !== 'assets') {
                        path.basename = newModuleName;
                    }
                   
                }))
                .pipe(gulp.dest(dest));
        }
        return result
    });
})




