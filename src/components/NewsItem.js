import React, { Component } from 'react'
import '../App.css';

export class NewsItem extends Component {
  
  render() {
   let {title,discription,imageUrl,newsUrl,author,date}=this.props;
    return (
      <div className='container'>
                <div className="card" style={{width: "18rem"}}>
                    <img src={!imageUrl ?'https://images.indianexpress.com/2022/12/Star-feeding-frenzy-20221205.jpg':imageUrl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title"> {title}....</h5>
                    <p className="card-text">{discription}.... </p>
                    <p className="card-text  "><small className="text-muted">By {!author?'unknown':author} <br/>{new Date(date).toLocaleTimeString()} On Update <br />{new Date(date).toLocaleDateString()} <br />{new Date(date).toLocaleTimeString()}                    </small></p>
                    <a href={newsUrl} target="_blank" className="btn btn-primary brn-sm">Read More</a>
                </div>
        </div>
      </div>
    )
  }
}

export default NewsItem