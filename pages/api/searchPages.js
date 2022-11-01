import fs from 'fs'
import path from 'path'
import process from 'process'

const PROJECT = process.env.PROJECT
const BRANCH = process.env.BRANCH
const DOMAIN = process.env.BASE_DOMAIN

export default async function (req, res) {
  try {
    const data = await fs.promises.readFile(
      path.join(process.cwd(), '/postbuild/pageData.json'),
      'utf-8'
    )
    res.json(JSON.parse(data))
  } catch (e) {
    res.json({
      err: e,
      cwd: process.cwd(),
      project: PROJECT,
      branch: BRANCH,
      domain: DOMAIN,
    })
  }
}
