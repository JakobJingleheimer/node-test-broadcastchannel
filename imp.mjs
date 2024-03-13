const channel = new BroadcastChannel('test-channel');

channel.onmessage = noop;

export function noop() {}

channel.close();
