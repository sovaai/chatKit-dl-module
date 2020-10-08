import { DialogLanguageModule } from '../@types/dialogLanguage'
import { SendMessageData, UIManagmentData } from '../@types/uiEvents'
import { msgPrepare } from './regExp'

export const resultControl = async (module: DialogLanguageModule, result: any) => {
  if (result?.text?.value && result?.context) {
    const text = msgPrepare(result.text.value, result.context)
    const data: SendMessageData = {
      text: text,
      sender: 'request',
      showRate: result?.text?.showRate,
      module: module.name,
    }
    const wflagHideReply = result.context?.wflag_hide_reply !== '1'
    wflagHideReply && text && (await module.uiDispatcher('sendMessage', data))
  }
  if (result?.text?.showRate) {
    const data: UIManagmentData = {
      uiManagmentEvent: 'showRate',
      data: true,
    }
    await module.uiDispatcher('uiManagment', data)
  }
}
