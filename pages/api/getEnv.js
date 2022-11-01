export default async function (req, res) {
  const PROJECT = process.env.PROJECT
  const BRANCH = process.env.BRANCH
  const DOMAIN = process.env.BASE_DOMAIN
  res.json({
    project: PROJECT || '??',
    branch: BRANCH || '??',
    domain: DOMAIN || '??',
  })
}
