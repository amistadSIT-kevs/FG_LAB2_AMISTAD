import './App.css'

function App() {
  let studentName: string = "KEVIN TUCYAP AMISTAD"
  let course: string = "BSIT, IDA-4"
  let isEnrolled: boolean = true
  let subjects: string[] = [
  "OBJECT-ORIENTED PROGRAMMING",
  "INTRODUCTION TO APPLICATIONS DEVELOPMENT AND EMERGING TECHNOLOGIES",
  "DATABASE MANAGEMENT AND WEB SYSTEMS",
  "NETWORKING AND COMMUNICATION"
  ]

  return (
    <>
      <h1>{studentName}</h1>
        <p>{course}</p>
        <p>{isEnrolled ? "Student is enrolled" : "Student is not enrolled"}</p>
        <ul>
        {subjects.map((subject, index) => (
        <li key={index}>{subject}</li>
        ))}
      </ul>
    </>
  )
}

export default App
