# Execution in GitHub Codespaces:

### Coding Tasks:

navigate to programe file.

To run the code: node programename.js

### Front-End Task:
Download the html file and open with chrome or any web browser.

### About code spaces:
Open your Codespace: Access your GitHub repository by opening the Codespace from the GitHub repository page.

Editing: Edit the files directly within GitHub Codespaces using the in-built VS Code editor.

Live Preview: If you prefer, you can open a live preview by using the "Live Server" extension available in Codespaces. This will automatically show the changes in the browser as you edit the files.

Running: Since these tasks are focused on front-end web development, simply open the .html files in a browser or use the "Go Live" button in VS Code's live preview to run the tasks and see the functionality.

# 1. Reverse String

Explanation:

Approach: The function uses the spread operator to convert the string into an array of characters, reverses the array using .reverse(), and joins it back into a string using .join().

Challenge: Handling edge cases like empty strings or special characters was straightforward with this approach, as these operations naturally handle such cases.

# FizzBuzz

Explanation:
Approach: Used a loop to iterate through numbers 1 to 100. For each number, checked divisibility by 3 and 5, concatenating the respective strings if true.

Challenge: None. The logic for handling the concatenation of "Fizz" and "Buzz" is simple and efficient.

# Even or Odd

Explanation:

Approach: Used the modulus operator (%) to determine if the number is divisible by 2. Returned "Even" for true and "Odd" otherwise.

Challenge: Edge cases like negative numbers or zero were naturally handled due to the mathematical properties of %.

# Interactive Task:

## Explanation of the Approach:

### HTML Structure:

The page has a heading and two buttons: "Click Me" (initially visible) and "Back" (hidden initially). The "Back" button reverts the page to its original state.

### CSS Styling:

Used flexbox to center content on the page.

The container has a clean design with rounded corners and a shadow for visual appeal.
Buttons have hover effects and smooth transitions for an interactive feel.

### JavaScript Functionality:

"Click Me" Button: When clicked, the heading text changes to a random item from an array. The "Click Me" button hides, and the "Back" button appears after a smooth fade-out effect.
"Back" Button: When clicked, the text resets to its original state, and the "Click Me" button reappears.
Efficiency:

Only necessary DOM manipulations occur: updating the heading text and toggling button visibility.
Smooth text transitions are achieved using opacity and setTimeout() to create a seamless user experience.

Challenges Encountered:
Smooth Text Transition:

Achieving a smooth transition when changing the heading text using opacity to fade out and in the text.
Button Visibility Toggle:

Handling the visibility of the "Click Me" and "Back" buttons to ensure they appear and disappear at the right times without affecting the layout.
Dynamic Text Handling:

Managing random text generation from an array using Math.random() and Math.floor() to ensure a unique message each time the button is clicked.
Maintaining Layout Consistency:

Ensuring that toggling button visibility didn’t break the layout or cause any unwanted shifts on the page.
Handling Edge Cases:

Ensuring the "Back" button resets the text and button visibility to their original state each time it's clicked.