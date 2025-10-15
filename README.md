# 🔁 String Repeating App

## 📖 Overview

The **String Repeating App** is a simple JavaScript mini-project designed to practice **loops** and **string manipulation**.  
It recreates the functionality of JavaScript’s built-in `.repeat()` method — but entirely from scratch! 🚀  

This project is part of my **JavaScript learning journey** focused on mastering **loops**, **conditionals**, and **string concatenation**. 🧠

---

## 📂 Project Structure

```bash
string-repeating-app/
│
├── .gitignore      # 🧹 Files and folders to be ignored by Git
├── README.md       # 📘 Project documentation
└── source.js       # 💻 Core JavaScript code
```

---

## 🚀 Getting Started

### 🔧 Requirements
- Node.js installed (or any JavaScript runtime environment)
- A text editor or IDE (like VS Code 💜)
- A terminal or console to run your code

### ▶️ Running the Project

1. Clone or download the repository:
```bash
    git clone https://github.com/karianjahi/string-repeating-app.git
    cd string-repeating-app
```

2. Open `source.js` in your code editor.

3. Run the file:
   ```bash
   node source.js
   ```

4. View the output in your terminal 💡

---

## 💡 Code Explanation

Here’s the main logic of the app:

```js
const repeatStringNumTimes = (string, number) => {
    let result = "";
    for (let i = 0; i < number; i++) result += string;
    return result;
}
```

### 🧩 Step-by-step breakdown
1. **Initialize** an empty string `result`.
2. **Loop** `number` times using a `for` loop.
3. **Concatenate** the original string to `result` each time.
4. **Return** the final concatenated string.
5. If `number` ≤ 0 → return an **empty string** `""`.

---

## 🧪 Example Outputs

```js
console.log(repeatStringNumTimes("abc", 3));  // "abcabcabc"
console.log(repeatStringNumTimes("xyz", 1));  // "xyz"
console.log(repeatStringNumTimes("hi", 0));   // ""
console.log(repeatStringNumTimes("loop", -2)); // ""
```

---

## 🧱 Concepts Practiced

- 🔁 **Loops (`for` loop)**
- 🧵 **String concatenation**
- ⚙️ **Function design**
- 🧠 **Conditional return logic**

---

## ⚙️ Key Features

| Feature | Description |
|:--------|:-------------|
| 🔁 **Manual repetition** | Implements `.repeat()` manually using loops |
| 📏 **Flexible input** | Works with any string and any number |
| ⚠️ **Error handling** | Returns an empty string for invalid or zero counts |
| 🎓 **Educational** | Perfect for beginners practicing JavaScript fundamentals |

---

---

## 🪄 License

This project is open-source

---

## ✨ TL;DR Summary

| 🧩 Feature | 🧠 Description |
|:------------|:----------------|
| 🧠 **Purpose** | Recreate JavaScript’s `.repeat()` functionality manually. |
| ⚙️ **Input** | A string and a number. |
| 🎯 **Output** | The string repeated the given number of times. |
| 🧩 **Core Concept** | Looping and string concatenation. |
| 💡 **Learning Focus** | Practicing iteration and conditional logic. |
```
