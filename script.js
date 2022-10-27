'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
console.log(account1);
for (const account of accounts) {
  if (account.owner === 'Jessica Davis') {
    console.log(account);
  }
}
console.log(accounts.find((mov, i) => mov.owner === 'Sarah Smith'));
const movement = movements.forEach(function (mov, i) {
  if (mov > 1) console.log(`${i + 1}: You deposited ${mov}`);
  else console.log(`${i + 1}: You withdrew ${Math.abs(mov)}`);
});
currencies.forEach(function (values, key, map) {
  console.log(`${key}`);
});

// containerApp.opacity = 100;
const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  // console.log(containerMovements.innerHTML);
  movements
    // .sort((a, b) => a - b)
    .forEach(function (mov, i) {
      const type = mov > 0 ? 'deposit' : 'withdrawal';
      // console.log(`${type}`);
      const html = `
    <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
        i + 1
      } ${type}</div>
          <div class="movements__value">${mov}</div>
        </div>`;
      containerMovements.insertAdjacentHTML('afterbegin', html);
    });
};
// displayMovements(account1.movements);
// accounts.forEach(accounts.reduce((acc, mov) => acc + mov, 0));
// balanceValue(account1.movements);
// labelBalance.textContent = balanceValue;
const juliet = [3, 5, 2, 12, 7];
console.log(juliet.slice(1, 3));
juliet.splice(1, 3);
// console.log(juliet.splice(-2));

console.log(juliet);
const totalSum = movements.reduce((acc, mov) => acc + mov, 0);
console.log(totalSum);
const jonasBal = account1.movements.reduce((acc, mov) => acc + mov, 0);
console.log(jonasBal);
for (const [i, el] of movements.entries()) {
  if (el > 0) console.log(`${i + 1}: You deposited ${el}`);
  else console.log(`${i + 1}: You withdrew ${el}`);
}
const user = 'Steven Thomas William';
const myUser = user.toLowerCase().split(' ');
const arr = [];
for (const n of myUser) {
  const correct = n.replace(n[0], n[0].toUpperCase());
  arr.push(correct);
}
console.log(arr);
console.log(
  account1.owner
    .toLowerCase()
    .split(' ')
    .map(mov => mov[0])
    .join('')
);
const arr1 = [];
const username = account1.owner.toLowerCase().split(' ');
for (const n of username) {
  arr1.push(n[0]);
}
console.log(arr1.join(''));
// const createUsername = function (acts) {
//   acts.forEach(function (acc) {
//     acc.username = acc.owner
//       .toLowerCase()
//       .split(' ')
//       .map(mov => mov[0])
//       .join('');
//   });
// };
// createUsername(accounts);
// console.log(accounts);
const createUsername = function (account) {
  account.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(mov => mov[0])
      .join('');
  });
};
createUsername(accounts);
const calcPrintbalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}`;
};
// console.log(accounts);
const calcDisplaySummary = function (movements) {
  const summaryIncome = movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${summaryIncome}`;
};
// calcDisplaySummary(movements);
const calcDisplayWithdrawal = function (movements) {
  const summaryWithdrawal = movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(summaryWithdrawal)}`;
};
// calcDisplayWithdrawal(movements);
const calcDisplayInterest = function (movements) {
  const interest = movements
    .filter(mov => mov > 0)
    .map(mov => (mov * currentAccount.interestRate) / 100)
    .filter(function (mov) {
      return mov > 1;
    })
    .reduce((acc, mov) => acc + mov, 0);
  labelSumInterest.textContent = `${interest}`;
};
// calcDisplayInterest(movements);
// console.log(movements.sort((a, b) => a - b));
console.log(
  movements
    .filter(mov => mov > 0)
    .map(mov => mov * 0.012)
    .reduce((acc, mov) => acc + mov)
);
//SPLICE METHOD IN PRACTICE
const checkDogs = function (a, b) {
  a.splice(0, 1);
  a.splice(-2);
  const fullArray = a.concat(b);
  fullArray.forEach(function (mov, i) {
    if (mov >= 5)
      console.log(`Dod number ${i + 1} is an adult, and is ${mov} years old.`);
    else console.log(`Dog number ${i + 1} is still a puppy 🐶.`);
  });
  // console.log(a.concat(b));
};
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

const surname = 'ajayi abiodun samson';
console.log(
  surname
    .split(' ')
    .map(mov => mov[0])
    .join('')
);
const short = [];
const surname2 = 'ajayi ABiodun samson';
const sur = surname.toLowerCase().split(' ');
const okay = sur.forEach(function (mov) {
  short.push(mov.replace(mov[0], mov[0].toUpperCase()));
});
okay;
console.log(short);
const calcavgHumanAge = function (ages) {
  const humanAge = ages
    .map(function (mov) {
      if (mov <= 2) return mov * 2;
      else return 16 + mov * 4;
    })
    .filter(mov => mov >= 18)
    .reduce((acc, mov, i, arr) => acc + mov / arr.length, 0);
  console.log(humanAge);
};
calcavgHumanAge([5, 2, 4, 1, 15, 8, 3]);
console.log(movements.map(mov => mov > 1000));
const movements1 = [200, 450, -400, 3000, -650, -130, 70, 1300];

const max = movements1.reduce(function (acc, mov) {
  if (acc > mov) return acc;
  else return mov;
}, movements1[0]);
console.log(max);
const min = movements1.reduce(function (acc, mov) {
  if (acc < mov) return acc;
  else return mov;
});
console.log(min);
(() => console.log('Samson is a guy'))();
const cardPin = function (numba) {
  console.log(numba);
  const first = numba + '';
  const secret = first.slice(-4);
  console.log(secret);
  console.log(typeof numba, typeof first);
  console.log(secret.padStart(first.length, '*'));
};
cardPin(12342324514);
const firstDeposit = movements1.find(mov => mov > 0);
console.log(movements1);
console.log(firstDeposit);
let currentAccount;
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    acc => inputLoginUsername.value === acc.username
  );
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    containerApp.style.opacity = 100;
    displayMovements(currentAccount.movements);
    calcDisplayWithdrawal(currentAccount.movements);
    calcDisplaySummary(currentAccount.movements);
    calcDisplayInterest(currentAccount.movements);
    inputLoginUsername.value = inputLoginPin.value = '';
    labelWelcome.textContent = `Welcome back ${
      currentAccount.owner.toLowerCase().split(' ')[0]
    }`;
    calcPrintbalance(currentAccount);
  }
  console.log(currentAccount);
});
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAccount = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  // const calcPrintbalance = function (acc) {
  //   acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  // };
  // labelBalance.textContent = `${acc.balance}`;
  if (
    amount > 0 &&
    currentAccount.balance >= amount &&
    receiverAccount.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAccount.movements.push(amount);
    const updateUI = function (acc) {
      displayMovements(acc.movements);
      calcPrintbalance(currentAccount);
      calcDisplaySummary(acc.movements);
    };
    updateUI(currentAccount);
  }
});
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    accounts.splice(index, 1);
    console.log(accounts);
    containerApp.style.opacity = 0;
  }
});
// const sumIn = function (account) {
//   const innerCome = account.forEach(function (acc) {
//     acc.movements.reduce((acc, mov) => acc + mov, 0);
//   });
//   console.log(innerCome);
// };
// sumIn(accounts);
const position = movements.findIndex(mov => mov < 0);
console.log(position, movements);
const future = new Date();
console.log(+future);

function person(details) {
  console.log(details.age);
}
person({
  name: 'Samson',
  age: 27,
});
console.log(typeof String(7));
const today = new Date(2022, 8, 15);
// const tod = today.getMonth();
const tod = today.toLocaleString('en-US', { year: '2-digit' });
console.log(tod);
console.log(Date.now());
console.log(new Date(1662676176713));
