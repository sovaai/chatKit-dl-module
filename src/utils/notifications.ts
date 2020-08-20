import { DialogLanguageModule } from '../@types/dialogLanguage'

export const notifications = (module: DialogLanguageModule, notificationsRequestResult: any) => {
  const { randomMsg, ...notificationsSettings } = notificationsRequestResult
  module.uiDispatcher('notifications', { notificationEvent: 'addMessages', data: randomMsg })
  module.uiDispatcher('notifications', {notificationEvent: 'addSettings', data: notificationsSettings})
}
