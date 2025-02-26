import lwc from "@lwc/rollup-plugin";
import replace from "@rollup/plugin-replace";
import typescript from '@rollup/plugin-typescript';
import copy from 'rollup-plugin-copy';

const isProduction = process.env.production;

export default {
  input: "src/modules/lwc/app/app.ts",

  output: {
    file: "dist/app.js",
    format: "esm",
    sourcemap: true
  },

  plugins: [
    typescript({
      declaration: false,
      rootDir: './src/modules/lwc',
    }),
    copy({
      targets: [
        { src: 'src/modules/lwc/app/*.d.ts', dest: 'dist' }
      ]
    }),
    replace({
      "process.env.NODE_ENV": JSON.stringify(isProduction ? 'production' : 'development'),
      preventAssignment: true
    }),
    lwc(),
  ],
};
