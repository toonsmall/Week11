function MyProfile() {
return(
    <>
     <div className= "p-5 m-5 border-2 border-teal-500 rounded">
        <h1 className="text-x1 font-bold">My Profile</h1>
        <p>
    Name :  Kamonwan Prommake <br/>
    Student Code :  026740491608-7
        </p>
        </div>
        <MyEducation/>
    
    </>
    
    );
}

function MyEducation() {
return(
    <div className="p-5 m-5 border-2 border-red-500 rounder">
        <h1 className="text-xl font-bld text-amber-700">Education background"</h1>
        <ul className="list-disc">
            <li>Information Technology , RMUTTO, 2567-Present</li>
            <li>Xxxx, xxx, 999-999</li>
            <li>Yyyy, yyy, 999-999</li>
        </ul>
    </div>
);
}

export default MyProfile;