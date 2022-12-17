import { Content } from './content';

describe('Notification content', () => {
  it('should be able to create a notification content', () => {
    const content = new Content('You received a friend request');

    expect(content).toBeTruthy();
    expect(content.value).toEqual('You received a friend request');
  });

  it('should not be able to create a notification content with less than 5 characters', () => {
    expect(() => new Content('hi!')).toThrow();
    expect(() => new Content('hi!')).toThrowError('Invalid content length!');
  });

  it('should not be able to create a notification content with more than 240 characters', () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
    expect(() => new Content('a'.repeat(241))).toThrowError(
      'Invalid content length!',
    );
  });
});
