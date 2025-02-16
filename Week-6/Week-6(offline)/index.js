const jwt = require("jsonwebtoken");
const JWT_SECRET = "hehehe";
const zod = require("zod");

const emailSchema = zod.string().email();
const passwrodSchema = zod.string().min(6);
//sign in---------------------------------------
const sign = (username, password) => {
  const usenameresponse = emailSchema.safeParse(username);
  const passwordresponse = passwrodSchema.safeParse(password);
  if (!usenameresponse.success || !passwordresponse.success) {
    return null;
  }
  const signature = jwt.sign(
    {
      username,
    },
    JWT_SECRET
  );
  return signature;
};

const ans = sign("hehe@gmail.com", "ahsshfgkffksdks");
console.log(ans);

//verify----------------------------------------------------
const verifyJWT = (token) => {
  let ans1 = true;
  try {
    jwt.verify(token, JWT_SECRET);
  } catch (e) {
    ans1 = false;
  }
  return ans1;
};
const verify1 = verifyJWT("hehehehehhe");
console.log(verify1);

console.log("\n");
//decode----------------------------------------------------
const decode = (token) => {
  const decoded = jwt.decode(token);
  if (decoded) {
    return true;
  } else {
    return false;
  }
};
const decode1 = decode("hehehehhe");
console.log(decode1);

const decoder = decode(ans);
console.log(decoder);
