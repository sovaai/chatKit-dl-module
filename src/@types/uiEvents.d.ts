export interface SendMessageData {
  text: string
  sender: 'user' | 'request'
  showRate: boolean
  module: string
}
export type UIManagmentEvents =
  | 'setUpSender'
  | 'setUpHeader'
  | 'setUpBadge'
  | 'setUpMessage'
  | 'setUpDialog'
  | 'blockSender'
  | 'dialogLoading'
  | 'showRate'
  | 'showNotification'
export type NotificationsEvents = 'addMessages' | 'addSettings' | 'shown' | 'clicked' | 'enabled'
export interface UIManagmentData {
  uiManagmentEvent: UIManagmentEvents
  data: any
}
export interface NotificationsData {
  notificationEvent: NotificationsEvents
  data: any
}
export type ModulesEvents = 'initModule' | 'switchModule' | 'updateModule' | 'getModuleConfig'
export interface ModulesData {
  modulesEvent: ModulesEvents
  data: any
}
export type UiEventsNames = 'sendMessage' | 'uiManagment' | 'notifications' | 'modules'
export type UiEventsData = SendMessageData | UIManagmentData | NotificationsData | ModulesData
