const Dot = ({ num, scrollIndex }) => {
    console.log(num,'넘버')
    return (
        <div
            style={{
                display:'flex',
                width: '100%',
                height: 70,
                alignItems:'center',
                fontWeight : "bold",
                color :  scrollIndex === num ? "#7437ff" : "white",
                fontFamily: "Gilroy,Arial,sans-serif",
                fontSize: '15px',
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
                    width: '150px',
                    paddingLeft:'15%',
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