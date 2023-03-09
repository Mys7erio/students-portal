import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


export async function checkLogin(email, password){
    let user = await prisma.User.findFirst({
        where: {email: email, password: password}
    })
    return user
}

export async function checkSession(sessionId){
    let session = await prisma.Session.findUnique({
        where: {cookie: sessionId}
    })
    return session
}

export async function registerSession(sessionId, email){
    let session = await prisma.Session.create({
        data: {
            cookie: sessionId,
            userEmail: email
        }
    })
    return session
}

export async function getAttendance(userEmail) {
    
}