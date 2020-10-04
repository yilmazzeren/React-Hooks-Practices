import React, { Component } from 'react'

 class ClassComponent extends Component {

    state = {
        counter:0,
        timer:0
    }

    // componentDidMount () {
    //     // component ilk yüklendiğinde çalıştırılıyordu,bir daha çalıştırılmıyordu
    //     console.log("componentDidMount çalıştı.")
    // }

    //-------------------------------------------------

    // componentDidUpdate (prevProps,prevState) {
    //     // component her yenilendiğinde çağırılır. Yani burda butona her bastıgımda çalışır
    //     console.log("componentDidUpdate çalıştı.")
    //     if(prevState.counter !== this.state.counter) {
    //         console.log("componentdid update çalıştı.")
    //     }
    // }


    //--------------------------------------------

    
    // componentDidMount () {
    //     this.myTimer = setInterval(()=>{
    //         this.setState({timer:this.state.timer+1})
    //     },1000)
    // }

    // componentDidUpdate () {
    //     console.log("Timer:", this.state.timer)
    // }

    // componentWillUnmount () {
    //     // willunmount temizleme işlemidir. Burda bunu kullanmaz isek sayma işlemini yapan componenti toggle buttonuna bastıgımızda yerıne bos div gönderiyruz. Ama temizleme yapmazsak hata alarız hala saymaya çalışır.
    //     clearInterval(this.myTimer)
    // }

    render() {
        return (
            <div style={{background:"lightblue"}}>
                <h2>Class Component</h2>
                {this.state.counter}
                <button onClick={()=> {
                    this.setState({
                        counter:this.state.counter+1
                    })
                }}>class</button> <br/> <br/>
            </div>
        )
    }
}

export default ClassComponent;