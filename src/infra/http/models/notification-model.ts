import { Notification } from '@app/entities/notification';

export class NotificationModel {
  static toHttp(notification: Notification) {
    return {
      id: notification.id,
      category: notification.category,
      content: notification.content,
      recipientId: notification.recipientId,
    };
  }
}
