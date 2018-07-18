# guess-number-kata

## Tasking

1. 比较输入和答案（输入和答案硬编码）输出结果（*A *B）
    - 假定答案为 `1 2 3 4` 输入是固定的为 `1 2 3 4` 结果输出 `4A0B`
    - 假定答案为 `1 2 3 4` 输入是固定的为 `5 6 7 8` 结果输出 `0A0B`
    - 假定答案为 `1 2 3 4` 输入是固定的为 `4 3 2 1` 结果输出 `0A4B`
2. 在控制台中输入4位数，进行验证
    
    当输入为不合法的时候提示重新输入，不合法的输入如下：
    - `1 2 a 4`
    - `1`
    - `1 2 3 4 5`
    - `1 1 2 3`
    - `12 3 4`
    
    当输入合法时返回输入的4位数
3. 随机生成4位答案
    
    无输入，返回4位不重复的数

4. 加6次机会，输入正确提示成功，不正确就继续输入答案，六次机会用完提示失败并结束程序

    假定答案为 `1 2 3 4`
    - 输入 `1 2 3 4`， 输出 `4A0B` 提示 `Success`，程序退出
    - 输入 `1 3 4 2`， 输出 `1A3B`，当6次机会没用完时继续输入，当机会用完时提示 `Failure` 
## 整个程序输入输出

假定答案为 `1 2 3 4`
- 输入 `1 2 3 4`，输出 `4A0B` 和 `Success`
- 输入 `12 3 4`，输出 `格式有误，重新填写`
- 输入 `1 3 2 0`，输出 `1A2B`，当6次机会没用完时继续输入，当机会用完时提示 `Failure` 

