/*
    question : Sum all transactions per user
    input : [
        { user: "A", amount: 100 },
        { user: "B", amount: 200 },
        { user: "A", amount: 50 }
    ]

    output : { A: 150, B: 200 }
*/

// solution :

const input = [
  { user: "A", amount: 100 },
  { user: "B", amount: 200 },
  { user: "A", amount: 50 },
];

const ans = input.reduce((acc, curr) => {
  const user = curr.user;

  const amount = curr.amount;

  if (acc[user]) {
    acc[user]+=amount
  } else {
    acc[user] = amount;
  }

  return acc;
}, {});

console.log(ans);
