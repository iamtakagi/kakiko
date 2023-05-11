import { findMessageById } from "../../lib/messages/findMessageById";

describe('lib/messages/findMessageById.ts', () => {

    it('データベースからメッセージを取得できる', async () => {
        const message = await findMessageById('1');
        expect(message).toBeDefined();
    });
})
