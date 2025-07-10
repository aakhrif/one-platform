import { Component } from '@angular/core';

@Component({
  selector: 'page-docs-getting-started',
  template: `
    <section class="docs-blog">
      <h1>Getting Started</h1>
      <article class="docs-blog__post">
        <h2>Welcome to the Modern Docs Blog</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, eu consectetur nisl nisi euismod nisi.</p>
        <p>Aliquam erat volutpat. Mauris euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, eu consectetur nisl nisi euismod nisi.</p>
        <h3>Quick Start</h3>
        <ul>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Aliquam erat volutpat. Mauris euismod.</li>
          <li>Donec vitae sapien ut libero venenatis faucibus.</li>
        </ul>
        <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
      </article>
    </section>
  `,
  styleUrls: ['./docs-getting-started.page.scss'],
  standalone: true,
})
export class DocsGettingStartedPage {}
