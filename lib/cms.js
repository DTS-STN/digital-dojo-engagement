export async function getPages() {
  try {
    let pages = await fetch(
      'https://articles.alpha.canada.ca/digital-dojo-cms/wp-json/wp/v2/pages',
      {
        headers: {
          'cache-control': 'no-store, no-cache, must-revalidate, max-age=0',
        },
      }
    )
    return await pages.json()
  } catch (e) {
    throw e
  }
}

export async function getPage(slug, lang) {
  try {
    let page = await fetch(
      `https://articles.alpha.canada.ca/digital-dojo-cms/wp-json/wp/v2/pages?lang=${lang}&slug=${slug}`,
      {
        headers: {
          'cache-control': 'no-store, no-cache, must-revalidate, max-age=0',
        },
      }
    )
    return (await page.json())[0]
  } catch (e) {
    throw e
  }
}
