import esbuild from 'esbuild'

const config = {
  bundle: true,
  define: {
    'process.env.NODE_ENV': JSON.stringify(
      // eslint-disable-next-line no-undef
      process.env.NODE_ENV || 'development'
    )
  },
  loader: { '.png': 'file', '.svg': 'file' },
  entryPoints: ['src/index.jsx'],
  minify: true,
  outfile: 'dist/bundle.js',
  sourcemap: false,
  write: true
}

esbuild.build(config)
