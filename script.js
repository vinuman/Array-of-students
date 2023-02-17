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

//firstGame

let playGame = confirm("Shall we play a game?");

if(playGame){
    //play
    let playerChoice = prompt("please enter rock, paper or scissors.");
    if(playerChoice){
       let playerOne = playerChoice.trim().toLowerCase();
       if(playerOne==="rock" || playerOne==="paper" || playerOne==="scissors"){
           let computerChoice =     Math.floor(Math.random()*3 +1);
           let computer = computerChoice === 1 ? "rock"
           : computerChoice === 2 ? "paper"
           : "scissors";
           let result = playerOne === computer 
           ? `playerOne:${playerOne}\n computer:${computer}\n Tie Game!`
  : playerOne === "rock" && computer === "paper" 
  ? `playerOne:${playerOne}\n computer:${computer}\nComputer wins!` 
  : playerOne === "paper" && computer === "Scissors" 
  ? `playerOne:${playerOne}\n computer:${computer}\nComputer wins!` 
  : playerOne === "Scissors" && computer === "rock" 
  ? `playerOne:${playerOne}\n computer:${computer}\nComputer wins!`  
  : `playerOne:${playerOne}\n computer:${computer}\n PlayerOne wins!` 
  alert(result);
  let playAgain = prompt("play again? type in yes to play again");
  playAgain=== "yes" ? location.reload() : alert("ok, thanks for playing");
       }else{
        alert("you didnt enter rock, paper or scissors");
       }
    } else{
        alert("Guess you changed yuor mind!");
    }
}else{
    alert("Ok, maybe later");
}
