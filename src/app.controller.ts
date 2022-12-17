import { Controller, Get } from '@nestjs/common';
import { SMTPMailService } from './mail/smtp.service';

@Controller()
export class AppController {
  constructor(private readonly mailService: SMTPMailService) {}

  @Get()
  sendMail(): string {
    return this.mailService.sendMail();
  }
}
