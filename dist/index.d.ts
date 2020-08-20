import { DialogLanguageInfo, ModuleEvents, UiEvents, DialogLanguageConfig, DialogLanguageApi } from "../@types/dialogLanguage";
import { ChatInitData, ChatEventData, ChatRequestData, SetInfoData, ModuleEventsNames, ChatRateData, ChatTrackData, ChatTimerAnnouncementsRequestData, NotificationDisplayData } from "../@types/moduleEvents";
import { UiEventsNames, UiEventsData } from "../@types/uiEvents";
import { DialogLanguageConfig as DialogLanguageConfig$0 } from './@types/dialogLanguage';
declare class DialogLanguageModule {
    name: string;
    api: DialogLanguageApi;
    info: DialogLanguageInfo;
    moduleEvents: ModuleEvents;
    uiEvents: UiEvents;
    constructor(config: DialogLanguageConfig);
    moduleDispatcher: (event: ModuleEventsNames, data?: SetInfoData | ChatInitData | ChatRequestData | ChatEventData | ChatRateData | ChatTrackData | NotificationDisplayData | ChatTimerAnnouncementsRequestData | undefined) => Promise<void>;
    uiDispatcher: (event: UiEventsNames, data: UiEventsData) => void;
}
declare const ckModuleInit: (config: DialogLanguageConfig$0) => DialogLanguageModule;
export { ckModuleInit as default };
