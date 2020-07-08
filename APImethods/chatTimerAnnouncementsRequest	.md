# chatTimerAnnouncementsRequest
## Description
Активация анонсов по таймеру

## Call of method
**moduleDispatcher** - метод управление ивентами.   
moduleDispatcher осуществляет переключение на выбранный метод (*chatTimerAnnouncementsRequest*) и передает туда необходимые данные.   
For example:
```
moduleDispatcher('chatTimerAnnouncementsRequest',{userActive: true})
```

## Typical data
```
ChatTimerAnnouncementsRequestData {   
  userActive: boolean   
}   
```

## Example of data
```
data = {   
  userActive: true,   
}   
```
