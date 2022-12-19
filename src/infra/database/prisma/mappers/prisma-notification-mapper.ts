import { Notification as RawNotification } from '@prisma/client';
import { Notification } from '@app/entities/notification';
import { Content } from '@app/entities/validations/content';

export class PrismaNotificationMapper {
  static toPrisma(notification: Notification) {
    return {
      id: notification.id,
      category: notification.category,
      content: notification.content,
      recipientId: notification.recipientId,
    };
  }

  static toDomain(raw: RawNotification): Notification {
    return new Notification(
      {
        category: raw.category,
        content: new Content(raw.content).value,
        recipientId: raw.recipientId,
        readAt: raw.readAt,
        canceledAt: raw.canceledAt,
        createdAt: raw.createdAt,
      },
      raw.id,
    );
  }
}
