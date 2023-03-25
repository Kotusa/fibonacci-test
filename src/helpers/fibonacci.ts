export const fibonacci = (num: number): number => {
  let prev = 0;
  let next = 1;

  for (let i = 0; i < num; i++) {
    let temp = next;

    next = prev + next;
    prev = temp;
  }

  return prev;
};
