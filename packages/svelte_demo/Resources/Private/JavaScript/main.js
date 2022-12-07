import DemoComponent from './Svelte/DemoComponent.svelte';

const selector = '#svelte-demo-component';
if (document.querySelector(selector) !== null) {
    // Mount Svelte component into DOM
    const demoCompEl = new DemoComponent({
        target: document.querySelector(selector)
    });
}


