import fs from 'fs'
import path from 'path'
import process from 'process'

export default async function (req, res) {
  try {
    const data = await fs.promises.readFile(
      path.join(process.cwd(), '/postbuild/pageData.json'),
      'utf-8'
    )
    res.json(JSON.parse(data))
  } catch (e) {
    res.json({ err: e, cwd: process.cwd(), dir: __dirname })
  }
}
