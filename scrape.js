const axios = require('axios')
const { parse } = require('node-html-parser')
const { convert } = require('html-to-text')
const fs = require('fs')
const path = require('path')

const PROJECT = process.env.PROJECT
const BRANCH = process.env.BRANCH
const DOMAIN = process.env.BASE_DOMAIN

// const BASE =
//   process.NODE_ENV === 'production'
//     ? `${PROJECT}-${BRANCH}.${DOMAIN}`
//     : 'https://digital-dojo-engagement-main.bdm-dev.dts-stn.com'

const BASE = 'https://digital-dojo-engagement-main.bdm-dev.dts-stn.com'

async function getAllHrefs() {
  let res = await axios(`${BASE}/home`)
  const root = parse(await res.data)
  return new Set(
    root.querySelectorAll('header nav a').map((e) => e.getAttribute('href'))
  )
}

async function getPage(href) {
  let res = await axios(`${BASE}${href}`)
  return {
    href,
    text: convert(await res.data),
  }
}

async function main() {
  console.log('RUNNING::scrape.js')
  let hrefs = await getAllHrefs()
  let data = await Promise.all([...hrefs].map((href) => getPage(href)))
  console.log(data)
  console.log(process.cwd() + '/pageData.json')
  fs.writeFile(
    path.join(process.cwd() + '/pageData.json'),
    JSON.stringify(data),
    (err) => {
      if (err) console.log(err)
    }
  )
}

main().then(() => console.log('finished running main'))
