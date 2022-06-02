const pobierz = document.querySelector("#pobierz");

function renderRows(employees) {
  return employees
    .map((employee) => {
      return `
        <tr>
            <th>${employee.id}</th>
            <th>${employee.name}</th>
            <th>${employee.salary}</th>
            <th>${employee.age}</th>
        </tr>`;
    })
    .join("\n");
}

function renderTable(employees) {
  const table = `
    <table class="table">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Salary</th>
            </tr>
        </thead>
        <tbody>
            ${renderRows(employees)}
        </tbody>
    </table>`;
  const div = document.createElement("div");
  div.innerHTML = table;
  document.querySelector("body").append(div);
}

pobierz.addEventListener("click", function () {
  fetch("./data.json")
    .then((res) => res.json())
    .then((data) => renderTable(data));
});
