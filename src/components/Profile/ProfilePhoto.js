import personelImg from "../../ProfilePic.jpg";
function ProfilePhoto(){
    return (
        <img className="rounded" src={personelImg} width="400px" height="300px" />
    );
}

export default ProfilePhoto;