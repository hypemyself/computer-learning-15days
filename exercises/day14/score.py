scores = [88, 76, 92]

for score in scores:
    if score >= 60:
        print(score, "及格")
    else:
        print(score, "需要复习")


def average(numbers):
    return sum(numbers) / len(numbers)


print("平均分：", average(scores))
