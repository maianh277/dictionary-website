

import React, { useState, useEffect } from "react";

const CommunityCreatePost = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  useEffect(() => {
    if (isFormVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isFormVisible]);

  const handlePostClick = () => {
    // Xử lý việc đăng bài
  };

  const handleCancelClick = () => {
    setIsFormVisible(false);
  };

  const handleCreatePostClick = () => {
    setIsFormVisible(true);
  };

  return (
    <div className="mt-[10px]">
      <div className="h-[60px] mx-[100px] bg-white shadow-lg border-black-50 rounded-[20px] border-2">
        {!isFormVisible && (
          <div className="flex py-2 px-10 items-center">
            <div>
              <img
                src="https://mdbootstrap.com//img/Photos/Square/1.jpg"
                className="object-left mr-5 pt-0 smw-8 sm:h-8 w-10 h-10 object-cover rounded-full border-2 border-green-900 p-[2px]"
                alt="logo"
              />
            </div>
            <div className="w-full" onClick={handleCreatePostClick}>
              <input
                className="h-8 bg-emerald-50 border-2 border-emerald-600 hover:border-emerald-400 rounded-full text-left w-full px-3"
                placeholder="Create post..."
                readOnly
              />
            </div>
          </div>
        )}
        {isFormVisible && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-50 bg-black">
            <form className="w-[500px] h-[400px] inline-block bg-white border-emerald-600 border-2 items-center mx-[50px] rounded-[15px]">
              <div className="container">
                <div className="font-bold text-[25px] pt-1  item-center flex justify-center my-5">Create Post</div>
                <fieldset style={{ border: "0px" }}>
                  <div className="panel-post flex order-last">
                    <img
                      src="https://mdbootstrap.com//img/Photos/Square/1.jpg"
                      className="object-left mr-5 pt-0 ml-10 sm:w-8 sm:h-8 w-10 h-10 object-cover rounded-full border-2 border-green-900 p-[2px]"
                      alt="avt"
                    />
                    <textarea
                      spellCheck="false"
                      id="new-posts-input-area"
                      placeholder=" import content..."
                      className="content-input w-[300px] border-gray-900 border-[1px] rounded-lg"
                      style={{
                        overflow: "hidden",
                        overflowWrap: "break-word",
                        resize: "horizontal",
                        height: "75px",
                      }}
                    ></textarea>
                  </div>
                  <div className="media-container">
                      <div className="my-3.5">
                        <span className="ml-20 ">
                          <i className=" "></i>- Chọn 1 hoặc nhiều ảnh
                          <small style={{ color: "rgb(153, 153, 153)" }}>(không bắt buộc)</small>{" "}
                        </span>
                        <input 
                          type="file" 
                          multiple="multiple"  
                          accept=".png, .jpg, .jpeg, .gif" 
                          data-toggle="tooltip" 
                          data-placement="top" 
                          title=""
                          className = "ml-28" />
                      </div>
                    </div>
                    <div id="preview-image-post" className="preview-image"></div>
                    <div id="pick-hashtag" className="prepare-hashtag">
                      <h4 className="ml-20">- Chọn hashtag: <small style={{ color: "red" }}>* bắt buộc</small></h4>
                      <select multiple="" id="select2-hashtag" name="states[]" className="w-[60%] h-10 ml-28  border-gray-900 border-[1px] rounded-lg" tabIndex="-1" aria-hidden="true" >
                        <option value="1"></option>
                        <option value="2">#Writing</option>
                        <option value="3">#Reading</option>
                        <option value="4">#Speaking</option>
                        <option value="5">#Listening</option>
                        <option value="6">#SAT</option>
                        <option value="7">#GMAT</option>
                        <option value="8">#TOEFL</option>
                        <option value="9">#TOEIC</option>
                        <option value="10">#IELTS</option>
                        <option value="11">#Khác</option>
                      </select>
                    </div>
                    <div className="post-bottom-area ml-56 mt-10">
                      <button type="button" className="btn post-btn mr-10 bg-teal-100 hover:bg-hoverDarkBlue hover:text-white h-8 w-20 rounded-lg" onClick={handleCancelClick} >
                        <span>Hủy bỏ</span>
                      </button>
                      <button type="button" className="btn post-btn text-white bg-green-700 hover:bg-hoverDarkBlue  h-8 w-20 rounded-lg" onClick={handlePostClick}>
                        <span>Đăng bài</span>
                        {/* <span style={{ display: "none" }}>Lưu <img src="https://dungmori.com/assets/img/loading.gif" className="posting-icon" /></span>
                        <span style={{ display: "none" }}>Đã đăng bài <i className="zmdi zmdi-check-circle"></i></span> */}
                      </button>
                      {/* <span style={{ color: "red", float: "right", margin: "4px 10px 0px 0px", display: "none" }}></span> */}
                    </div>
                </fieldset>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommunityCreatePost;