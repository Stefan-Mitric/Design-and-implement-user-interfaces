// Execute code when DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
  // Get elements for password toggle
    const togglePasswordButton = document.getElementById("togglePassword");
    const passwordInput = document.getElementById("password");
  
    // Toggle password visibility
    togglePasswordButton.addEventListener("click", function(event) {
      event.preventDefault(); // Prevent default action
      const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
      passwordInput.setAttribute("type", type);
      const loginForm = document.getElementById("loginForm");
      
      // Login logic
      loginForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission
    
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        
        // Validate login credentials
        if (username === "Admin" && password === "123") {
          window.location.href = "Notenuebersicht.html"; // Redirect to grades overview
        } else {
          alert("Wrong Username or Password"); // Show error message
        }
      });
    });
});

// Code for semester dropdown
document.addEventListener('DOMContentLoaded', function () {
	document.SemesterForm.Semester.addEventListener('change', CheckAuswahl);

	function CheckAuswahl() {
		var menu = document.SemesterForm.Semester;
		document.querySelector('output')
			.innerHTML = menu.options[menu.selectedIndex].value;
	}
});
const semesterForm = document.SemesterForm.Semester;
const gradesTable = document.getElementById("gradesTable").getElementsByTagName('tbody')[0];

// Update table based on selected semester
semesterForm.addEventListener('change', function() {
  const selectedSemester = semesterForm.options[semesterForm.selectedIndex].value;
  gradesTable.innerHTML = ""; // Clear table
  let data;
  switch (selectedSemester) {
    case 'Auswahl':
      data = [
        { subject: '-----', grade: 0.0, tag: '-----' },
        { subject: '-----', grade: 0.0, tag: '-----' },
        { subject: '-----', grade: 0.0, tag: '-----' },
        { subject: '-----', grade: 0.0, tag: '-----' },
        { subject: '-----', grade: 0.0, tag: '-----' },
      ];
      break;
    case 'S1':
      data = [
        { subject: 'Module 116', grade: 5.0, tag: 'S1' },
        { subject: 'Module 114', grade: 4.5, tag: 'S1' },
        { subject: 'Module 226', grade: 4.5, tag: 'S1' },
        { subject: 'Module 356', grade: 4.0, tag: 'S1' },
        { subject: 'Module 321', grade: 5.0, tag: 'S1' },
        { subject: 'Module 166', grade: 4.0, tag: 'S1' },
        { subject: 'Module 167', grade: 3.5, tag: 'S1' },
      ];
      break;
    case 'S2':
      data = [
        { subject: 'Module 221', grade: 4.5, tag: 'S2' },
        { subject: 'Module 245', grade: 4.0, tag: 'S2' },
        { subject: 'Module 123', grade: 5.0, tag: 'S2' },
        { subject: 'Module 124', grade: 5.0, tag: 'S2' },
        { subject: 'Module 222', grade: 5.0, tag: 'S2' },
        { subject: 'Module 243', grade: 4.0, tag: 'S2' },
        { subject: 'Module 312', grade: 3.5, tag: 'S2' },
        { subject: 'Module 311', grade: 4.5, tag: 'S2' },
      ];
      break;
      case 'S3':
        data = [
          { subject: 'Module 444', grade: 4.0, tag: 'S3' },
          { subject: 'Module 217', grade: 5.0, tag: 'S3' },
          { subject: 'Module 678', grade: 6.0, tag: 'S3' },
          { subject: 'Module 576', grade: 6.0, tag: 'S3' },
          { subject: 'Module 675', grade: 5.0, tag: 'S3' },
        ];
        break;
        case 'S4':
          data = [
            { subject: 'Module 111', grade: 4.0, tag: 'S4' },
            { subject: 'Module 222', grade: 4.0, tag: 'S4' },
            { subject: 'Module 333', grade: 3.0, tag: 'S4' },
            { subject: 'Module 444', grade: 4.0, tag: 'S4' },
            { subject: 'Module 555', grade: 4.0, tag: 'S4' },
          ];
          break;
          case 'S5':
            data = [
              { subject: 'Module 888', grade: 4.0, tag: 'S5' },
              { subject: 'Module 777', grade: 5.0, tag: 'S5' },
              { subject: 'Module 999', grade: 6.0, tag: 'S5' },
              { subject: 'Module 998', grade: 6.0, tag: 'S5' },
              { subject: 'Module 098', grade: 5.0, tag: 'S5' },
            ];
            break;
    default:
      data = [];
  }

  // Populate table with new data
  data.forEach(row => {
    const newRow = gradesTable.insertRow();
    newRow.insertCell(0).innerText = row.subject;
    newRow.insertCell(1).innerText = row.grade;
    newRow.insertCell(2).innerText = row.tag;
  });
});
    // Function to update table
    function updateTable() {
      const selectedSemester = semesterForm.options[semesterForm.selectedIndex].value;
      allEntriesTableBody.innerHTML = "";
  
      allEntries.forEach(entry => {
        if (entry.semester === selectedSemester || selectedSemester === "Alle") {
          const newRow = allEntriesTableBody.insertRow();
          newRow.insertCell(0).innerText = entry.semester;
          newRow.insertCell(1).innerText = entry.subject;
          newRow.insertCell(2).innerText = entry.grade;
        }
      });
    }
  
    // Update the table when semester changes
    semesterForm.addEventListener("change", updateTable);
  
    // Add new entries to allEntries array
    allEntries.push({ semester: newTag, subject: newSubject, grade: newGrade });
  
    // Update table
    updateTable();