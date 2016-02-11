/**
 * Creates demo user and account collection index
 */

print('dump start');

db.accounts.update(
   { "_id": "demo" },
   {
   "_id": "demo",
   "lastSeen": 1455230224279,
   "note": "demo note",
   "expenses": [
      {
         "amount": 10,
         "currency": "USD",
         "icon": "meal",
         "period": "DAY",
         "title": "Grocery"
      }
   ],
   "incomes": [
      {
         "amount": 9100,
         "currency": "USD",
         "icon": "wallet",
         "period": "MONTH",
         "title": "Salary"
      }
   ],
   "saving": {
      "amount": 1500,
      "capitalization": false,
      "currency": "USD",
      "deposit": true,
      "interest": 3.32
   }
   },
   { upsert: true }
);

print('dump complete');