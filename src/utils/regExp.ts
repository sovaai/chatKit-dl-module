const msgRegExpReplace = {
  links: {
    regexp: /href="event:/gim,
    replace: 'data-type="outbound" rel="noopener noreferrer" href="',
  },
  userLinks: {
    regexp: /<userlink([^>]*(?!data-request))?(data-request="([^"]+)?")?>(.*?)<\/userlink>/gim,
    replace: "<a class='request-userlink'$1 data-type='userlink' href='#'>$4</a>",
  },
  newPara: {
    regexp: / \(NEW_PARA\)|\(NEW_PARA\)/gim,
    replace: '',
  },
  newParaButtons: {
    regexp: / \(NEW_PARA\)(.*)|\(NEW_PARA\)(.*)/gim,
    replace: "<span class='para_as_buttons'>$1$2</span>",
  },
  userLinksAsButtons: {
    regexp: /<userlink([^>]*(?!data-request))?(data-request="([^"]+)?")?>(.*?)<\/userlink>/gim,
    replace: "<a class='request-userlink request-userlink_as_button'$1 data-type='userlink' href='#'>$4</a>",
  },
}

const links = msgRegExpReplace.links
const userLinks = msgRegExpReplace.userLinks
const userLinksAsButtons = msgRegExpReplace.userLinksAsButtons
const newPara = msgRegExpReplace.newPara
const newParaButtons = msgRegExpReplace.newParaButtons

const msgPrepare = (text: string, context: any) => {
  if (/UserLinkAsButton/gim.test(context?.wcmd_show_mode)) {
    if (/\(NEW_PARA\)/gim.test(context?.wcmd_show_mode)) {
      return text
        .replace(links?.regexp, links?.replace)
        .replace(newParaButtons?.regexp, newParaButtons?.replace)
        .replace(userLinks?.regexp, userLinks?.replace)
    } else {
      return text
        .replace(links?.regexp, links?.replace)
        .replace(newPara?.regexp, newPara?.replace)
        .replace(userLinksAsButtons?.regexp, userLinksAsButtons?.replace)
    }
  }
  return text
    .replace(links?.regexp, links?.replace)
    .replace(newPara?.regexp, newPara?.replace)
    .replace(userLinks?.regexp, userLinks?.replace)
}

export { msgPrepare }
