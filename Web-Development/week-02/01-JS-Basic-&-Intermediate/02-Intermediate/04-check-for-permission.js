/*
question : Check for permissions from roles
input : roles={ admin:["read","write"], user:["read"], staff: ["write"]}
    checkRole="user",
    action="write"

output : false
*/

const input = (roles = {
  admin: ["read", "write"],
  user: ["read"],
  staff: ["write"],
});
// ((checkRole = "user"), (action = "write"));

const checkRole = "staff";
const action = "write";

const permissions = roles[checkRole];
console.log(permissions);

const ans = permissions.includes(action);
console.log(ans);
