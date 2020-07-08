# chatRequest
## Description
Отправка сообщений пользователем

## Call of method
**moduleDispatcher** - метод управление ивентами.   
moduleDispatcher осуществляет переключение на выбранный метод (*chatRequest*) и передает туда необходимые данные.   
For example:
```
moduleDispatcher('chatRequest',{text:'Hello World!!'})
```

## Typical data
```
ChatRequestData {   
  text: string   
  context?: RandomContext   
}   
```

## Example of data
```
data = {   
  text: 'Hello World!!'   
}   
```
