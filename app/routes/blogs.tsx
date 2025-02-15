function MyBolgs(){
    var title = "xxx";
    var description = "Yyy...";
    var rating = 5;
    let enable = true;
    const pi = 2.14;

    //alert("Title"+title);
    console.log("Rating:  "+rating);

    // Arrow function
    const getRating =() => {
        return <span>&#11088;&#11088;&#11088;&#11088;&#11088;</span>

    }

    const getRating2 = (r) => {
        let msg = "";
        for(let i=0; i<r; i++){
            msg+= '\u2b50';
        }
        return <span>{msg}</span>;
    }
    return (
        <div className="m-3">
            <h1 className="text-lg font-bold">รีวิว สถานที่ท่องเที่ยว</h1>
            <p><strong>หัวข้อ: </strong> {title}</p>
            <p><strong>รายละเอียด</strong>: {description}</p>
            <p><strong>ชื่นชอบ</strong>: {getRating2(rating)}</p>
            <p><strong>อื่นๆ</strong>:.....</p><br />
            <h1 className="text-lg font-bold">Comments: </h1>
            <Comment
                avatar="\public\images\001.jpg" 
                message="สวัสดีนักท่องเที่ยวทุกคน"
                author="ฺToonsmall"
                top={true}
            />
            <Comment
                avatar="\public\images\001.jpg" 
                message="ยินดีต้อนรับนักท่องเที่ยวทุกคน"
                author="ฺToonsmall"
                top={false}
             />
        </div>

    );
}
//Parameters:
// {avatar, message, author} : {avatar: any, message: any, author: any}
function Comment({avatar, message, author, top}){
return(
<div>
    <GetTop top={top} />
    <img
        src={avatar}
        tital={author}
        width={40}
    /><br/>
    <p>{message}</p>
    <i>{author}</i><hr /><br />
</div>
);

}

function GetTop({ top }){
    if(top)
        return '\u2764'
    return '';
}
export default MyBolgs;