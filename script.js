let arr = [
    { id: 1, name: "john", age: "18", marks: 80 },
    { id: 2, name: "jack", age: "20", marks: 85 },
    { id: 3, name: "karen", age: "19", marks: 35 },
  ];
  
  function PrintStudentswithMap() {
    //Write your code here , just console.log
    arr.map((student) => {
        if (student.marks > 50) {
          console.log(`Name: ${student.name}`);
        }
      });
  }
  
  function PrintStudentsbyForEach() {
    //Write your code here , just console.log
    arr.forEach((student) => {
        if(student.marks>50){
            console.log(`Name: ${student.name}`);
        }
    }

    );
  }
  
  function addData() {
    //Write your code here, just console.log
    let obj = {
        id:4,
        name:"Susan",
        age:20,
        marks:45
    };
    const hasObj = arr.some(student => student.id === obj.id);
    if(!hasObj){
        arr.push(obj);
    }
    
    console.log(arr);
  }
  
  function removeFailedStudent() {
    //Write your code here, just console.log
    arr.forEach((student, index) =>{
        if(student.marks<50){
            arr.splice(index, 1);
        }
    });
    console.log(arr);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let arr1 = [
    { id: 4, name: "Dave", age: "30", marks: 90 },
    { id: 5, name: "Gray", age: "31", marks: 92 },
    { id: 6, name: "Laura", age: "32", marks: 88 },
    ];
    let myArray = arr.concat(arr1);
    console.log(myArray);
  }