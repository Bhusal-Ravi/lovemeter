# 💖 Love Meter - Love Calculator

This is a fun Love Meter web app that calculates the love percentage between two names using a custom algorithm.

## ✨ Screenshots

### Home Screen
![Home Screen](![image](https://github.com/user-attachments/assets/488c4056-5b4c-492f-a989-da45a185a6ec)
)

### Input Names
![Input Names](![image](https://github.com/user-attachments/assets/488e61d9-7353-49b9-baaa-00020730ddd1)
)

### Love Result
![Love Result](![image](https://github.com/user-attachments/assets/cee610e3-8975-418f-85e9-1492db9338b4)
)

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
