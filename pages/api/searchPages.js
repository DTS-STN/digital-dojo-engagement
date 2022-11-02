import fs from 'fs'
import path from 'path'
import process from 'process'

export default async function (req, res) {
  let re = req.body.split(/[^\w']/g).filter((e) => e).join`|`
  try {
    const data = await fs.promises.readFile(
      path.join(process.cwd(), '/scrape/pageData.json'),
      'utf-8'
    )
    let results = JSON.parse(data).filter((e) =>
      new RegExp(re, 'i').test(e.text)
    )
    res.json(results)
  } catch (e) {
    res.json(e)
  }
}
