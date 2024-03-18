// // import PropType from 'prop-types'
// interface RealProps {
//     name: string,
//     age: number,
//     isStudent: boolean,
//     picture: string
// }
// function Student({ name, age, isStudent, picture }: RealProps) {
//     return (
//         <div className="body">
//             <img src={picture} alt="" width={'200px'} height={'200px'} />
//             <p>Name: {name}</p>
//             <p>Age: {age}</p>
//             <p>Student: {isStudent ? "Yes" : "No"}</p>
//         </div>
//     )
// }
// export default Student
interface objInterface {
    company: string,
    college: string,
    school: string
}
interface RealProps {
    name: string,
    age: number,
    desc: objInterface
}
function Student({ name, age, desc }: RealProps) {
    return (
        <p>
            Name: {name}
            <br />
            Age: {age}
            <br />
            Description: {desc.company}
        </p>
    )
}

export default Student