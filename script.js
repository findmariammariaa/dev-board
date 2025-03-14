const assigned = document.getElementById("task_assigned");
const count = document.getElementById("count");
const activity = document.getElementById("activity");
const clear = document.getElementById("clear");

document.addEventListener("click", function(event) {
    if (event.target.classList.contains("complete")) {
        event.target.classList.add("btn-disabled", "bg-gray-400", "hover:bg-gray-400");
        event.target.disabled = true;

        let assigned_value = parseInt(assigned.innerText) - 1;
        assigned.innerText = assigned_value;

        let total_count = parseInt(count.innerText);
        count.innerText = total_count + 1;

        let taskContainer = event.target.closest("div.bg-blue-50"); 
        let taskName = taskContainer.querySelector("h2").innerText;

        activity.innerHTML += `
            <p class="text-gray-600 bg-blue-50 p-2 rounded-lg my-4">
                ✅ You have completed "${taskName}" at ${instant_time}
            </p>
        `;
        alert("Board Updated Successfully")
        if (assigned_value === 0) {
            alert("🎉 Congratulations! You have completed all the tasks.");
        }
    }

    
});
clear.addEventListener("click", function() {
    activity.innerHTML = "";
});