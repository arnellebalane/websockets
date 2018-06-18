# websockets

A WebSocket server and client library built on top of [`ws`][1] with a similar
event-based mechanism to [`socket.io`][2].

## Installing

```bash
npm install @arnellebalane/websockets
```

## Usage

On the server:

```js
import websockets from '@arnellebalane/websockets';
// or: const websockets = require('@arnellebalane/websockets')

const ws = websockets({
    server, // An http.Server object
    path: '/ws'
});

ws.on('connection', socket => {
    socket.emit('greeting', 'Hello there!');

    socket.on('message', data => {
        // message === [1, 2, 3]
    });
});
```

On the client:

```js
import websockets from '@arnellebalane/websockets/client';

const socket = websockets('ws://hostname/ws');

socket.on('greeting', data => {
    // data === 'Hello there!';

    socket.emit('message', [1, 2, 3]);
});
```

## License

MIT License
