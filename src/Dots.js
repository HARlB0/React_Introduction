const Dot = ({ num, scrollIndex }) => {
    console.log(num,'넘버')
    return (
        <div
            style={{
                display:'flex',
                width: '100%',
                height: 60,
                alignItems:'center',
                fontWeight : "bold",
                color :  scrollIndex === num ? "#00D8FF" : "white",
                fontFamily: "Urbanist",
                fontSize: '17px',
                backgroundColor:'transparent'
            }}
        >{num}</div>
    );
};

const Dots = ({ scrollIndex }) => {
    return (
        <div style={{ position: "fixed" ,height : "100%",display:"flex",alignItems:'center' ,backgroundColor:'transparent'}}>
            <div
                style={{ 
                    width: '200px',
                    marginLeft:'30%',
                    // height:'100%',
                    alignItems:'center',
                    backgroundColor:'transparent'

                }}
            >
                <Dot num={'Home'} scrollIndex={scrollIndex}></Dot>
                <Dot num={'Works'} scrollIndex={scrollIndex}></Dot>
                <Dot num={'About Me'} scrollIndex={scrollIndex}></Dot>
                <Dot num={'Contact Me'} scrollIndex={scrollIndex}></Dot>
            </div>
        </div>
    );
};

export default Dots;