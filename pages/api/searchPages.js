import fs from 'fs'
import path from 'path'
import process from 'process'

let a = []
fs.promises
  .readdir(process.cwd())
  .then((filenames) => {
    for (let filename of filenames) {
      a.push(filename)
    }
  })
  .catch((err) => {
    console.log(err)
  })

export default async function (req, res) {
  try {
    const data = await fs.promises.readFile(
      path.join(process.cwd(), '/pageData.json'),
      'utf-8'
    )
    res.json(JSON.parse(data))
  } catch (e) {
    res.json({
      err: e,
      files: a,
    })
  }
}
