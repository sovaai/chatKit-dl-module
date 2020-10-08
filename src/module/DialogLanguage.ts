import {
  DialogLanguageInfo,
  ModuleEvents,
  UiEvents,
  DialogLanguageConfig,
  DialogLanguageApi,
} from '../@types/dialogLanguage'

import {
  ModuleEventsData,
  ChatInitData,
  ChatEventData,
  ChatRequestData,
  SetInfoData,
  ModuleEventsNames,
  ChatRateData,
  ChatTrackData,
  ChatTimerAnnouncementsRequestData,
  NotificationDisplayData,
} from '../@types/moduleEvents'
import {
  UiEventsNames,
  UiEventsData,
  SendMessageData,
  UIManagmentData,
  NotificationsData,
  ModulesData,
} from '../@types/uiEvents'
import { defaultSendMessage, defaultUIManagment, defaultNotifications, defaultModules } from '../events/defaultUiEvents'
import {
  setInfo,
  chatInit,
  chatEvent,
  chatRequest,
  chatRate,
  chatTrack,
  geoLocationRequest,
  liveChatOperatorsCheckRequest,
  notificationRequest,
  notificationDisplay,
  chatUpdate,
  chatTimerAnnouncementsRequest,
  reset,
} from '../events/moduleEvents'
const {
  INF_API_URL,
  GEO_LACATION_API_URL,
  LIVE_CHAT_OPERATORS_API_URL,
  NOTIFICATIONS_API_URL,
  CHAT_TIMER_ANNOUNCEMENTS_API_URL,
  CHAT_UPDATE_API_URL,
} = process.env
class DialogLanguageModule {
  name: string
  ckStore?: any 
  api: DialogLanguageApi
  info: DialogLanguageInfo
  moduleEvents: ModuleEvents
  uiEvents: UiEvents
  constructor(config: DialogLanguageConfig) {
    const { info, api, moduleEvents, uiEvents, ckStore } = config
    this.name = 'dialogLanguage'
    this.ckStore = ckStore
    this.info = {
      cuid: '',
      uuid: info.uuid,
      events: {},
    }
    this.api = {
      infApiUrl: api?.infApiUrl || INF_API_URL || '',
      geoLocationApiUrl: api?.geoLocationApiUrl || GEO_LACATION_API_URL || '',
      liveChatOperatorsApiUrl: api?.liveChatOperatorsApiUrl || `${LIVE_CHAT_OPERATORS_API_URL}=${document.URL}` || ``,
      notificationsApiUrl: api?.notificationsApiUrl || `${NOTIFICATIONS_API_URL}${this.info.uuid}.json` || ``,
      chatTimerAnnouncementsApiUrl: api?.chatTimerAnnouncementsApiUrl || CHAT_TIMER_ANNOUNCEMENTS_API_URL || '',
      chatUpdateApiUrl: api?.chatUpdateApiUrl || CHAT_UPDATE_API_URL || '',
    }
    this.uiEvents = {
      sendMessage: uiEvents?.sendMessage || defaultSendMessage,
      uiManagment: uiEvents?.uiManagment || defaultUIManagment,
      notifications: uiEvents?.notifications || defaultNotifications,
      modules: uiEvents?.modules || defaultModules,
    }
    this.moduleEvents = {
      setInfo: moduleEvents?.setInfo || setInfo,
      chatInit: moduleEvents?.chatInit || chatInit,
      chatEvent: moduleEvents?.chatEvent || chatEvent,
      chatRequest: moduleEvents?.chatRequest || chatRequest,
      chatRate: moduleEvents?.chatRate || chatRate,
      chatTrack: moduleEvents?.chatTrack || chatTrack,
      geoLocationRequest: moduleEvents?.geoLocationRequest || geoLocationRequest,
      liveChatOperatorsCheckRequest: moduleEvents?.liveChatOperatorsCheckRequest || liveChatOperatorsCheckRequest,
      notificationRequest: moduleEvents?.notificationRequest || notificationRequest,
      notificationDisplay: moduleEvents?.notificationDisplay || notificationDisplay,
      chatUpdate: moduleEvents?.chatUpdate || chatUpdate,
      chatTimerAnnouncementsRequest: moduleEvents?.chatTimerAnnouncementsRequest || chatTimerAnnouncementsRequest,
      reset: moduleEvents?.reset || reset,
    }
  }
  moduleDispatcher = async (event: ModuleEventsNames, data?: ModuleEventsData) => {
    event === 'chatInit' && data && (await this.moduleEvents[event](this, data as ChatInitData))
    event === 'chatEvent' && data && (await this.moduleEvents[event](this, data as ChatEventData))
    event === 'chatRequest' && data && (await this.moduleEvents[event](this, data as ChatRequestData))
    event === 'setInfo' && data && (await this.moduleEvents[event](this, data as SetInfoData))
    event === 'chatRate' && data && (await this.moduleEvents[event](this, data as ChatRateData))
    event === 'chatTrack' && data && (await this.moduleEvents[event](this, data as ChatTrackData))
    event === 'chatUpdate' && (await this.moduleEvents[event](this))
    event === 'chatTimerAnnouncementsRequest' &&
      data &&
      (await this.moduleEvents[event](this, data as ChatTimerAnnouncementsRequestData))
    event === 'notificationDisplay' && data && (await this.moduleEvents[event](this, data as NotificationDisplayData))
    event === 'notificationRequest' && (await this.moduleEvents[event](this))
    event === 'geoLocationRequest' && (await this.moduleEvents[event](this))
    event === 'liveChatOperatorsCheckRequest' && (await this.moduleEvents[event](this))
    event === 'reset' && (await this.moduleEvents[event](this, data as ChatInitData))
  }
  uiDispatcher = (event: UiEventsNames, data: UiEventsData) => {
    event === 'sendMessage' && this.uiEvents[event](data as SendMessageData, this.ckStore)
    event === 'uiManagment' &&
      this.uiEvents[event]((data as UIManagmentData).uiManagmentEvent, (data as UIManagmentData).data, this.ckStore)
    event === 'notifications' &&
      this.uiEvents[event]((data as NotificationsData).notificationEvent, (data as NotificationsData).data, this.ckStore)
    event === 'modules' && this.uiEvents[event]((data as ModulesData).modulesEvent, (data as ModulesData).data, this.ckStore)
  }
}
export { DialogLanguageModule }
