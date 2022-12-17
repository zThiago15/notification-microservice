import { Injectable } from '@nestjs/common';
import { MailService } from './mail.service';

@Injectable()
export class PortmarkMailService implements MailService {
  sendMail(): string {
    return 'send postmark mail';
  }
}
