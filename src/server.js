import Server from 'socket.io';

export function startServer(store) {
    const io = new Server().attach(8090);
    console.log('Server started on port 8090.');
}