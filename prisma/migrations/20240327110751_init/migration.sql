-- CreateTable
CREATE TABLE "students" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(225) NOT NULL,
    "address" VARCHAR(225) NOT NULL,

    CONSTRAINT "students_pkey" PRIMARY KEY ("id")
);
