document.addEventListener("DOMContentLoaded", function () {
	var projects = document.querySelectorAll(".projects");
	projects.forEach(function (project) {
		var text = project.querySelector(".text");
		var example = project.querySelector(".example");
		var remainingHeight = project.clientHeight - text.clientHeight;
		example.style.height = `${remainingHeight}px`;
	});
});