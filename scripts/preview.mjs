import { createReadStream, existsSync, statSync } from 'node:fs'
import { createServer } from 'node:http'
import { extname, join, resolve, sep } from 'node:path'

const root = resolve('.output/public')
const port = Number(process.env.PORT || 3000)

const contentTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.map': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.woff2': 'font/woff2',
}

if (!existsSync(root)) {
  console.error('No static build found. Run `npm run generate` first.')
  process.exit(1)
}

const server = createServer((request, response) => {
  const pathname = decodeURIComponent((request.url || '/').split('?')[0])
  let filePath = join(root, pathname)

  if (!filePath.startsWith(root + sep) && filePath !== root) {
    response.writeHead(403).end('Forbidden')
    return
  }

  if (existsSync(filePath) && statSync(filePath).isDirectory()) {
    filePath = join(filePath, 'index.html')
  }

  const status = existsSync(filePath) ? 200 : 404
  const fallback = join(root, '404.html')

  if (status === 404 && existsSync(fallback)) {
    filePath = fallback
  }

  response.writeHead(status, {
    'Content-Type': contentTypes[extname(filePath)] || 'application/octet-stream',
    'Cache-Control': 'no-store',
  })
  createReadStream(filePath).pipe(response)
})

server.listen(port, '127.0.0.1', () => {
  console.log(`Previewing .output/public at http://127.0.0.1:${port}`)
})
