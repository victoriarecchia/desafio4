import * as url from 'url'

export const config = {
  SERVER: 'server16',
  PORT: 8080,
  DIRNAME: url.fileURLToPath(new URL('.', import.meta.url)),

  // Funcion getter
  get UPLOAD_DIR(){return `${this.DIRNAME}/public/img`} 
}