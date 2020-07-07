text

## Install
`$ npm i --save Sova-Dialog-Language-Module`   

## Quick start
```
import ckModuleInit from 'Sova-Dialog-Language-Module'   
const dlModule = ckModuleInit(dlConfig)   
 ```
 
 # Description
 ## API methods
 
* chatInit;
* chatRequest;
* setInfo;
* chatEvent;
* chatRate;
* chatTimerAnnouncementsRequest;
* chatUpdate;
* notificationDisplay;
* notificationRequest;
* liveChatOperatorsCheckRequest;
* geoLocationRequest;
* chatTrack;
* reset.
 
 ## dlConfig
 ```
 const dlConfig = {
  info: {
    uuid: string,
  },
  api?: {
    infApiUrl?: string,
    geoLocationApiUrl?: string,
    liveChatOperatorsApiUrl?: string,
    notificationsApiUrl?: string,
    chatTimerAnnouncementsApiUrl?: string,
    chatUpdateApiUrl?: string,
  },
  moduleEvents?: {
  chatInit: (module: DialogLanguageModule, data: ChatInitData) => void,
  chatRequest: (module: DialogLanguageModule, data: ChatRequestData) => void,
  chatEvent: (module: DialogLanguageModule, data: ChatEventData) => void,
  setInfo: (module: DialogLanguageModule, data: SetInfoData) => void,
  chatRate: (module: DialogLanguageModule, data: ChatRateData) => void,
  chatTrack: (module: DialogLanguageModule, data: ChatTrackData) => void,
  geoLocationRequest: (module: DialogLanguageModule) => void,
  liveChatOperatorsCheckRequest: (module: DialogLanguageModule) => void,
  notificationRequest: (module: DialogLanguageModule) => void,
  notificationDisplay: (module: DialogLanguageModule, data: NotificationDisplayData) => void,
  chatUpdate: (module: DialogLanguageModule) => void,
  chatTimerAnnouncementsRequest: (module: DialogLanguageModule, data: ChatTimerAnnouncementsRequestData) => void,
  reset: (module: DialogLanguageModule, data: ChatInitData) => void,
  },
  uiEvents?: {
    sendMessage?: (data: SendMessageData) => void,
    uiManagment?: (uiManagmentEvent: UIManagmentEvents, data: UIManagmentData) => void,
    notifications?: (notificationsEvent: NotificationsEvents, data: NotificationsData) => void,
    modules?: (modulesEvent: ModulesEvents , data: ModulesData)=> void,
  }
}
```
