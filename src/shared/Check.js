export const CheckEmail = (email) => {
    let _reg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    return _reg.test(email);
};

export const CheckNick = (nick) => {
    // 한글, 영문 대소문자, 숫자만 가능
    let nickReg = /^[가-힣a-zA-Z0-9]/;
    return nickReg.test(nick);
};

export const CheckPwd = (pwd) => {
    // 숫자와 문자를 포함하여 6~12자리 이내로 작성
    let pwdReg = /^[A-Za-z0-9]{6,12}$/;
    return pwdReg.test(pwd);
};
