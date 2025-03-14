const assigned = document.getElementById("task_assigned");
const count = document.getElementById("count");
const activity = document.getElementById("activity");
const clear = document.getElementById("clear");

document.addEventListener("click", function(event) {
    if (event.target.classList.contains("complete")) {
        event.target.classList.add("btn-disabled", "bg-gray-400", "hover:bg-gray-400");
        event.target.disabled = true;

        let assigned_value = parseInt(assigned.innerText);
        assigned.innerText = assigned_value - 1;

        let total_count = parseInt(count.innerText);
        count.innerText = total_count + 1;

        // Find the closest parent container (div) and get the <h2> inside it
        let taskContainer = event.target.closest("div.bg-blue-50"); 
        let taskName = taskContainer.querySelector("h2").innerText; // Default if not found

        activity.innerHTML += `
            <p class="text-gray-600 bg-blue-50 p-2 rounded-lg">
                ✅ You have completed "${taskName}" at ${instant_time}
            </p>
        `;
    }

});
clear.addEventListener("click", function() {
    // Select all <p> inside the activity log and remove them
    activity.querySelectorAll("p").forEach(p => p.remove());
});