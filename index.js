let actualHours = 45;
let hourlyRate = 50;
let overtime = 1.5;
let weeklyHours = 40;

let overtimeHours = actualHours > weeklyHours ? actualHours - weeklyHours : 0;
let normalHours = actualHours > weeklyHours ? weeklyHours : actualHours;
let normalPay = normalHours * hourlyRate;
let overtimePay = overtimeHours * hourlyRate * overtime;

let totalPay = normalPay + overtimePay;

console.log(`The total pay is $${totalPay}`);
