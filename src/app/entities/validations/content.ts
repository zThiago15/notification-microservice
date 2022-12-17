export class Content {
  private readonly content: string;

  constructor(content: string) {
    const isContentValid = this.validateContantLength(content);

    if (!isContentValid) {
      throw new Error('Content length invalid!');
    }
    this.content = content;
  }

  get value(): string {
    return this.content;
  }

  validateContantLength(content: string): boolean {
    return content.length >= 5 && content.length <= 240;
  }
}
