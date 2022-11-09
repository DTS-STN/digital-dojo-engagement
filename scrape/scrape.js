const axios = require('axios')
const { parse } = require('node-html-parser')
const { convert } = require('html-to-text')
const fs = require('fs')
const path = require('path')

const PROJECT = process.env.PROJECT
const BRANCH = process.env.BRANCH
const DOMAIN = process.env.BASE_DOMAIN
const BASE =
  process.env.NODE_ENV === 'production'
    ? `https://${PROJECT}-${BRANCH}.${DOMAIN}`
    : 'http://localhost:3000'

// const BASE =
//   process.NODE_ENV === 'production'
//     ? `${PROJECT}-${BRANCH}.${DOMAIN}`
//     : 'https://digital-dojo-engagement-main.bdm-dev.dts-stn.com'

// const BASE = 'https://digital-dojo-engagement-main.bdm-dev.dts-stn.com'

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
    title: convert(parse(res.data).querySelector('title')),
    text: convert(await res.data),
  }
}

async function main() {
  let hrefs = await getAllHrefs()
  let data = await Promise.all(
    [...hrefs, ...[...hrefs].map((href) => `/fr/${href}`)].map((href) =>
      getPage(href)
    )
  )
  try {
    fs.promises.writeFile(
      process.cwd() + '/scrape/pageData.json',
      JSON.stringify(data)
    )
  } catch (e) {
    console.log(e)
  }
}

// main().then(() => console.log('finished running scrape.js'))

module.exports = { main }
