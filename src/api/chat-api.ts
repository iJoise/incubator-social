export enum EventNameConstant {
   Messages_Received = 'messages-received',
   Status_Changed = 'status_changed '
}

export enum STATUS_CHAT {
   Pending = 'pending',
   Ready = 'ready',
   Error = 'error'
}

let subscribers = {
   [EventNameConstant.Messages_Received]: [] as MessagesReceivedSubscriberType[],
   [EventNameConstant.Status_Changed]: [] as StatusChangedSubscriberType[]
}

let ws: WebSocket | null = null;

const closeHandler = () => {
   notifySubscribesAboutStatus(STATUS_CHAT.Pending)
   setTimeout(createChanel, 5000);
}

const cleanUp = () => {
   ws?.removeEventListener('close', closeHandler);
   ws?.removeEventListener('message', messageHandler);
   ws?.removeEventListener('open', openHandler);
   ws?.removeEventListener('error', errorHandler);
}

const messageHandler = (e: MessageEvent) => {
   const newMessages = JSON.parse(e.data);
   subscribers[EventNameConstant.Messages_Received].forEach(s => s(newMessages));
};
const openHandler = () => {
   notifySubscribesAboutStatus(STATUS_CHAT.Ready);
}
const errorHandler = () => {
   notifySubscribesAboutStatus(STATUS_CHAT.Error);
   console.error('REFRESH PAGE');
}

const notifySubscribesAboutStatus = (status: STATUS_CHAT) => {
   subscribers[EventNameConstant.Status_Changed].forEach(s => s(status));
}

function createChanel() {
   cleanUp();
   ws?.close();

   ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');
   notifySubscribesAboutStatus(STATUS_CHAT.Pending)
   ws.addEventListener('close', closeHandler);
   ws.addEventListener('message', messageHandler);
   ws.addEventListener('open', openHandler);
   ws.addEventListener('error', errorHandler);
}

export const chatApi = {
   start() {
      createChanel()
   },
   stop() {
      subscribers[EventNameConstant.Messages_Received] = [];
      cleanUp();
      ws?.close();
   },
   subscribe(eventName: EventNameConstant, callback: MessagesReceivedSubscriberType | StatusChangedSubscriberType) {
      // @ts-ignore
      subscribers[eventName].push(callback);
      return () => {
         // @ts-ignore
         subscribers[eventName] = subscribers[eventName].filter(s => s !== callback);
      }
   },
   unsubscribe(eventName: EventNameConstant, callback: MessagesReceivedSubscriberType | StatusChangedSubscriberType) {
      // @ts-ignore
      subscribers[eventName] = subscribers[eventName].filter(s => s !== callback);
   },
   sendMessage(message: string) {
      ws?.send(message);
   }
}


type MessagesReceivedSubscriberType = (message: ChatMessageAPIType[]) => void
type StatusChangedSubscriberType = (status: STATUS_CHAT) => void
export type ChatMessageAPIType = {
   message: string
   photo: string
   userId: number
   userName: string
}