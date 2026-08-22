print("=== 成绩计算器 ===")
first = float(input("第一门成绩："))
second = float(input("第二门成绩："))
third = float(input("第三门成绩："))

average = (first + second + third) / 3
print("平均分：", round(average, 1))

if average >= 60:
    print("结果：达到及格线")
else:
    print("结果：需要继续复习")
