
function openTab(event, tabName) {
    // Hide all tab contents
    var contents = document.querySelectorAll(".tab-content");
    contents.forEach(content => content.style.display = "none");

    // Remove active class from all buttons
    var tabs = document.querySelectorAll(".tab-button");
    tabs.forEach(tab => tab.classList.remove("active"));

    // Show the selected tab and set active class
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.classList.add("active");
}





// Default tab on page load
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("education").style.display = "block";
});


// Function to Open Modal and Show Clicked Image
function openModal(imageSrc) {
    document.getElementById("fullImage").src = imageSrc;
    document.getElementById("imageModal").style.display = "block";
}

// Function to Close Modal
function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}

// Add Event Listeners to All Images
document.addEventListener("DOMContentLoaded", function () {
    let certImages = document.querySelectorAll(".cert-img img"); // Select all certificate images

    certImages.forEach(img => {
        img.addEventListener("click", function () {
            openModal(this.src);



function openGallery(projectKey) {
  const modal = document.getElementById("projectModal");
  const githubLink = document.getElementById("githubLink");
  const projectImages = document.getElementById("projectImages");

  const project = projectData[projectKey];
  githubLink.href = project.github;

  projectImages.innerHTML = '';
  project.images.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    projectImages.appendChild(img);
  });

  modal.style.display = "block";
}

function closeGallery() {
  document.getElementById("projectModal").style.display = "none";
}

function openModal(id) {
    document.getElementById(id).style.display = "block";
  }

  function closeModal(id) {
    document.getElementById(id).style.display = "none";
     } });
    });
});

