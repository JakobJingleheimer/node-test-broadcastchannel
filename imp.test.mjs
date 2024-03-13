import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { noop } from './imp.mjs';


describe('test with broadcast channel', () => {
	it('should do nothing', () => {
		assert.equal(noop(), undefined);
	});
});
