import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import Masonry from 'react-masonry-css'

class Business extends Component {
    state = {
        data : null,
        loading : false
    }

    componentDidMount() {
        this.getData()
    }
    getData = async() => {
        try{
            this.setState({
                loading : true
            })
            const res = await axios.get('http://newsapi.org/v2/top-headlines?country=kr&category=business&apiKey=c879347114154e8b8bd6f7afb756b61d')
            this.setState({
                data : res.data
            })
        }catch(err){

        }
        this.setState({
            loading : false
        })
    }
    

    render() {
        const {loading, data} = this.state
        return (
            <div>
                <Busi>
                    {
                        loading && <h3> data loading...... </h3>
                    }
                    <Masonry
                    breakpointCols={3}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column">
                        {
                            !loading && data && data.articles.map ((item,index)=> 
                                <article key={index}>
                                    <h2>{item.title}</h2>
                                    <h4>{item.publishedAt}</h4>
                                    <img src={item.urlToImage} alt="main image" />
                                    <p>{item.description}</p>
                                </article>
                            )
                        }
                    </Masonry>
                </Busi>
            </div>
        );
    }
}

export default Business;

const Busi = styled.div`
    width: 80%;
    margin: 0 auto;

    .my-masonry-grid {
        display: -webkit-box; /* Not needed if autoprefixing */
        display: -ms-flexbox; /* Not needed if autoprefixing */
        display: flex;
        margin-left: -30px; /* gutter size offset */
        width: auto;
    }
    .my-masonry-grid_column {
        padding-left: 30px; /* gutter size */
        background-clip: padding-box;
    }
       
      /* Style your items */
    .my-masonry-grid_column > div { /* change div to reference your elements you put in <Masonry> */
        background: grey;
        margin-bottom: 30px;
    }

    article{
        border: 2px solid #000;
        margin-bottom: 20px;
        padding : 20px;

        img{
            width: 100%;
        }
    }
`