import {useState ,useEffect, useContext} from 'react';
import axios from 'axios';
import close from '../images/cancel (1).png';
import Image from 'next/image';
import context from '../../../helpers/context/authContext';


const Seo = ({Seoroute,info}) => {

    const [select ,setSelect] = useState("home");
    const [title ,setTitle] = useState("");
    const [route ,setRoute] = useState("");
    const [description ,setDescription] = useState("");
    const [keywords ,setKeyword] = useState("");
    const [ogType ,setOgType] = useState("");
    const [ogUrl ,setOgUrl] = useState("");
    const [loading ,setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [value ,setValue] = useState('');
    const [price ,setPrice] = useState('');
    const [payPrice ,setPayPrice] = useState('');
    const {Api} = useContext(context)

  useEffect(() => {
if(info){
    const seoInfo = info &&  info.find(res => res.route === select);
    if(seoInfo){
        setTitle(seoInfo.title);
        setDescription(seoInfo.description);
        setKeyword(seoInfo.keywords);
        setOgType(seoInfo.ogType);
        setOgUrl(seoInfo.ogUrl);
    }

}
  },[select])

   const postHandler = async (e) =>{    
   e.preventDefault();
   const post = {title ,route , description , keywords , ogType ,ogUrl};
   setLoading(true)
    try{  
        if(Seoroute === "new-seo"){
            await axios.post(`${Api}/adminRoute/Seo` , post ,{withCredentials:true} ).then(res => {
                if(res.data.errMessage){
                    alert(res.data.errMessage)
                    setLoading(false)
                }
                alert(res.data.Message)
                setLoading(false)
            } )
        }    

    }catch(err){
  }    
}

const updateHandler = async (id) =>{    

const post = {title ,route , description , keywords , ogType ,ogUrl ,id};

     try{      
        if(Seoroute === "edit-seo"){
         await axios.put(`${Api}/adminRoute/SeoUpdate` , post ,{withCredentials:true} ).then(res => {
            
             if(res.data.errMessage){
                 alert(res.data.errMessage)
                 setLoading(false)
             }
             alert(res.data.Message)
                setLoading(false)
         } )
        }
     }catch(err){
   }    
 }
 const serviceHandler = async (e) =>{    
    e.preventDefault();
    const post = {title , price ,payPrice , propertys:data};
    setLoading(true)
     try{  
         if(Seoroute === "seo-service"){
             await axios.post(`${Api}/adminRoute/seoService` , post ,{withCredentials:true} ).then(res => {
                 if(res.data.errMessage){
                     alert(res.data.errMessage)
                     setLoading(false)
                 }
                 alert(res.data.Message)
                 setLoading(false)
             } )
         }    
 
     }catch(err){
   }    
 }

 const onchangeInput = () =>{
     setData([...data , value]);
     setValue('')
 }
const removeHandler = (val) => {
    setData(data.filter(res => res !== val))
}
const filter = info && info.filter(res => res.route === select);

      return(
        <div className="products">
           {Seoroute === 'new-seo' &&  
           <form style={{padding:"20px"}} onSubmit={postHandler}>
                <div className="article-holder">
                <input placeholder="?????????? " type='text' onChange={(e) => setTitle(e.target.value)} />
                <select style={{left:"0px" , top:"15px" ,zIndex:"12" }} onChange={(e) => setRoute(e.target.value)}>      
                <option value="">???????????? ???????? ???????? ?????????? ????</option>
                <option value="home">???????? ????????</option>
                <option value="exclusive">???????? ??????????????</option>
                <option value="seo">??????</option>
                <option value="contact">???????? ???? ????</option>
                <option value="articles">????????????</option>
                <option value="shop">????????????????</option>
                <option value="company">??????????</option>
                <option value="medical">??????????</option>
                <option value="realState">??????????</option>
                <option value="news">????????</option>
                <option value="resturant">??????????????</option>
                <option value="personal">????????</option>
                </select>

                <input placeholder="og:type" type='text' onChange={(e) => setOgType(e.target.value)} />
                <input placeholder="og:url" type='text' onChange={(e) => setOgUrl(e.target.value)} />

                <textarea placeholder="description" type='text' onChange={(e) => setDescription(e.target.value)} />
                <textarea placeholder="???????? ??????????" type='text' onChange={(e) => setKeyword(e.target.value)} />
            </div>
                <button disabled={loading} onClick={postHandler}>{loading && <div style={{height:"30px" ,width:"30px",top:"25%"}} className='loading-spinner'></div>} ??????????</button>

            </form>}

            {Seoroute === 'edit-seo' &&  
            <div style={{margin:"auto",zIndex:"20"}}>
            <select style={{ marginTop:"-20px",width:"80%",zIndex:"12",background:"#ff9800",color:"white"}} onChange={(e) => setSelect(e.target.value)}>      
                <option value="">???????????? ???????? ???????? ?????????? ????</option>
                <option value="home">???????? ????????</option>
                <option value="exclusive">???????? ??????????????</option>
                <option value="seo">??????</option>
                <option value="contact">???????? ???? ????</option>
                <option value="news">????????????</option>
                <option value="shop">????????????????</option>
                <option value="company">??????????</option>
                <option value="medical">??????????</option>
                <option value="realState">??????????</option>
                <option value="news">????????</option>
                <option value="resturant">??????????????</option>
                <option value="personal">????????</option>
                </select>
                {filter && filter.map(res => {
                    return <form style={{padding:"20px",height:"100%"}} onSubmit={postHandler}>
                    <div className="article-holder">
                    <input value={title} style={{width:"86%"}} placeholder="??????????" type='text' onChange={(e) => setTitle(e.target.value)} />
                    <input value={ogType} placeholder="og:type" type='text' onChange={(e) => setOgType(e.target.value)} />
                    <input value={ogUrl} placeholder="og:url" type='text' onChange={(e) => setOgUrl(e.target.value)} />
    
                    <textarea value={description} placeholder="description" type='text' onChange={(e) => setDescription(e.target.value)} />
                    <textarea value={keywords} placeholder="???????? ??????????" type='text' onChange={(e) => setKeyword(e.target.value)} />
                </div>
                    <button disabled={loading} onClick={() => updateHandler(res._id)}>{loading && <div style={{height:"30px" ,width:"30px",top:"25%"}} className='loading-spinner'></div>} ?????????? ????????????</button>
    
                </form>
                })           
             }
            </div>}
            {Seoroute === 'seo-service' && 
            <form style={{paddingBottom:"20px"}}>
               <input onChange={(e) => setTitle(e.target.value)} placeholder="??????????" /> 
               <input onChange={(e) => setPrice(e.target.value)} placeholder="????????" /> 
               <input onChange={(e) => setPayPrice(e.target.value)} style={{marginLeft:"46%"}} placeholder=" ???????? ??????????" /> 
            <div style={{width:"86%",display:"flex"}}>
                <input defaultValue={value} placeholder="?????????? ????" onChange={(e) => setValue(e.target.value)} /> 
                <b onClick={onchangeInput}
                style={{cursor:"pointer",fontSize:"14px",width:"40px",textAlign:"center",margin:"auto 10px" ,height:"40px",padding:"10px",borderRadius:"10px" ,backgroundColor:"black",color:"white"}}>
                +
                </b>
            </div>
            <div className="seoService-vijegi">
                {data.length > 0 && data.map(res => {
                    return <div>
                        {res}<Image width={20} height={20} src={close} onClick={() => removeHandler(res)}  alt="" />
                    </div>
                })}
            </div>
            <button disabled={loading} onClick={serviceHandler}>{loading && <div style={{height:"30px" ,width:"30px",top:"25%"}} className='loading-spinner'></div>} ??????????</button>
            </form>}

        </div>

    )
}

export default Seo
