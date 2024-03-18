import ProfilePic from "./profilePic"
function OnClick() {
    // function ClickNow(name : string) {
    //     console.log(`Click Now ${name}`);
    // }

    //usecase
    // let count = 0;
    // const ClickNow = function (name: string) {
    //     if (count < 2) {
    //         count++;
    //         console.log(`${count} times clicked by ${name}`);
    //     }
    //     else {
    //         console.log(`Stop clicking ${name}`);
    //     }
    // }

    //The reason here we are enclosing with the arrow function is that
    //whenever we call with parameters it will not get called automatically
    //we are just mentioning it  as a callback

    //now we are using the events here for button
    // const ClickNow = (e) => {
    //     e.target.textContent = "enough";
    // }
    //using image to pass
    //passing the events
    return (
        <ProfilePic />
    )
}
export default OnClick