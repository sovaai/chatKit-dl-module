# chatInit
## Description
Инициализаия диалога

## Call of method
**moduleDispatcher** - метод управление ивентами.   
moduleDispatcher осуществляет переключение на выбранный метод (*chatInit*) и передает туда необходимые данные. 
For example:
```
moduleDispatcher('chatInit',{clientConfig:{env_site_lang: 'ru'}})
```

## Typical data
```
ChatInitData {  
  clientConfig: RandomContext   
}
```

## Example of data
```
data = {   
  clientConfig: {   
    env_site_lang: 'ru'   
  }   
}   
```
