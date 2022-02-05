import { Component, Host, h } from '@stencil/core';

/**
 * @slot - The panel's content
 *
 * @csspart base - the component's container
 *
 * @cssproperty --padding - the panel's padding.
 */
@Component({
  tag: 'kl-panel',
  styleUrl: 'kl-panel.css',
  shadow: true,
})
export class KlPanel {

  render() {
    return (
      <Host>
        <div class="panel" part="base">
          <slot></slot>
        </div>
      </Host>
    );
  }

}
