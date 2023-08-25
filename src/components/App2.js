
import axios from "axios";
import { useEffect, useState } from "react"

function App2(){
    const [cafeList, setCafeList]=useState([]);
    useEffect(()=>{
        //Cafe 글 목록 요청
        axios.get("http://localhost:9000/boot07/api/cafe")
        .then(res=>{
            setCafeList(res.data);
        })
        .catch(error=>{
            console.log(error)
        });
    }, [])

    return(
        <div className="container">
            <h1>카페 글 목록입니다</h1>
            <table>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                    </tr>
                </thead>
                <tbody>
                    {cafeList.map(item=>{
                        return(
                            <tr key={item.num}>
                                <td>{item.num}</td>
                                <td>{item.title}</td>
                                <td>{item.writer}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}