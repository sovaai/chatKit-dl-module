import { DialogLanguageModule } from './module/DialogLanguage'
import { DialogLanguageConfig } from './@types/dialogLanguage'
const ckModuleInit = (config: DialogLanguageConfig) => new DialogLanguageModule(config)
export default ckModuleInit
