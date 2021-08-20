let subscribers = [] as SubscriberType[]

let ws: WebSocket | null = null;

const closeHandler = () => {
   setTimeout(createChanel, 5000);
}

const cleanUp = () => {
   ws?.removeEventListener('close', closeHandler);
   ws?.removeEventListener('message', messageHandler);
}

const messageHandler = (e: MessageEvent) => {
   const newMessages = JSON.parse(e.data);
   subscribers.forEach(s => s(newMessages));
};

function createChanel() {
   cleanUp();
   ws?.close();

   ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');
   ws.addEventListener('close', closeHandler);
   ws.addEventListener('message', messageHandler);
}




export const chatApi = {
   start() {
      createChanel()
   },
   stop() {
      subscribers = [];
      cleanUp();
      ws?.close();
   },
   subscribe(callback: SubscriberType) {
      subscribers.push(callback);
      return () => {
         subscribers = subscribers.filter(s => s !== callback);
      }
   },
   unsubscribe(callback: SubscriberType) {
      subscribers = subscribers.filter(s => s !== callback);
   },
   sendMessage(message: string) {
      ws?.send(message);
   }
}


type SubscriberType = (message: ChatMessageType[]) => void
export type ChatMessageType = {
   message: string
   photo: string
   userId: number
   userName: string
}