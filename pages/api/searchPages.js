import fs from 'fs'

export default async function (req, res) {
  try {
    const data = await fs.promises.readFile('postbuild/pageData.json', 'utf-8')
    res.json(JSON.parse(data))
  } catch (e) {
    res.json(e)
  }
}
