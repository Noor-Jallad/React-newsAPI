import React, { Component } from 'react'
import axios from 'axios'
export default class Home extends Component {
    state={data:[]}
    componentDidMount()
    {
        this.getNews();
    }
     async getNews(){
        const key="c90059d0872945d78bf605830c221885";
        const url=`https://newsapi.org/v2/everything?q=tesla&from=2023-01-04&sortBy=publishedAt&apiKey=${key}`;
     let {data}=await axios.get(url);
    //  console.log(data.articles)
    this.setState({data:data.articles})
    }
  render() {
    return (
    
         <div className="container">
            <h1 className='text-center text-dark fw-bold'>Latest News!!</h1>
            <div className="row">
                {
                    this.state.data.map((article,index)=>{
                    return(
                        <div className="col-md-4" key={index}>
                            <div className="card">
                                <div className="card-header">
                                    <img src={article.urlToImage} alt="This is article image" className='img-fluid'/>
                                </div>
                                <div className="card-body">
                                    <h2>{article.title}</h2>
                                    <p>{article.description}</p>
            
                                </div>
                            </div>

                        </div>
                    )
                    })
                }
                
            </div>
         </div>
    
    )
  }
}
