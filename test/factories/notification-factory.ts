import { Notification, NotificationProps } from '@app/entities/notification';
import { Content } from '@app/entities/validations/content';

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    category: 'social',
    content: new Content('New friend request').value,
    recipientId: 'recipient-2',
    ...override,
  });
}
