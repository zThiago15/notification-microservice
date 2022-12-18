import { Notification } from '../entities/notification';
import { Content } from '../entities/validations/content';

interface SendNotificationRequest {
  recipientId: string;
  content: string;
  category: string;
}

interface SendNotificationResponse {
  notification: Notification;
}

export class SendNotification implements SendNotification {
  async execute(
    request: SendNotificationRequest,
  ): Promise<SendNotificationResponse> {
    const { category, content, recipientId } = request;

    const notification = new Notification({
      recipientId,
      content: new Content(content).value,
      category,
    });

    return {
      notification,
    };
  }
}
