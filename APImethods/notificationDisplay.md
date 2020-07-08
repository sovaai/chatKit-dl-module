# notificationDisplay

## Description
Отображение определенной нотификации

## Call of method
**moduleDispatcher** - метод управление ивентами.   
moduleDispatcher осуществляет переключение на выбранный метод (*notificationDisplay*) и передает туда необходимые данные.   
For example:
```
moduleDispatcher('notificationDisplay',{ messageId: 12})
```

## Typical data
```
NotificationDisplayData {   
  messageId: number   
} 
```

## Example of data
```
data = {   
  messageId: 12,   
}
```
