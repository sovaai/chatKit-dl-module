import { DialogLanguageEventsNames, DialogLanguageInfo } from './dialogLanguage'

export interface RandomContext {
  [key: string]: any
}
export interface ChatRequestData {
  text: string
  context?: RandomContext
}
export interface ChatInitData {
  moduleInfo?: DialogLanguageInfo
  clientConfig: RandomContext
}
export interface SetInfoData {
  cuid: string
  events: string[]
}
export interface ChatEventData {
  eventName: DialogLanguageEventsNames
  context?: RandomContext
}
export interface ChatRateData {
  rating: number
}
export interface ChatTimerAnnouncementsRequestData {
  userActive: boolean
}
export interface NotificationDisplayData {
  messageId: number
}
export interface ChatTrackData {
  action: string
  args: {
    id: string
    url: string
    text: string
  }
}

export type ModuleEventsNames =
  | 'chatInit'
  | 'chatRequest'
  | 'setInfo'
  | 'chatEvent'
  | 'chatRate'
  | 'chatTimerAnnouncementsRequest'
  | 'chatUpdate'
  | 'notificationDisplay'
  | 'notificationRequest'
  | 'liveChatOperatorsCheckRequest'
  | 'geoLocationRequest'
  | 'chatTrack'
  | 'reset'

export type ModuleEventsData =
  | ChatRequestData
  | ChatEventData
  | ChatInitData
  | SetInfoData
  | ChatRateData
  | ChatTimerAnnouncementsRequestData
  | NotificationDisplayData
  | ChatTrackData

