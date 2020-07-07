# chatInit

## Description
Инициализаия диалога   

## Typical data
```
ChatInitData {  clientConfig: RandomContext   
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
   
## Example of call of method
```
moduleDispatcher('chatInit',{clientConfig:{env_site_lang: 'ru'}})
```
