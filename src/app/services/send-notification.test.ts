import { SendNotification } from './send-notification';

describe('send notification', () => {
  it('should be able to send a notification', async () => {
    const sendNotification = new SendNotification();

    const { notification } = await sendNotification.execute({
      content: 'product discount',
      category: 'social',
      recipientId: 'example-recipient-id',
    });

    expect(notification).toBeTruthy();
  });
});
