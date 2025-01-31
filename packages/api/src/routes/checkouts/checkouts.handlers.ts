import { Context } from "hono";

export async function checkout(c: Context) {
     const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Test Checkout</title>
        <style>
          body { font-family: system-ui; padding: 2rem; }
          button { padding: 8px 16px; margin: 8px; }
        </style>
      </head>
      <body>
        <h2>Test Checkout Page</h2>
        <p>This is a test checkout page that would normally contain your payment form.</p>
        <button onclick="simulateSuccess()">Simulate Success</button>
        <button onclick="simulateCancel()">Simulate Cancel</button>
        
        <script>
          function simulateSuccess() {
            window.parent.postMessage({
              type: 'checkout.success',
              payload: { transactionId: '123', status: 'completed' }
            }, '*');
          }
          
          function simulateCancel() {
            window.parent.postMessage({
              type: 'checkout.cancelled'
            }, '*');
          }
        </script>
      </body>
    </html>
  `;

  return c.html(html)
}