function showSection(section){
let sections = document.querySelectorAll("section");
sections.forEach(s=>{
s.classList.add("hidden");
});
document.getElementById(section).classList.remove("hidden");
}

let attendance = 0;

function markAttendance(){
attendance++;
document.getElementById("attendanceText").innerText =
"Days Attended: " + attendance;
}

function askAI(){
let q = document.getElementById("question").value.toLowerCase();
let ans = "Practice daily to improve.";
if(q.includes("python"))
ans = "Focus on loops, functions, and solving problems.";
if(q.includes("sql"))
ans = "Practice SELECT queries and JOINS.";
if(q.includes("power bi"))
ans = "Learn charts and dashboard building.";
document.getElementById("answer").innerText = ans;
}
