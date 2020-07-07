# chatRequest

## Description
Отправка сообщений пользователем

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
   
## Example of call of method
```
 moduleDispatcher('chatRequest',{text:'Hello World!!'})
```
