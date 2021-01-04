import React, {useState, useEffect} from "react"

function FetchQuote() {
    const [quote, setQuote] = useState('');

    useEffect(()=>{ fetch(' https://quotes.rest/qod')
    .then(res=> res.json())
    .then(data=>{
    console.log(data);
    setQuote(data.contents.quotes[0].quote)
    })
    },[])
      return(
    <>
    <p>{quote}</p>
    </>
)
}
export default FetchQuote