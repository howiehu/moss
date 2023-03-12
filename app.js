//设定变量：意图“给定两个数字并实现加法”、任意两个数字、以及预期的结果
const intent = "给定两个数字并实现加法";
const number1 = 5;
const number2 = 7;
const expected = 12;

//将意图、输入的两个数字传入到函数中进行计算
const result = number1 + number2;

//将返回的结果与预期结果进行匹配
if(result === expected){
  //若结果与预期相匹配，输出提示，格式为:
  console.log(`意图：${intent}\n输入参数：${number1}，${number2}\n执行结果：${result}`);
}else{
  //若结果与预期不匹配，输出结果:
  console.log("执行错误！");
  console.log(`预期结果：${expected}`);
  console.log(`实际结果：${result}`);
}
