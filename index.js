class Student {
    constructor(university, course, fullName) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.mark = [5, 4, 4, 5];
        this.dismiss = false;
    }

    getInfo() {
        return "Студент " + this.university + " курсу номер " + this.course + " " + this.fullName;
    }

    get studentMarks() {
        if (!this.dismiss) {
            return this.mark;
        } else {
            return null;
        }
    }

    set marks(newValue) {
        if (!this.dismiss) {
            return this.mark.push(newValue);
        } else {
            return null;
        }
    }

    getAverageMark() {
        let sum = 0;
        for (let i = 0; i < this.mark.length; i++) {
            sum = sum + this.mark[i];
        }
        return sum / this.mark.length;
    }
    dismissed(){
        this.dismiss = true;
}
    recovered(){
        this.dismiss = false;
    }
}

let student = new Student("Высшей Школы Мошенничества", 4, 'Остап Бендер');
console.log(student.getInfo());
console.log(student.studentMarks);
student.marks = 5;
console.log(student.studentMarks);
console.log(student.getAverageMark());
student.dismissed();
console.log(student.studentMarks);
student.recovered();
console.log(student.studentMarks);