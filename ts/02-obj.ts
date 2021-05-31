class Student {
    name(): void {
        console.log("typeScript")
    }
}

let student = new Student();
student.name()

// tsc 02-obj.ts编译成js文件
// node 02-obj.js运行