import React, { useState, useEffect } from "react";

function FunctionComponent() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [timer,setTimer] = useState(0);

  // useEffect (()=> {
  //     console.log("useEffect")
  //     // useEffect bir fonkve array alır. Bu haliyle hem mount hemde update özelliği görür. yani hem sayfa ilk yüklediğnde çalışır hemde her yenilendiğinde
  // })

    //-----------------------------------------------

  //   useEffect(() => {
  //     console.log("useEffect");

  //     // bu diziye bak bu dizinin içindeki elemanler değiştiğinde içeriyi çalıştır.Boş olursa dizi component ilk yüklendiğinde çalışır daha çalışmaz
  //   }, [counter]);


  //-----------------------------------------------
    
  useEffect(()=>{
      const myTimer = setInterval(() => {
          setTimer(timer+1)
      },1000)
      // burada clear işlemi (componentWillunmount) return keyword'ü ile yapılır.

      return () => clearInterval(myTimer)
  } )


  const increase = () => {
    setCounter(counter + 10);
  };

  useEffect(()=> {
      console.log(timer)
  })
  return (
    <div style={{ background: "grey" }}>
      <h2>Function Component</h2>
      <p>counter:{counter}</p>
      <p>counter2:{counter2}</p>
      <button onClick={() => increase()}>counter</button> <br />
      <button onClick={() => setCounter2(counter2 + 5)}>counter2</button> <br />
      <br />
    </div>
  );
}

export default FunctionComponent;
