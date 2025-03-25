document.getElementById("addRowButton").addEventListener("click", function() {
    const table = document.getElementById("studentTable").getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    
    const rowCount = table.rows.length;
    cell1.textContent = rowCount;
    cell2.textContent = "Mahasiswa Baru";
    cell3.textContent = "2224101010XX";
});