import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'kl-nearby-toothbrush',
  styleUrl: 'kl-nearby-toothbrush.css',
  shadow: true,
})
export class KlNearbyToothbrush {

  render() {
    return (
      <Host>
        <div class="container">
          <kl-panel class="toothbrush--card">
            <div>
              <div>KLB001_4BD3</div>
              <my-component size="small">BLINK</my-component>
            </div>
          </kl-panel>
          <kl-panel class="toothbrush--card">
            <div>
              <div>KLB001_4BD3</div>
              <my-component size="small">BLINK</my-component>
            </div>
          </kl-panel>
        </div>
      </Host>
    );
  }

}
