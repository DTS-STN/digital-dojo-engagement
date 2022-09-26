export default async function fakeUsers(n) {
  let ipsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    .split` `
  let users1 = await (
    await fetch(`https://randomuser.me/api/?results=${n}`)
  ).json()
  let users2 = await (
    await fetch(
      `https://random-data-api.com/api/v2/users?response_type=json&size=${n}`
    )
  ).json()
  return users1.results.map((e, i) => ({
    ...e,
    ...users2[i],
    blurb: ipsum.slice(0, (5 + Math.random() * ipsum.length) | 0).join` `,
  }))
}
