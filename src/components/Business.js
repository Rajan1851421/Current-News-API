import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';

export class Business extends Component {
    
    static defaultProps = {
        country:'in',
        pageSize:6
    }
   static propTypes = {
        country:PropTypes.string,
        pageSize:PropTypes.number
    }
   
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page:1
               
        }
    }
    async componentDidMount(){
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9b7571cb6cc94c6a897fda39db74b3bc&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data= await fetch(url);
        let parsData= await data.json();
        this.setState({
            articles: parsData.articles,
            totalResults:parsData.totalResults,
            loading:false
        })
    }

    handleNextClick =async()=>{
        console.log('nextTick')
        if(!(this.state.page +1>Math.ceil(this.state.totalResults/this.props.pageSize))){
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9b7571cb6cc94c6a897fda39db74b3bc&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data= await fetch(url);
        let parsData= await data.json();
        
        this.setState({
            page:this.state.page+1,
            articles:parsData.articles,
            loading:false
        })
    }


    }


    handlePrevClick= async()=>{
        console.log('prev');
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9b7571cb6cc94c6a897fda39db74b3bc&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
        let data= await fetch(url);
        this.setState({loading  : true})
        let parsData= await data.json();
        this.setState({
            page:this.state.page-1,
            articles:parsData.articles,
            loading:false
        })
       

    }
  render() {
    
    return (
        <>
          <div className='container my-3'>
            <br />
            <br />
            <br />
            
                    <h1 className='my-2 bold text-center '> Top Headlines Of Business</h1>
                
                <hr />
                {this.state.loading && <Spinner/>}
               
                <div className="row">
                    {! this.state.loading && this.state.articles.map((element)=>{

                    return <div className="col md-4 my-5" key={element.url}>
                        <NewsItem title={element.title?element.title.slice(0,45): " "}discription={element.description ?element.description.slice(0,70):""} imageUrl = {element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}/>
                        </div>
                    })}
                      
                 
                </div>
                    <div className="container d-flex justify-content-between">
                        <button type="button" className="btn btn-danger mx-3"  disabled={this.state.page<=1} onClick={this.handlePrevClick}> &#8592; Privious</button>
                        <button type="button" disabled={this.state.page +1>Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-danger" onClick={this.handleNextClick}>Next&rarr;</button>
                    </div>              
            </div>

            

        </>
    )
  }
}

export default Business
