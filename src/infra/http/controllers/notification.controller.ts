import { Body, Controller, Get, Post } from '@nestjs/common';
import { SendNotification } from 'src/app/services/send-notification';
import { CreateNotificationBody } from '../dtos/create-notification-body';
import { NotificationModel } from '../models/notification-model';

@Controller('notifications')
export class NotificationsController {
  constructor(private sendNotification: SendNotification) {}

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { recipientId, content, category } = body;

    const { notification } = await this.sendNotification.execute({
      recipientId,
      content,
      category,
    });

    return {
      notification: NotificationModel.toHttp(notification),
    };
  }
}
