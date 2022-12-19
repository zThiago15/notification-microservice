import { CancelNotification } from '@app/services/cancel-notification';
import { CountRecipientNotifications } from '@app/services/count-recipient-notifications';
import { GetRecipientNotifications } from '@app/services/get-recipient-notifications';
import { ReadNotification } from '@app/services/read-notification';
import { UnreadNotification } from '@app/services/unread-notification';
import { Module } from '@nestjs/common';
import { SendNotification } from 'src/app/services/send-notification';
import { DatabaseModule } from '../database/database.module';
import { NotificationsController } from './controllers/notification.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    SendNotification,
    CancelNotification,
    CountRecipientNotifications,
    GetRecipientNotifications,
    ReadNotification,
    UnreadNotification,
  ],
})
export class HttpModule {}
