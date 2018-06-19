# websockets

A WebSocket server and client library built on top of [`ws`][1] with a similar
event-based mechanism to [`socket.io`][2].

## Installing

```bash
npm install @arnellebalane/websockets
```

## Usage

#### On the server:

```js
import websockets from '@arnellebalane/websockets';

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

If you are using the usual `require()`, you can load this package through:

```js
const websockets = require('@arnellebalane/websockets').default;
```

#### On the client:

```js
import websockets from '@arnellebalane/websockets/client';

const socket = websockets('ws://hostname/ws');

socket.on('greeting', data => {
    // data === 'Hello there!';

    socket.emit('message', [1, 2, 3]);
});
```

## API

- `websockets(options)`
  - Factory method for creating a new WebSocket server.
  - Under the hood it just creates a new `ws.Server` object, and the `options` parameter passed to it is just passed directory to the `ws.Server` constructor. Refer to the [`ws`][1] docs for what options you can use.
- `socket`
  - A wrapper around the native `Socket` object representing the WebSocket connection, adding extra methods to make the event-based API possible.
  - `socket.emit(name, data)`
    - If called on the server, an event called `name` will be emitted on the client and the callback receives `data`.
    - If called on the client, an event called `name` will be emitted on the server and the callback receives `data`.
    - `name` (String): The name of the event.
    - `data` (Any): Needs to be a JSON-serializable object.
  - `socket.on(name, callback)`
    - `name` (String): The name of the event to listen to.
    - `callback` (Function)
      - The function to execute when the event is emitted.
      - Receives the `data` object from the `socket.emit` call.

## License

MIT License


[1]: https://www.npmjs.com/package/ws
[2]: https://www.npmjs.com/package/socket.io
