import React, {useState, useRef} from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdCropOriginal } from "react-icons/md";
import { HiOutlineLink } from "react-icons/hi";
import Grid from "../elements/Grid";
//import Upload from "../shared/Upload";
import styled from "styled-components";
import { actionCreators as postActions } from "../redux/modules/post";

const HeaderBox = () => {
    const dispatch = useDispatch();
    const fileInput = useRef();
    const [contents, setContents] = useState("");
 
    const changeContents = (e) => {
      setContents(e.target.value);
  };

    const addPostBtn = () => {
      let image = fileInput.current.files[0];
      console.log(image);
  
      dispatch(postActions.addPostDB({ contents: contents, image: image }));
     };

return (
    <div>
      <Text>Home</Text>
      <BB>
        <MyImage src="https://t1.daumcdn.net/cfile/tistory/263B293C566DA66B27"/>
        <Input value={contents} onChange={changeContents} type="text" 
        placeholder="What's happening?"  maxLength={120} />
      </BB>
  
      <Grid is_flex>
        <p><HiOutlineLink size="25" color="#5db1f4"/>
        < MdCropOriginal size="25" color="#5db1f4"/></p>
           <form>
             <input
              cursor="pointer"
              type="file"
              name="file"
              id="input-file"
              encType="multipart/form-data"
              ref={fileInput}
             />
           </form>
        <Btn onClick={addPostBtn}>Tweet</Btn>
        {/* onClick={()=>{addPost}} */}
      </Grid>
        
    </div>
  );
  
};

const Btn = styled.button`
  height: 36px;
  width: 76px;
  border: none;
  border-radius: 30px;
  margin: 0px 16px 10px 16px;
  background-color: #3caaf3;
  color: white;

  :hover {
    background-color: #118ada;
  }
`;

const Input = styled.input`
  //height: 36px;
  //width: 76px;
  border: none;
  margin: 20px 16px 10px 16px;
  font-size: 20px;
  outline:none;
`;

const MyImage = styled.img`
  height: 55px;
  width: 55px;
  margin: 10px 0px 10px 0px;
  border-radius: 50%
`;

const Text = styled.div`
  width: 50px;
  margin: 15px 0px 10px 13px;
  position: relative;
  font-weight: 650;
  font-size: 20px;
  color: #3e3d3d;
`;

const BB = styled.div`
  width: 50px;
  margin: 15px 0px 0px 18px;
  display: flex;
`;

export default HeaderBox;

