import fs from 'fs'

export default async function (req, res) {
  const data = await fs.promises.readFile('./postbuild/pageData.json', 'utf-8')
  //   res.json(JSON.parse(data))
  res.json('this should return something....')
}
