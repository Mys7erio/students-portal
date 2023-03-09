-- CreateTable
CREATE TABLE "Attendance" (
    "day" DATETIME NOT NULL PRIMARY KEY
);

-- CreateTable
CREATE TABLE "_AttendanceToUser" (
    "A" DATETIME NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_AttendanceToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Attendance" ("day") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_AttendanceToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User" ("email") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Session" (
    "cookie" TEXT NOT NULL PRIMARY KEY,
    "created" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userEmail" TEXT NOT NULL,
    CONSTRAINT "Session_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "User" ("email") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Session" ("cookie", "created", "userEmail") SELECT "cookie", "created", "userEmail" FROM "Session";
DROP TABLE "Session";
ALTER TABLE "new_Session" RENAME TO "Session";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "Attendance_day_key" ON "Attendance"("day");

-- CreateIndex
CREATE UNIQUE INDEX "_AttendanceToUser_AB_unique" ON "_AttendanceToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_AttendanceToUser_B_index" ON "_AttendanceToUser"("B");
