const routePfx = '/page/'

module.exports = {
  extendPageData($page) {
    const { frontmatter } = $page

    if (
      !frontmatter 
      || JSON.stringify(frontmatter) === '{}'
      || !frontmatter.permalink 
      || frontmatter.single === true
    ) {
      return
    }
    frontmatter.commentid = frontmatter.permalink 
    frontmatter.permalink = frontmatter.permalink.indexOf('daily/') == 0 ? frontmatter.permalink : `${routePfx}${frontmatter.permalink}`
  }
}