**Dialog Language** (DL) is separate module that connects to the widget. It is used to describe scripts and dialog rules.

## Install
For install chatKit-dl-module enter next command:
```javascript
npm i ck-dialog-language
```

## Quick start
For quick start chatKit-dl-module enter next command:
```javascript
import ckModuleInit from 'ck-dialog-language' 
const dlModule = ckModuleInit(dlConfig)   
 ```
 
# Description
## dlConfig
Configuration file includes:
 ```javascript
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

## API methods
`Dialog Language` has next API methods:

| API method                                                                                                                                |                                  | 
|-------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------| 
| [chatInit](https://github.com/sovaai/chatKit-dl-module/blob/master/APImethods/chatInit.md "Read about this method")                      | Dialog Initialization            |
| [chatRequest](https://github.com/sovaai/chatKit-dl-module/blob/master/APImethods/chatRequest.md "Read about this method")                 | Sending user messages            |
| [setInfo](https://github.com/sovaai/chatKit-dl-module/blob/master/APImethods/setInfo.md "Read about this method")                         | Get information about events     |
| [chatEvent](https://github.com/sovaai/chatKit-dl-module/blob/master/APImethods/chatEvent.md "Read about this method")                     | Chat events                      |
| [chatRate](https://github.com/sovaai/chatKit-dl-module/blob/master/APImethods/chatRate.md "Read about this method")                       | Rating of the all dialogue       |
| [chatTimerAnnouncementsRequest](https://github.com/sovaai/chatKit-dl-module/blob/master/APImethods/chatTimerAnnouncementsRequest.md "Read about this method") | Announcement activation by timer  |
| [chatUpdate](https://github.com/sovaai/chatKit-dl-module/blob/master/APImethods/chatUpdate.md "Read about this method")                   | Updating the widget              |
| [notificationDisplay](https://github.com/sovaai/chatKit-dl-module/blob/master/APImethods/notificationDisplay.md "Read about this method") | Displaying a specific notification  |
| [notificationRequest](https://github.com/sovaai/chatKit-dl-module/blob/master/APImethods/notificationRequest.md "Read about this method") | Notification display request     |
| [liveChatOperatorsCheckRequest](https://github.com/sovaai/chatKit-dl-module/blob/master/APImethods/liveChatOperatorsCheckRequest.md "Read about this method")  | Request to switch to operator  |
| [geoLocationRequest](https://github.com/sovaai/chatKit-dl-module/blob/master/APImethods/geoLocationRequest.md "Read about this method")   | Geolocation request              |
| [chatTrack](https://github.com/sovaai/chatKit-dl-module/blob/master/APImethods/chatTrack.md "Read about this method")                     | Show specific text when you hover over a link  |
| [reset](https://github.com/sovaai/chatKit-dl-module/blob/master/APImethods/reset.md "Read about this method")                             | Reset dialogue                   |


## DL.ModuleDispatcher
`moduleDispatcher` - method of event management.   
`moduleDispatcher` select method and transmits necessary data to it.  

For example:
```javascript
import moduleInit from 'SOVA-dlModule'   
const dlModule = moduleInit(dlConfig)   
dlModule.moduleDispatcher('chatInit', { clientConfig: { siteLang: 'ru' } })
```
