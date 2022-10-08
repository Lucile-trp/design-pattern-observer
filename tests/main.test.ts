import { describe, expect, test } from '@jest/globals';
import main from "../src/main";

describe('main', () => {
    test('main', () => {
        expect(main()).toBe(true);
    })
});