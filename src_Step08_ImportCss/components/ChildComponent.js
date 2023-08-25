/*
    [모듈화된 css를 사용하는 방법]
    1. css 파일의 이름에 .module.을 추가한다.
    2. from 과 함께 import해서 사용한다.
*/ 

import styles from "../css/custom.module.css"

//함수를 만들면서 동시에 export해도 된다.
export default function ChildComponent(){

    console.log(styles);

    return(
        <div>
            <h3>Child Component입니다.</h3>
            {/* 변경된 class 선택자를 styles object를 이용해서 얻어낸다. */}
            <p className={styles["text-red"]}>어쩌구 저쩌구</p>
            <p className={styles["text-blue"]}>어쩌구 저쩌구</p>
            <p className={`${styles["text-blue"]} ${styles["text-bold"]}`}>어쩌구 저쩌구</p>
        </div>
    )
}