//your JS code here. If required.
const output = document.getElementById("output");
output.innerHTML = `<tr><td colspan="2" style="text-align:center">Loading...</td></tr>`;
function createPromise() {
  const delay = Math.random() * 2 + 1;
  return new Promise(resolve => {
    const start = performance.now();
    setTimeout(() => {
      const end = performance.now();
      const elapsed = (end - start) / 1000;
      resolve(Number(elapsed.toFixed(3)));
    }, delay * 1000);
  });
}
const promises = [createPromise(), createPromise(), createPromise()];
Promise.all(promises).then(times => {
  output.innerHTML = "";
  times.forEach((time, idx) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>Promise ${idx+1}</td><td>${time.toFixed(3)}</td>`;
    output.appendChild(row);
  });
  const totalRow = document.createElement("tr");
  totalRow.innerHTML = `<td>Total</td><td>${Math.max(...times).toFixed(3)}</td>`;
  output.appendChild(totalRow);
});
