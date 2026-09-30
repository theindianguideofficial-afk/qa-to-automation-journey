function step1() { return new Promise(r => setTimeout(() => r('step1 done'), 300)); }
function step2() { return new Promise(r => setTimeout(() => r('step2 done'), 300)); }
function step3() { return new Promise(r => setTimeout(() => r('step3 done'), 300)); }


async function runInParallel() {
  const [result1, result2, result3] = await Promise.all([
    step1(),
    step2(),
    step3()
  ]);
  console.log(result1, result2, result3);
}
runInParallel();
