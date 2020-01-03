import path from 'path';
import commonjs from 'rollup-plugin-commonjs';
import inject from '@rollup/plugin-inject';

var p_inject = inject({MyParent: [path.resolve('myparent.js'), 'MyParent']}),
    p_commonjs = commonjs();

export default [
    {input: 'class.js', plugins: [p_commonjs], output: {file: 'build.commonjs.js', format: 'umd', name: 'foo'}},
    // Produces "ReferenceError: module is not defined"
    {input: 'class.js', plugins: [p_inject, p_commonjs], output: {file: 'build.inj+commonjs.js', format: 'umd', name: 'foo'}},
    {input: 'class.js', plugins: [p_commonjs, p_inject], output: {file: 'build.commonjs+inj.js', format: 'umd', name: 'foo'}},
    // {input: 'class.js', plugins: [plugins()[0]], output: {file: 'build.inject.js', format: 'umd', name: 'foo'}}
];
