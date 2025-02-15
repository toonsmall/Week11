import { useState } from "react"
import MyMenu from "./templates/mymenu";
import MyFooter from "./templates/myfooter";

function MyContact() {
    return (
        <div className="m-0">
             <h1 className="text-xl font-bold p-2 mb-5 dark:text-white border-$-8 border-teal-600">ข้อมูลติดต่อฉัน</h1>
             <div className="flex flex-row justify-center">
                กมลวรรณ  พรหมเมฆ<br/>
                Kamonwan  Prommake<br/>
             </div>
            <MyFooter />
        </div>
    );
}

export default MyContact;
