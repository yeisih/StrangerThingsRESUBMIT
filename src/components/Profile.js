const Profile= ()=>{
function logout (){
    if (localStorage.getItem ("token")){
        localStorage.removeItem("token")
    }
}

    return (
    <div>
<p> This is a Profile</p>
<button type="button" onClick={logout} > Log out </button>
    </div> )
}
export default Profile;