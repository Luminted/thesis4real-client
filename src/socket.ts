import SocketIOClient from 'socket.io-client';
import { tableSocketHost, tableSocketNamespace, tableSocketPort } from "./config";

const serverURL = `http://${tableSocketHost}:${tableSocketPort}/${tableSocketNamespace}`
console.log(`connecting to ${serverURL}`);
export const getTableSocket = (query: object) => SocketIOClient(serverURL, {
    // TODO: think if this is good
    autoConnect: true,
    forceNew: true,
    query
});