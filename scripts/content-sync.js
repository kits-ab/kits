const fs = require("fs")
const path = require("path")

// Configuration
const CONTENT_DIR = "content"
const EXPORT_FILE = "all_content_full_revised.md"

const args = process.argv.slice(2)
const mode = args.find((arg) => arg === "--export" || arg === "--import")
const ignoreIndex = args.indexOf("--ignore")
let ignoreList = []

if (ignoreIndex !== -1 && args[ignoreIndex + 1]) {
  ignoreList = args[ignoreIndex + 1].split(",").map((s) => s.trim())
}

if (mode === "--export") {
  exportContent()
} else if (mode === "--import") {
  importContent()
} else {
  console.log("Usage: node scripts/content-sync.js [--export | --import] [--ignore dir1,dir2]")
  process.exit(1)
}

/**
 * Recursively find all files in a directory
 */
function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath)

  arrayOfFiles = arrayOfFiles || []

  files.forEach(function (file) {
    const fullPath = path.join(dirPath, file)
    if (fs.statSync(fullPath).isDirectory()) {
      arrayOfFiles = getAllFiles(fullPath, arrayOfFiles)
    } else {
      if (file.endsWith(".md")) {
        arrayOfFiles.push(fullPath)
      }
    }
  })

  return arrayOfFiles
}

/**
 * Check if a file path matches any ignore pattern
 */
function shouldIgnore(filePath) {
  if (ignoreList.length === 0) return false
  const relativePath = path.relative(process.cwd(), filePath)
  return ignoreList.some((pattern) => relativePath.includes(pattern))
}

/**
 * Export all markdown files to a single file
 */
function exportContent() {
  console.log(`Scanning ${CONTENT_DIR} for markdown files...`)
  if (ignoreList.length > 0) {
    console.log(`Ignoring paths containing: ${ignoreList.join(", ")}`)
  }

  try {
    let files = getAllFiles(CONTENT_DIR, [])
    files.sort() // Sort alphabetically for consistent output

    // Filter out ignored files
    files = files.filter((file) => !shouldIgnore(file))

    let bigFileContent = ""

    files.forEach((file) => {
      const content = fs.readFileSync(file, "utf8")
      // Use a relative path for the marker so it's clean (e.g., content/sidor/foo.md)
      const relativePath = path.relative(process.cwd(), file)

      bigFileContent += `<!-- FILE: ${relativePath} -->\n\n`
      bigFileContent += content.trim() // Trim original content to normalize
      bigFileContent += "\n\n" // Add separation
    })

    fs.writeFileSync(EXPORT_FILE, bigFileContent)
    console.log(`✅ Successfully exported ${files.length} files to ${EXPORT_FILE}`)
  } catch (e) {
    console.error("❌ Export failed:", e)
    process.exit(1)
  }
}

/**
 * Import content from single file back to individual files
 */
function importContent() {
  console.log(`Reading ${EXPORT_FILE}...`)
  if (!fs.existsSync(EXPORT_FILE)) {
    console.error(`❌ File ${EXPORT_FILE} not found!`)
    process.exit(1)
  }

  const bigContent = fs.readFileSync(EXPORT_FILE, "utf8")

  // Split by the specific marker
  // The regex captures the filename in group 1
  const parts = bigContent.split(/<!-- FILE: (.*?) -->/)

  // parts array will look like:
  // [preamble, filename1, content1, filename2, content2, ...]

  let count = 0

  for (let i = 1; i < parts.length; i += 2) {
    const filename = parts[i].trim()
    let content = parts[i + 1]

    if (!filename || content === undefined) continue

    // Normalize content
    // We expect content to be followed by newlines from our export schema, or user editing.
    // We trim whitespace to avoid accumulating endless newlines at the end of files.
    // And add one final newline which is standard for unix files.
    const fileContent = content.trim() + "\n"

    // Safety checks
    if (filename.includes("..")) {
      console.warn(`⚠️  Skipping unsafe path: ${filename}`)
      continue
    }

    // We really should only write to content/ or specific dirs to be safe, but let's assume
    // the user knows what they are doing if they tagged it.
    // But let's at least ensure it doesn't try to write absolute paths or weird stuff.
    const targetPath = path.resolve(process.cwd(), filename)
    const rootPath = process.cwd()

    if (!targetPath.startsWith(rootPath)) {
      console.warn(`⚠️  Skipping path outside project: ${filename}`)
      continue
    }

    const dir = path.dirname(targetPath)
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true })
      console.log(`Created directory: ${dir}`)
    }

    fs.writeFileSync(targetPath, fileContent)
    console.log(`Wrote: ${filename}`)
    count++
  }

  console.log(`✅ Successfully imported ${count} files.`)
}
