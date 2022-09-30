```dataviewjs
const html = await dv.view('Monster/UnbalanceRate', {
  rate: 3,
  options: { raw: true },
} );
console.log(html);
```