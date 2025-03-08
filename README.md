# 💖 Love Meter - Love Calculator

This is a fun Love Meter web app that calculates the love percentage between two names using a custom algorithm.

## ✨ Screenshots

### Home Screen
![Image](https://github.com/user-attachments/assets/7837690a-ad3f-48e4-8676-5a574a541896)

### Input Names
![Input Names](![image](https://github.com/user-attachments/assets/488e61d9-7353-49b9-baaa-00020730ddd1)
)

### Love Result
![Love Result](![image](https://github.com/user-attachments/assets/b88fa79d-5dce-4140-bef4-c4165550b02b)
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
