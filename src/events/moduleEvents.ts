import { postFetch, isDevice, eventsParser, postFetchWithHeaders } from '../utils/helpers'

import {
  SetInfoData,
  ChatInitData,
  ChatRequestData,
  ChatEventData,
  ChatRateData,
  ChatTrackData,
  NotificationDisplayData,
  ChatTimerAnnouncementsRequestData,
} from '../@types/moduleEvents'
import { DialogLanguageModule } from '../@types/dialogLanguage'
import { resultControl } from '../utils/resultControl'
import { announcements } from '../utils/announcements'
import { notifications } from '../utils/notifications'

export const setInfo = (module: DialogLanguageModule, data: SetInfoData) => {
  const { cuid, events } = data
  module.info.cuid = cuid
  if (!events) return
  module.info.events = eventsParser(Object.keys(events))
}
export const reset = async (module: DialogLanguageModule, data: ChatInitData) => {
  await module.moduleDispatcher('chatInit', data)
  module.uiDispatcher('modules', {
    modulesEvent: 'updateModule',
    data: { moduleName: module.name, config: { info: module.info, api: module.api } },
  })
}
export const chatInit = async (module: DialogLanguageModule, data: ChatInitData) => {
  const { uuid } = module.info
  const cuid = data?.moduleInfo?.cuid
  const events = data?.moduleInfo?.events
  const { infApiUrl } = module.api
  const { clientConfig } = data
  const url = `${infApiUrl}/Chat.init`
  const body = {
    uuid: uuid,
    cuid: cuid || '',
    context: {
      ...clientConfig,
      isDevice: isDevice(),
    },
  }
  const result = await postFetch(body, url)
  const info: SetInfoData =
    result?.cuid === cuid
      ? {
          cuid: cuid || '',
          events: events,
        }
      : {
          cuid: result.cuid,
          events: result.events,
        }
  module.moduleDispatcher('setInfo', info)
  !(result?.cuid === cuid) && module.moduleDispatcher('chatEvent', { eventName: 'ready', context: {} })
  return resultControl(module, result)
}

export const chatRequest = async (module: DialogLanguageModule, data: ChatRequestData) => {
  const { cuid } = module.info
  const { infApiUrl } = module.api
  const { text, context } = data
  const url = `${infApiUrl}/Chat.request`
  const body = {
    cuid: cuid,
    text: text,
    context: {
      ...context,
      isDevice: isDevice(),
    },
  }
  const result = await postFetch(body, url)
  resultControl(module, result)
}
export const chatEvent = async (module: DialogLanguageModule, data: ChatEventData) => {
  const { cuid, events } = module.info
  const { infApiUrl } = module.api
  let text = ''
  const { eventName, context } = data
  if (eventName === 'geolocationDenied') text = 'LOCATION DENIED'
  if (eventName === 'geolocationTimeout') text = 'REQUEST TIMEOUT ERROR'
  const url = `${infApiUrl}/Chat.event`
  const body = {
    cuid: cuid,
    euid: events[eventName] || '00b2fcbe-f27f-437b-a0d5-91072d840ed3',
    text,
    context: {
      ...context,
      isDevice: isDevice(),
    },
  }
  const result = await postFetch(body, url)
  console.log(result)
  resultControl(module, result)
}
export const chatRate = async (module: DialogLanguageModule, data: ChatRateData) => {
  const { cuid } = module.info
  const { infApiUrl } = module.api
  const { rating } = data
  const url = `${infApiUrl}/Chat.rate`
  const body = {
    cuid: cuid,
    rating: rating,
    context: {
      isDevice: isDevice(),
    },
  }
  const { result } = await postFetchWithHeaders(body, url)
  return resultControl(module, result)
}

export const chatTrack = async (module: DialogLanguageModule, data: ChatTrackData) => {
  const { cuid } = module.info
  const { infApiUrl } = module.api
  const url = `${infApiUrl}/Chat.track`
  const { args, action } = data
  const body = {
    cuid: cuid,
    arguments: args,
    action: action,
  }
  const result = await postFetch(body, url)
  return resultControl(module, result)
}

export const geoLocationRequest = async (module: DialogLanguageModule) => {
  try {
    const { geoLocationApiUrl } = module.api
    const request = await fetch(geoLocationApiUrl)
    const content = await request.json()
    return content
  } catch (error) {
    console.log(error)
  }
}
export const liveChatOperatorsCheckRequest = async (module: DialogLanguageModule) => {
  try {
    const { liveChatOperatorsApiUrl } = module.api
    const request = await fetch(liveChatOperatorsApiUrl)
    const content = await request.json()
    return content
  } catch (error) {
    console.log(error)
  }
}
export const notificationRequest = async (module: DialogLanguageModule) => {
  const { notificationsApiUrl } = module.api
  try {
    const request = await fetch(notificationsApiUrl)
    const content = await request.json()
    return notifications(module, content)
  } catch (error) {
    console.log(error)
  }
}

export const notificationDisplay = async (module: DialogLanguageModule, data: NotificationDisplayData) => {
  const { notificationsApiUrl } = module.api
  const { messageId } = data
  const url = `${notificationsApiUrl}?a=show&id=${messageId}`
  try {
    await fetch(url)
  } catch (error) {
    console.log(error)
  }
}
export const chatUpdate = async (module: DialogLanguageModule) => {
  const { cuid } = module.info
  const { chatUpdateApiUrl } = module.api
  const url = `${chatUpdateApiUrl}/Chat.update`
  const body = {
    cuid: cuid,
  }
  const { answers } = await postFetch(body, url)
  return answers
}
export const chatTimerAnnouncementsRequest = async (
  module: DialogLanguageModule,
  data: ChatTimerAnnouncementsRequestData
) => {
  const { cuid } = module.info
  const { chatTimerAnnouncementsApiUrl } = module.api
  const { userActive } = data
  const body = {
    cuid: cuid,
    user_active: userActive,
  }
  const { answers } = await postFetch(body, chatTimerAnnouncementsApiUrl)
  return announcements(module, answers)
}
