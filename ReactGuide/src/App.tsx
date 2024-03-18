import Student from "./Props/student"
function App() {
  const description1 = {
    school: "KVM",
    college: "BIT",
    company: "Google",
  }
  const description2 = {
    school: "SSR",
    college: "PSG",
    company: "Amazon",
  }
  const description3 = {
    school: "YTY",
    college: "KCT",
    company: "Flipkart",
  }
  const description4 = {
    school: "ERE",
    college: "PSG",
    company: "Myntra",
  }
  const description5 = {
    school: "YTO",
    college: "BIT",
    company: "Juspay",
  }
  const description6 = {
    school: "KVM",
    college: "PSG",
    company: "Microsoft",
  }

  return (
    <>
      <Student name="Harish" age={65} desc={description1} />
      <Student name="Raghav" age={43} desc={description2} />
      <Student name="Pranav" age={58} desc={description3} />
      <Student name="Madhesh" age={65} desc={description4} />
      <Student name="Vikram" age={54} desc={description5} />
      <Student name="Kumar" age={39} desc={description6} />
    </>
  )
}
export default App