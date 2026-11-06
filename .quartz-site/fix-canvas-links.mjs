// CanvasPage preserves spaces in output paths, while Quartz normalizes link paths.
import { readFileSync, writeFileSync, readdirSync, existsSync } from "node:fs"
import path from "node:path"

const output = path.resolve("public")
const canvasFolder = "mappings JSON canvas"
const canvasPaths = new Map()
for (const file of readdirSync(path.join("content", canvasFolder))) {
  if (!file.endsWith(".canvas")) continue
  const stem = file.slice(0, -".canvas".length)
  const target = path.join(output, canvasFolder, stem + ".html")
  if (!existsSync(target)) throw new Error(`Missing rendered Canvas: ${target}`)
  const slug = path.join(output, canvasFolder.replaceAll(" ", "-"), stem.replaceAll(" ", "-"))
  canvasPaths.set(slug, target)
}

const homepageTargets = new Set()
for (const file of readdirSync(output, { recursive: true })) {
  if (!file.endsWith(".html")) continue
  const page = path.join(output, file)
  const html = readFileSync(page, "utf8")
  const updated = html.replace(/\bhref="(\.{1,2}\/[^"#?]+)([?#][^"]*)?"/g, (link, href, suffix = "") => {
    const source = decodeURIComponent(href).replace(/\.(canvas|html)$/, "").replaceAll(" ", "-")
    const target = canvasPaths.get(path.resolve(path.dirname(page), source))
    if (!target) return link
    if (file === "index.html") homepageTargets.add(target)
    const relative = path.relative(path.dirname(page), target).split(path.sep).map(encodeURIComponent).join("/")
    return `href="${relative.startsWith("../") ? relative : "./" + relative}${suffix}"`
  })
  if (updated !== html) writeFileSync(page, updated)
}

if (canvasPaths.size === 0 || homepageTargets.size !== canvasPaths.size) {
  throw new Error(`Homepage links to ${homepageTargets.size} of ${canvasPaths.size} Canvas pages`)
}
console.log(`Verified ${homepageTargets.size} homepage Canvas links against rendered files`)
