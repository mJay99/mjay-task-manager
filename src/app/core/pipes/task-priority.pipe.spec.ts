import { PiorityPipe } from './task-priority.pipe';

describe('PiorityPipe', () => {
  it('create an instance', () => {
    const pipe = new PiorityPipe();
    expect(pipe).toBeTruthy();
  });
});
