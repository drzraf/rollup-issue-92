import path from 'path';
import commonjs from 'rollup-plugin-commonjs';
import inject from '@rollup/plugin-inject';

function plugins(compress = false) {
    return [
        inject({MyParent: [path.resolve('myparent.js'), 'MyParent']}),
        commonjs(),
    ];
}

export default [
    {input: 'class.js', plugins: [plugins()[1]], output: {file: 'build.commonjs.js', format: 'umd', name: 'foo'}},
    {input: 'class.js', plugins: plugins(), output: {file: 'build.both.js', format: 'umd', name: 'foo'}},
    {input: 'class.js', plugins: [plugins()[0]], output: {file: 'build.inject.js', format: 'umd', name: 'foo'}}
];

