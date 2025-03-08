# 💖 Love Meter - Love Calculator

This is a fun Love Meter web app that calculates the love percentage between two names using a custom algorithm.

## ✨ Screenshots
### Home Screen
<p align="center">
  <img src="https://github.com/user-attachments/assets/7837690a-ad3f-48e4-8676-5a574a541896" alt="Home Screen" width="600">
</p>

### Input Names
<p align="center">
  <img src="https://github.com/user-attachments/assets/894aa849-a767-487a-8a75-cdc6dffaec7c" alt="Input Names" width="600">
</p>

### Love Result
<p align="center">
  <img src="https://github.com/user-attachments/assets/f2fd919f-91bc-48c7-ac93-163dd5070c0b" alt="Love Result" width="600">
</p>




## 🚀 Features

- Enter two names and get a "love percentage."
- Simple and interactive UI.
- Uses a custom algorithm to compute love compatibility.
- Beautiful pink-themed aesthetic.

---

## 🛠️ Love Calculation Algorithm

### Algorithm Explanation:

1. **Input Names:** The user enters two names.
2. **Preprocessing:** Remove any non-alphabet characters and convert them to lowercase.
3. **Count Letter Frequency:**
   - Merge both names into a single string.
   - Count the occurrences of each unique letter.
4. **Reduce to Two Digits:**
   - Arrange counts in a list.
   - Sum pairs of numbers (first and last, second and second last, etc.).
   - Repeat the process until only two digits remain.
5. **Compute Love Percentage:** The final two numbers are combined to form a percentage.

### Example:
For **"Ronaldo"** & **"Messi"**:
- Letters counted → `[1, 2, 1, 1, 1, 1, 2, 1, 2, 1]`
- Pair-wise summing → `[2, 4, 2, 2, 3] → [5, 6, 4] → [9, 6]`
- **Love Score: 96% ❤️**
