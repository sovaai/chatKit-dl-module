import { DialogLanguageEvents } from '../@types/dialogLanguage'
export interface EventList {
  [key: string]: string
}
export const eventList: EventList = {
  '00b2fcbe-f27f-437b-a0d5-91072d840ed3': 'ready',
  '29e75851-6cae-44f4-8a9c-f6489c4dca88': 'inactive',
  '11d10788-4789-11e3-9b0b-080027ab4d7b': 'rate',
  'bffaa961-9ad3-4ecd-9254-f9e2fc06f28c': 'notification',
  '7330d8fc-4c64-11e3-af49-080027ab4d7b': 'context',
  'd825476d-bc08-4038-9ecf-e6b2b267c7b8': 'click',
  '6819087d-a7d0-4c67-acd4-47d40b233cc9': 'mouse',
  '2bbff8e2-3c75-4f4b-bd61-c29017257c00': 'cardReady',
  '4e729f9a-0aa2-4d37-87d2-bed2b2b39c00': 'operatorStatus',
  'c189c2f1-43b6-424b-866b-03e562ba9d33': 'chatState',
  '409b58e1-595b-4c02-81be-3f31dfe4639d': 'geolocationTimeout',
  'b92e3bcc-44b5-4019-9594-54b69afdaf77': 'geolocationDenied',
}
export const postFetch = async (body: any, url: string) => {
  try {
    const fetchResponse = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
    })
    const fetchResult = await fetchResponse.json()
    return fetchResult.result
  } catch (error) {
    console.log(error)
  }
}
export const postFetchWithHeaders = async (body: any, url: string) => {
  try {
    const fetchResponse = await fetch(url, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(body),
    })
    const fetchResult = await fetchResponse.json()
    return fetchResult
  } catch (error) {
    console.log(error)
  }
}

export const eventsParser = (activeEvents: string[]) => {
  const events: DialogLanguageEvents = {}
  activeEvents.forEach(activeEvent => {
    const eventName = eventList[activeEvent]
    events[eventName] = activeEvent
  })

  return events
}
export const isDevice = () => window && window.innerWidth && window.innerWidth < 1025
