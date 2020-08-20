import {
  ModuleEventsData,
  ChatInitData,
  ChatRequestData,
  ChatEventData,
  SetInfoData,
  ChatRateData,
  ChatTrackData,
  NotificationDisplayData,
  ChatTimerAnnouncementsRequestData,
  ModuleEventsNames,
} from './moduleEvents'
import {
  SendMessageData,
  UiData,
  NotificationsEvents,
  NotificationsData,
  UIManagmentData,
  ModulesEvents,
  ModulesData,
} from './uiEvents'
import { CKModule, InitConfig, UiEventsList } from './module'
export interface DialogLanguageInfo {
  uuid: string
  cuid: string
  events: DialogLanguageEvents
}
export interface DialogLanguageApi {
  infApiUrl: string
  geoLocationApiUrl: string
  liveChatOperatorsApiUrl: string
  notificationsApiUrl: string
  chatTimerAnnouncementsApiUrl: string
  chatUpdateApiUrl: string
}
export type DialogLanguageEventsNames =
  | 'ready'
  | 'inactive'
  | 'rate'
  | 'notification'
  | 'context'
  | 'click'
  | 'mouse'
  | 'cardReady'
  | 'operatorStatus'
  | 'chatState'
  | 'geolocationTimeout'
  | 'geolocationDenied'
export interface DialogLanguageEvents {
  ready?: {
    euid: '00b2fcbe-f27f-437b-a0d5-91072d840ed3'
    sended: boolean
  }
  inactive?: { euid: '29e75851-6cae-44f4-8a9c-f6489c4dca88' }
  rate?: { euid: '11d10788-4789-11e3-9b0b-080027ab4d7b' }
  notification?: { euid: 'bffaa961-9ad3-4ecd-9254-f9e2fc06f28c' }
  context?: { euid: '7330d8fc-4c64-11e3-af49-080027ab4d7b' }
  click?: { euid: 'd825476d-bc08-4038-9ecf-e6b2b267c7b8' }
  mouse?: { euid: '6819087d-a7d0-4c67-acd4-47d40b233cc9' }
  cardReady?: { euid: '2bbff8e2-3c75-4f4b-bd61-c29017257c00' }
  operatorStatus?: { euid: '4e729f9a-0aa2-4d37-87d2-bed2b2b39c00' }
  chatState?: { euid: 'c189c2f1-43b6-424b-866b-03e562ba9d33' }
  geolocationTimeout?: { euid: '409b58e1-595b-4c02-81be-3f31dfe4639d' }
  geolocationDenied?: { euid: 'b92e3bcc-44b5-4019-9594-54b69afdaf77' }
  [key: string]: string
}
export interface ModuleEvents {
  chatInit: (module: DialogLanguageModule, data: ChatInitData) => void
  chatRequest: (module: DialogLanguageModule, data: ChatRequestData) => void
  chatEvent: (module: DialogLanguageModule, data: ChatEventData) => void
  setInfo: (module: DialogLanguageModule, data: SetInfoData) => void
  chatRate: (module: DialogLanguageModule, data: ChatRateData) => void
  chatTrack: (module: DialogLanguageModule, data: ChatTrackData) => void
  geoLocationRequest: (module: DialogLanguageModule) => void
  liveChatOperatorsCheckRequest: (module: DialogLanguageModule) => void
  notificationRequest: (module: DialogLanguageModule) => void
  notificationDisplay: (module: DialogLanguageModule, data: NotificationDisplayData) => void
  chatUpdate: (module: DialogLanguageModule) => void
  chatTimerAnnouncementsRequest: (module: DialogLanguageModule, data: ChatTimerAnnouncementsRequestData) => void
  reset: (module: DialogLanguageModule, data: ChatInitData) => void
}
export interface UiEvents {
  sendMessage: (data: SendMessageData) => void
  uiManagment: (uiManagmentEvent: uiManagmentEvents, data: UIManagmentData) => void
  notifications: (notificationsEvent: NotificationsEvents, data: NotificationsData) => void
  modules: (modulesEvent: ModulesEvents, data: ModulesData) => void
}
export interface DialogLanguageModule extends CKModule {
  info: DialogLanguageInfo
  moduleEvents: ModuleEvents
  api: DialogLanguageApi
  uiEvents: UiEvents
  moduleDispatcher: (event: ModuleEventsNames, data?: ModuleEventsData) => void
}
export interface DialogLanguageConfig {
  info: {
    uuid: string
  }
  api?: {
    infApiUrl?: string
    geoLocationApiUrl?: string
    liveChatOperatorsApiUrl?: string
    notificationsApiUrl?: string
    chatTimerAnnouncementsApiUrl?: string
    chatUpdateApiUrl?: string
  }
  moduleEvents?: ModuleEvents
  uiEvents?: UiEventsList
}
