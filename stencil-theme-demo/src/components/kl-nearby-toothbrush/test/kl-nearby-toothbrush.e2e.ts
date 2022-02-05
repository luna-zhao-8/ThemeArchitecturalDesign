import { newE2EPage } from '@stencil/core/testing';

describe('kl-nearby-toothbrush', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<kl-nearby-toothbrush></kl-nearby-toothbrush>');

    const element = await page.find('kl-nearby-toothbrush');
    expect(element).toHaveClass('hydrated');
  });
});
