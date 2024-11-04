function add_task() {
  const task_input = $("#task_input");
  const task_list = $("#task_list");

  if (task_input.val().trim() !== "") {
    const new_task = $("<li></li>").addClass("flex items-center justify-between p-2 bg-gray-100 rounded mb-2");
    const task_text = $("<span></span>").text(task_input.val().trim());
    const remove_button = $("<button></button>").text("Remover").addClass("ml-4 text-red-500 hover:underline").on("click", function() { remove_task(new_task); });

    new_task.append(task_text, remove_button);
    task_list.append(new_task);
    task_input.val("");
  }
}
  
function remove_task(task) {
  task.fadeOut(300, function() {
    $(this).remove();
  });
}