# BrainsterChallenges_LutmiraPeciFE3

## Dynamic Day Planner

This project is a **Dynamic Day Planner** that allows users to manage their daily tasks by adding, removing, and saving tasks to local storage. The planner highlights tasks that are scheduled for the current day to visually inform the user.

## Features

- **Add Tasks**: Users can add new tasks by specifying the description, time, and date.
- **Remove Tasks**: Users can remove individual tasks using a "Remove" button.
- **Highlight Current Day Tasks**: Tasks scheduled for the current day are highlighted for better visibility.
- **Persistent Storage**: Tasks are saved to the browser's `localStorage` so that they remain available even after the page is reloaded.

## Technologies Used

- **HTML**: For structuring the web page.
- **CSS**: Basic styling, including Bootstrap 5 for layout and responsiveness.
- **JavaScript**: Handles dynamic functionality, including task addition, removal, and saving to `localStorage`.
- **Bootstrap 5.3**: Provides a responsive grid layout and prebuilt styles for form controls and buttons.

## How It Works

1. **Add New Task**:

   - Users input a task description, time, and date into the provided fields.
   - Clicking the "Add Task" button adds the task to the list and saves it to `localStorage`.
   - If the task's date matches the current date, the task is highlighted with a yellow background.

2. **Remove a Task**:

   - Each task has a "Remove" button next to it.
   - Clicking the "Remove" button will delete the task from the list and update the saved tasks in `localStorage`.

3. **Task Persistence**:
   - Tasks are saved to `localStorage`, so even if the user refreshes the page or closes the browser, the tasks will remain.

## Project Structure

```plaintext
.
├── index.html        # Main HTML structure of the day planner
├── script.js         # JavaScript file handling task logic and localStorage interactions
├── README.md         # Project readme file (this file)
```

### HTML Overview

- The HTML page uses Bootstrap for styling and layout.
- Inputs are provided for task description, time, and date.
- A button allows the user to add new tasks, which appear as list items in a task list.

### CSS Overview

- Custom styles include highlighting tasks for the current day using the `.highlight-current-date` class.
- Bootstrap is used for layout, form controls, and buttons.

### JavaScript Overview

- **`saveTasks`**: Saves tasks to `localStorage`.
- **`loadTasks`**: Loads tasks from `localStorage` and displays them on the webpage.
- **`addTask`**: Adds a new task to the task list, highlights tasks for the current day, and saves tasks to `localStorage`.

### Functions:

- **`saveTasks()`**:
  - Collects all tasks from the task list and saves them to `localStorage`.
- **`loadTasks()`**:

  - Loads tasks from `localStorage` and displays them on the page.
  - Highlights tasks scheduled for the current date.

- **`addTask()`**:
  - Adds a new task to the list and ensures that tasks scheduled for today are highlighted.
  - Saves the updated task list to `localStorage`.

## Getting Started

### Prerequisites

- A web browser that supports JavaScript and `localStorage`.
- An internet connection to load Bootstrap from a CDN (optional if you choose to use Bootstrap locally).

### Running the Project

1. Clone the repository or download the files.
2. Open the `index.html` file in your web browser.
3. Use the form to add tasks, and observe how they are highlighted, saved, and persisted in `localStorage`.

## Customization

- To change the highlight color for tasks on the current date, modify the `.highlight-current-date` class in the `<style>` section of `index.html`.

```css
.highlight-current-date {
  background-color: #ffeeba; /* You can change this color to suit your design */
}
```

## License

This project is open-source and free to use for personal or educational purposes.
