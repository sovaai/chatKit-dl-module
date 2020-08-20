import { DialogLanguageModule } from '../@types/dialogLanguage'
import { resultControl } from './resultControl'

export const announcements = (module: DialogLanguageModule, announcements: any) => {
  if (announcements.length! > 0) return
  announcements.forEach(async (message: any) => await resultControl(module, message.result))
}
