import { Notification } from './notification';
import { Content } from './validations/content';

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      content: new Content('new friend request made!').value,
      category: 'social',
      recipientId: 'example-recipient-id',
    });

    expect(notification).toBeTruthy();
  });
});
