import { Notification } from '../entities/notification';
import { Content } from '../entities/validations/content';
import { NotificationsRepository } from '../repositories/notifications-repository';

interface SendNotificationRequest {
  recipientId: string;
  content: string;
  category: string;
}

interface SendNotificationResponse {
  notification: Notification;
}

export class SendNotification implements SendNotification {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: SendNotificationRequest,
  ): Promise<SendNotificationResponse> {
    const { category, content, recipientId } = request;

    const notification = new Notification({
      recipientId,
      content: new Content(content).value,
      category,
    });

    await this.notificationsRepository.create(notification);

    return {
      notification,
    };
  }
}
