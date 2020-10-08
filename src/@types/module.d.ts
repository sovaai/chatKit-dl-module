import {
  SendMessageData,
  UiEventsData,
  UiEventsNames,
  UIManagmentEvents,
  UIManagmentData,
  ModulesEvents,
  ModulesData,
  NotificationsData,
} from './uiEvents'
import { ModuleEventData, SetInfoData, ChatInitData, ChatEventData, ChatRequestData } from './moduleEvents'

export interface ModuleEvents {
  chatRequest: (module: CKModule, data: RandomData) => void
}
export interface UiEventsList {
  sendMessage?: (data: SendMessageData, ckStore?: any) => void
  uiManagment?: (uiManagmentEvent: UIManagmentEvents, data: UIManagmentData, ckStore?: any) => void
  notifications?: (notificationsEvent: NotificationsEvents, data: NotificationsData, ckStore?: any) => void
  modules?: (modulesEvent: ModulesEvents, data: ModulesData, ckStore?: any) => void
}
export interface CKModule {
  name: string
  info: RandomInfo
  api: RandomApi
  uiEvents: UiEvents
  moduleEvents: ModuleEvents
  moduleDispatcher: (event: 'chatRequest', data?: ModuleEventData) => void
  uiDispatcher: (event: UiEventsNames, data: UiEventsData) => void
}
export interface InitConfig {
  info: RandomInfo
  customization: RandomInfo
  connectToStore: {
    getConfig: (moduleName: string) => RandomInfo
  }
  uiEvents: UiEventsList
}
export interface RandomData {
  [key: string]: any
}
export interface RandomInfo {
  [key: string]: any
}
export interface RandomApi {
  [key: string]: any
}
