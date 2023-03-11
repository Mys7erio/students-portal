import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()



// ================================ CONFIG ================================

// Adjust the configuration as per your requirements
const BATCHES = [21, 22]                        // year of joining of students
const COURSES = ["BCA", "BCOM", "BBA", "BA"]    // Number of courses taughtin each batch
const SECTIONS = ["A", "B", "C"]      // Number of classes (sections) in each course
const MAX_ROLL_NO = 30                          // Number of students per class
const ECHO = true                               // Print entries as they are being entered into the database





// Creates a number of students starting from 1 to MAX_ROLL_NO
// Students will belong to the class specified by classId
// Student with roll no 15 will always be the class representative of each class
const createStudents = async (maxRoll, classId) => {
    for (let roll = 1; roll <= maxRoll; roll++) {
        if (roll < 10) {roll = `0${roll}`}
        const role = (roll == 15) ? "Class Rep" : "Student"
        const student = await prisma.user.create({
            data: {
                first_name: `Student${roll}`,
                last_name: "",
                email: `${classId}${roll}@organisation.com`,
                password: `student${classId}${roll}`,
                classId: classId, // hopefully this does not have a conflicts with the key
                Role: role
            }
        })

        if (ECHO) { console.log(`[+] Created Student ${roll} (${student.email})`) }
    }
}





// Creates a Teacher for a particular class
const createTeacher = async (classId) => {
    const teacher = await prisma.user.create({
        data: {
            first_name: `Teacher`,
            last_name: "",
            email: `teacher-${classId}@organisation.com`,
            password: `teacher${classId}`,
            classId: classId, // hopefully this does not have a conflicts with the key
            Role: "Teacher",
        }
    })

    if (ECHO) { console.log(`[+] Created Teacher (${teacher.email})`) }
}





// This can also be achieved by using the prisma.TABLE.createMany api
// but it will require some tweaks. Since this project is using 
// prisma.TABLE.create api with sqlite, a file-based database,
// there are no restrictions on bandwith and hence sending multiple
// calls to the database is a viable option.
const createClasses = async () => {

    for (const batch of BATCHES) {
        for (const course of COURSES) {
            for (const section of SECTIONS) {
                const classObj = await prisma.class.create({
                    data: {
                        classId: `${batch}${course}${section}`,
                        batch: batch,
                        course: course,
                        section: section,
                    }
                })
                if (ECHO) {console.log(`[+] Created Class ${classObj.classId}`)}
            }
            }
        }
    }




    
// Main function to automate populating the database with synthetic data
async function Main() {
    // Create classes
    await createClasses()

    // prisma's way of doing a "select * ", haha
    const allClasses = await prisma.class.findMany()

    // Finally create teachers & students for all classes
    for (const classObj of allClasses) {
        await createTeacher(classObj.classId)
        await createStudents(MAX_ROLL_NO, classObj.classId)
    }
}




await Main()