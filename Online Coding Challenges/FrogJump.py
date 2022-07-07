import math
def calcFrogJump(x, y, d):
    return math.ceil((y-x)/d)
print(calcFrogJump(10, 85, 30))