-- CreateTable
CREATE TABLE "User" (
    "first_name" TEXT NOT NULL,
    "last_name" TEXT,
    "email" TEXT NOT NULL PRIMARY KEY,
    "password" TEXT NOT NULL,
    "Role" TEXT NOT NULL DEFAULT 'Student'
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
