import { findMessageById } from "../../../lib/messages/findMessageById";

describe('lib/messages/findMessageById.ts', () => {

    test('データベースからメッセージを取得できる', async () => {
        const message = await findMessageById('1');
        expect(message).toBeDefined();
    });

    test('データベースからメッセージを取得できない', async () => {
        const message = await findMessageById('-1');
        expect(message).toBeUndefined();
    });
})
