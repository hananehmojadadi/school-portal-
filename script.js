function greeting() {
  const welcome = document.getElementById("welcome");
  if (welcome) {
    welcome.textContent = "Welcome, Amina!";
  }
}

//Profile Page
const controls = document.getElementById("controls");
if (controls) {
  controls.addEventListener("click", function(e) {
    const info = document.getElementById("contact-info");
    if (e.target.dataset.action === "showEmail") {
      info.textContent = "Email: amina@gmail.com";
    } else if (e.target.dataset.action === "showPhone") {
      info.textContent = "Phone: +9309897986";
    } else if (e.target.dataset.action === "hideContact") {
      info.textContent = "";
    }
  });
}

const updateStatusBtn = document.getElementById("updateStatus");
if (updateStatusBtn) {
  updateStatusBtn.addEventListener("click", function() {
    const newStatus = document.getElementById("statusInput").value;
    if (newStatus) {
      document.getElementById("status").innerHTML = `Status: ${newStatus}`;
    }
  });
}

// Courses Page 
let courses = [
  { name: "Math", grade: 10 },
  { name: "English", grade: 11 }
];

function renderCourses() {
  const listEl = document.getElementById("courseList");
  if (!listEl) return;

  let list = "";
  for (let course of courses) {
    list += `<li>${course.name} <button data-grade="${course.grade}" class="detailsBtn">Show Details</button></li>`;
  }
  listEl.innerHTML = list;
}

if (document.getElementById("addCourse")) {
  renderCourses();

  document.getElementById("addCourse").addEventListener("click", function() {
    const courseName = document.getElementById("newCourse").value;
    if (courseName) {
      courses.push({ name: courseName, grade: 10 });
      document.getElementById("newCourse").value = "";
      renderCourses();
    } else {
      alert("Please enter a course name");
    }
  });

  document.getElementById("courseList").addEventListener("click", function(e) {
    if (e.target.classList.contains("detailsBtn")) {
      alert(`Grade: ${e.target.dataset.grade}`);
    }
  });
}

//  Contact Page 
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function(e) {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (!name || !email || !message) {
      alert("Please fill in all fields");
    } else {
      alert("Message sent successfully!");
      contactForm.reset();
    }
  });
}