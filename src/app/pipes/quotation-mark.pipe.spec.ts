import { QuotationMarkPipe } from './quotation-mark.pipe';

describe('QuotationMarkPipe', () => {
  it('create an instance', () => {
    const pipe = new QuotationMarkPipe();
    expect(pipe).toBeTruthy();
  });

  it('create an instance', () => {
    const pipe = new QuotationMarkPipe();
    expect(pipe.transform('')).toBeFalsy();
    expect(pipe.transform('xyz&quot;fghj&quot;!')).toEqual('xyz"fghj"!');
  });
});
