import React,{useState,useEffect} from 'react';

function TempApp() {
    const [city, setcity] = useState(null);
    const [search, setsearch] = useState("mumbai");

    const Data=(event)=>{
        const name1=event.target.value;
        setsearch(name1);
    }
    useEffect(() => {
            const fetchData = async () => {
                const url=`http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=1f6d8fae692fb631bf07a87cbda89596`;
                const response = await fetch(url);
                const resJson=await response.json();
                console.log(resJson);
                setcity(resJson.main)
            }
            fetchData()  
    },[search]);
    // useEffect(() => {
    //     async function getData(){
    //         const res=await axios.get(`api.openweathermap.org/data/2.5/weather?q=${city}&appid=1f6d8fae692fb631bf07a87cbda89596`);
    //         console.log(res);
    //     }
    //     getData();
    // });
    return (
        <>  <div className="check">
            <div className="main">
                <div className="input">
                    <label>Enter cityName</label>
                    <input type="search" onChange={Data} className="form-control" aria-describedby="emailHelp" placeholder="Patna" />
                </div>
                {
                    !city?(<p>No Data Found</p>):(
                        
                    <div>
                    <div className="data">
                    <h2><i className="fas fa-street-view"></i> {search}</h2>
                    <h1 className="temp">
                        {city.temp}
                    </h1>
                    <h3 className="min_max">
                        min:5.16 max:5.36
                    </h3>
                </div>
                    </div>)
                }
                
            </div>
            </div>
        </>
    )
}

export default TempApp;


// 1f6d8fae692fb631bf07a87cbda89596