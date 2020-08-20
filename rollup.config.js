import typescript from '@wessberg/rollup-plugin-ts'
import commonjs from '@rollup/plugin-commonjs'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'
import dotenv from 'dotenv'
dotenv.config()
import pkg from './package.json'
const {
  INF_API_URL,
  GEO_LACATION_API_URL,
  LIVE_CHAT_OPERATORS_API_URL,
  NOTIFICATIONS_API_URL,
  CHAT_TIMER_ANNOUNCEMENTS_API_URL,
  CHAT_UPDATE_API_URL,
} = process.env
export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'es',
      exports: 'named',
      sourcemap: true,
    },
  ],
  plugins: [
    replace({
      process: JSON.stringify({
        env: {
          INF_API_URL,
          GEO_LACATION_API_URL,
          LIVE_CHAT_OPERATORS_API_URL,
          NOTIFICATIONS_API_URL,
          CHAT_TIMER_ANNOUNCEMENTS_API_URL,
          CHAT_UPDATE_API_URL,
        },
      }),
    }),
    peerDepsExternal(),
    resolve(),
    typescript(),
    commonjs(),
  ],
}
