import { newE2EPage } from '@stencil/core/testing';

describe('kl-panel', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<kl-panel></kl-panel>');

    const element = await page.find('kl-panel');
    expect(element).toHaveClass('hydrated');
  });
});
