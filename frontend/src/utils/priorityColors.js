export function priorityBadge(task) {
  return `badge ${
    task.priority === "Low"
      ? "badge-info"
      : task.priority === "Medium"
      ? "badge-warning"
      : "badge-error"
  }`;
}
