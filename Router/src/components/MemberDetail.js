import {useParams} from "react-router-dom";

function MemberDetail() {

    //const params = useParams();
    //const memberId = params.memberId;

    const {memberId} = useParams();


    return (
      <div>Member Detail : {memberId}</div>
    );
}

export default MemberDetail;