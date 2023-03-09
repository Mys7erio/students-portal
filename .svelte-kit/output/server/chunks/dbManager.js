import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function checkLogin(email, password) {
  let user = await prisma.User.findFirst({
    where: { email, password }
  });
  return user;
}
async function checkSession(sessionId) {
  let session = await prisma.Session.findUnique({
    where: { cookie: sessionId }
  });
  return session;
}
async function registerSession(sessionId, email) {
  let session = await prisma.Session.create({
    data: {
      cookie: sessionId,
      userEmail: email
    }
  });
  return session;
}
export {
  checkLogin as a,
  checkSession as c,
  registerSession as r
};
