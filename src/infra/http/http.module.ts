import { Module } from '@nestjs/common';
import { SendNotification } from 'src/app/services/send-notification';
import { DatabaseModule } from '../database/database.module';
import { NotificationsController } from './controllers/notification.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [SendNotification],
})
export class HttpModule {}
